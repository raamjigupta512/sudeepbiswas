import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Camera, Upload } from 'lucide-react';

interface ExecutivePortraitProps {
  defaultSrc?: string;
  altText: string;
  onLoadedChange?: (loaded: boolean) => void;
}

/**
 * Cleanly removes studio white/light background from an image in memory via Canvas
 * preserving authentic hair, face, glasses, shirt, tie, and suit with defringed edges.
 */
function extractForegroundFromCanvas(img: HTMLImageElement): string | null {
  try {
    const canvas = document.createElement('canvas');
    const width = img.naturalWidth || 350;
    const height = img.naturalHeight || 350;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    ctx.drawImage(img, 0, 0);
    const imgData = ctx.getImageData(0, 0, width, height);
    const data = imgData.data;

    // Check if the image has an opaque white/near-white background
    const cornerR = data[0];
    const cornerG = data[1];
    const cornerB = data[2];
    const cornerA = data[3];

    // If already transparent or dark, return original
    if (cornerA < 200 || (cornerR < 200 && cornerG < 200 && cornerB < 200)) {
      return null;
    }

    // Flood fill from outer perimeter to identify connected background pixels
    const visited = new Uint8Array(width * height);
    const queue: number[] = [];

    // Seed top, left, right, and top corner borders
    for (let x = 0; x < width; x++) {
      queue.push(x, 0);
      if (data[((height - 1) * width + x) * 4] > 230) {
        queue.push(x, height - 1);
      }
    }
    for (let y = 0; y < height; y++) {
      if (data[(y * width) * 4] > 220) {
        queue.push(0, y);
      }
      if (data[(y * width + (width - 1)) * 4] > 220) {
        queue.push(width - 1, y);
      }
    }

    let head = 0;
    while (head < queue.length) {
      const x = queue[head++];
      const y = queue[head++];
      const idx = y * width + x;
      if (visited[idx]) continue;

      const pIdx = idx * 4;
      const r = data[pIdx];
      const g = data[pIdx + 1];
      const b = data[pIdx + 2];

      // Definite background pixel threshold
      if (Math.min(r, g, b) >= 215 && (r + g + b) / 3 >= 220) {
        visited[idx] = 1;
        if (x > 0 && !visited[idx - 1]) queue.push(x - 1, y);
        if (x < width - 1 && !visited[idx + 1]) queue.push(x + 1, y);
        if (y > 0 && !visited[idx - width]) queue.push(x, y - 1);
        if (y < height - 1 && !visited[idx + width]) queue.push(x, y + 1);
      }
    }

    // Apply alpha mask and un-matting
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const idx = y * width + x;
        const pIdx = idx * 4;
        if (visited[idx]) {
          data[pIdx + 3] = 0; // Fully transparent
        } else {
          // Check if neighboring background exists for antialiasing
          let hasBgNeighbor = false;
          for (let dy = -1; dy <= 1 && !hasBgNeighbor; dy++) {
            for (let dx = -1; dx <= 1 && !hasBgNeighbor; dx++) {
              const nx = x + dx;
              const ny = y + dy;
              if (nx >= 0 && nx < width && ny >= 0 && ny < height && visited[ny * width + nx]) {
                hasBgNeighbor = true;
              }
            }
          }

          if (hasBgNeighbor) {
            const r = data[pIdx];
            const g = data[pIdx + 1];
            const b = data[pIdx + 2];
            const minChan = Math.min(r, g, b);
            if (minChan > 175) {
              const alpha = Math.max(0, Math.min(1, (240 - minChan) / (240 - 175)));
              data[pIdx + 3] = Math.round(alpha * 255);
              // Un-mat against white background
              if (alpha > 0.05 && alpha < 0.95) {
                data[pIdx] = Math.max(0, Math.min(255, Math.round((r - (1 - alpha) * 255) / alpha)));
                data[pIdx + 1] = Math.max(0, Math.min(255, Math.round((g - (1 - alpha) * 255) / alpha)));
                data[pIdx + 2] = Math.max(0, Math.min(255, Math.round((b - (1 - alpha) * 255) / alpha)));
              }
            }
          }
        }
      }
    }

    ctx.putImageData(imgData, 0, 0);
    return canvas.toDataURL('image/png');
  } catch (err) {
    console.warn('Canvas foreground extraction skipped:', err);
    return null;
  }
}

/**
 * ExecutivePortrait
 * Renders Sudeep Biswas's real professional photograph naturally emerging
 * from the deep navy environment without any white rectangular photo card.
 *
 * Preserves 100% of the real photograph:
 * - facial structure, eyes, nose, mouth, hairstyle, glasses, skin tone,
 *   expression, shirt, tie, and suit.
 *
 * Cinematic Integration:
 * - Zero white background box
 * - Soft cool blue rim lighting around shoulders
 * - Seamless lower-body fade (Suit -> darkened suit -> navy shadow -> hero background)
 * - Layered depth separation from deep navy environment
 */
export const ExecutivePortrait: React.FC<ExecutivePortraitProps> = ({
  defaultSrc = '/sudeep_extracted.png',
  altText,
  onLoadedChange,
}) => {
  const [portraitSrc, setPortraitSrc] = useState<string>(defaultSrc);
  const [hasFallback, setHasFallback] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const processLoadedImage = useCallback(
    (img: HTMLImageElement) => {
      // If the source image happens to be a raw JPEG with white background,
      // dynamically extract Sudeep cleanly
      if (!portraitSrc.includes('_extracted') && !portraitSrc.startsWith('data:image/png')) {
        const extracted = extractForegroundFromCanvas(img);
        if (extracted) {
          setPortraitSrc(extracted);
          return;
        }
      }
      setIsLoaded(true);
      onLoadedChange?.(true);
    },
    [portraitSrc, onLoadedChange]
  );

  // Check if image is already cached/complete on mount or when source changes
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      processLoadedImage(imgRef.current);
    }
  }, [portraitSrc, processLoadedImage]);

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    processLoadedImage(e.currentTarget);
  };

  const handleError = () => {
    if (!hasFallback) {
      setHasFallback(true);
      setPortraitSrc('/1516228066078_extracted.png');
    }
  };

  // Handle file selection or drag-and-drop
  const handleFile = async (file: File) => {
    if (!file.type.startsWith('image/')) return;
    setIsProcessing(true);

    const reader = new FileReader();
    reader.onload = async (e) => {
      const result = e.target?.result as string;
      if (result) {
        setIsLoaded(false);
        // Load temp image to run automatic white background extraction
        const tempImg = new Image();
        tempImg.onload = () => {
          const cleaned = extractForegroundFromCanvas(tempImg);
          setPortraitSrc(cleaned || result);
          setIsProcessing(false);
        };
        tempImg.onerror = () => {
          setPortraitSrc(result);
          setIsProcessing(false);
        };
        tempImg.src = result;
      } else {
        setIsProcessing(false);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div
      className={`relative w-full h-full aspect-square group select-none transition-all duration-300 ${
        isDragging ? 'ring-2 ring-[#42B8FF] scale-[1.01]' : ''
      }`}
      style={{ aspectRatio: '1 / 1' }}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
    >
      {/* Hidden file input for one-click photo update */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/jpg"
        className="hidden"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0]);
          }
        }}
      />

      {/* ================= ATMOSPHERIC SKELETON LOADER (ZERO WHITE BOX) ================= */}
      <div
        className={`absolute inset-0 z-10 overflow-hidden bg-[#071A2D] transition-opacity duration-700 ease-out aspect-square ${
          isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        style={{ aspectRatio: '1 / 1' }}
        aria-hidden={isLoaded}
      >
        {/* Soft Radial Ambient Glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-70"
          style={{
            background:
              'radial-gradient(circle at 50% 36%, rgba(66, 184, 255, 0.16) 0%, rgba(22, 119, 210, 0.08) 45%, transparent 75%)',
          }}
        />

        {/* Diagonal Light Shimmer Sweep */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <div
            className="w-[200%] h-full anim-shimmer pointer-events-none opacity-50"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, rgba(66, 184, 255, 0.04) 30%, rgba(255, 255, 255, 0.08) 50%, rgba(66, 184, 255, 0.04) 70%, transparent 100%)',
            }}
          />
        </div>

        {/* Stylized Executive Silhouette Contour */}
        <div className="relative w-full h-full flex flex-col items-center justify-center p-6 sm:p-8">
          <div className="relative flex flex-col items-center mb-4">
            <div className="w-24 h-30 sm:w-28 sm:h-34 rounded-[50%/60%_60%_40%_40%] bg-gradient-to-b from-[#102C48]/90 to-[#0B2239]/90 border border-slate-700/60 shadow-inner flex items-center justify-center relative overflow-hidden">
              <div className="absolute top-2 w-14 h-14 rounded-full bg-[#42B8FF]/10 blur-md" />
            </div>
            <div className="w-10 h-5 bg-[#0E2740] -mt-1 z-0" />
            <div className="w-56 sm:w-64 h-24 sm:h-28 rounded-t-[100px] bg-gradient-to-b from-[#0F2A45] via-[#0B2239] to-transparent border-t border-slate-700/60 -mt-2 z-0 relative flex items-start justify-center pt-2">
              <div className="w-8 h-8 border-l border-r border-slate-600/40 transform rotate-12 opacity-50" />
            </div>
          </div>

          <div className="absolute bottom-6 sm:bottom-8 inset-x-0 flex flex-col items-center justify-center px-4 text-center">
            <div className="inline-flex items-center space-x-2 bg-[#071A2D]/90 border border-slate-800 px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#42B8FF] animate-pulse" />
              <span className="text-[10px] sm:text-[10.5px] font-mono tracking-[0.2em] font-medium text-slate-300 uppercase">
                CALIBRATING CINEMATIC PORTRAIT
              </span>
            </div>
            <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase mt-1.5">
              SUDEEP BISWAS • EXECUTIVE PRESENCE
            </span>
          </div>
        </div>
      </div>

      {/* ================= CINEMATIC PORTRAIT CONTAINER WITH SEAMLESS BLEND ================= */}
      <div
        className="relative w-full h-full aspect-square overflow-hidden portrait-cinematic-blend"
        style={{ aspectRatio: '1 / 1' }}
      >
        {/* Real Sudeep Biswas Portrait Image */}
        <img
          ref={imgRef}
          src={portraitSrc}
          alt={altText}
          width={350}
          height={350}
          className={`w-full h-full object-cover object-top transition-all duration-700 ease-out group-hover:scale-[1.012] ${
            isLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-[1.02] blur-[1px]'
          }`}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          onLoad={handleImageLoad}
          onError={handleError}
          style={{
            objectFit: 'cover',
            objectPosition: 'center top',
            aspectRatio: '1 / 1',
            imageRendering: 'auto',
          }}
        />

        {/* Seamless Lower-Torso Gradient: Suit -> darkened suit -> navy shadow -> hero background */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-700"
          style={{
            background:
              'linear-gradient(to bottom, transparent 0%, transparent 58%, rgba(7, 26, 45, 0.45) 75%, rgba(7, 26, 45, 0.85) 88%, #071A2D 100%)',
          }}
          aria-hidden="true"
        />

        {/* Gentle side falloffs to guarantee seamless edges into navy environment */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-700"
          style={{
            background:
              'linear-gradient(to right, rgba(7, 26, 45, 0.3) 0%, transparent 8%, transparent 92%, rgba(7, 26, 45, 0.3) 100%)',
          }}
          aria-hidden="true"
        />
      </div>

      {/* Subtle, refined executive photo update control (visible on hover) */}
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        title="Update / replace portrait"
        className="absolute top-3 left-3 z-30 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-[#071A2D]/85 hover:bg-[#1677D2] text-slate-300 hover:text-white border border-slate-700/80 hover:border-[#42B8FF]/60 px-2.5 py-1.5 rounded text-[11px] font-medium tracking-wide flex items-center space-x-1.5 shadow-lg backdrop-blur-sm cursor-pointer"
      >
        <Camera className="w-3.5 h-3.5 text-[#42B8FF]" />
        <span>Update Portrait</span>
      </button>

      {/* Dragging state indicator */}
      {isDragging && (
        <div className="absolute inset-0 z-40 bg-[#071A2D]/90 backdrop-blur-sm flex flex-col items-center justify-center p-4 border-2 border-dashed border-[#42B8FF] rounded-lg">
          <Upload className="w-8 h-8 text-[#42B8FF] animate-bounce mb-2" />
          <p className="text-sm font-semibold text-white tracking-tight">Drop portrait image here</p>
          <p className="text-[12px] text-slate-400 mt-1">Updates executive portrait</p>
        </div>
      )}

      {/* Processing spinner indicator */}
      {isProcessing && (
        <div className="absolute inset-0 z-40 bg-[#071A2D]/80 backdrop-blur-sm flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-[#42B8FF] border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};
