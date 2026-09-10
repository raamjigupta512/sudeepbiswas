import React, { useState, useEffect, useRef } from 'react';
import { Camera, Upload } from 'lucide-react';

interface ExecutivePortraitProps {
  defaultSrc: string;
  altText: string;
}

/**
 * ExecutivePortrait
 * Renders Sudeep Biswas's professional portrait with automatic white-background elimination,
 * subtle atmospheric dark navy integration, soft blue rim glow, and natural skin tone preservation.
 * Also supports direct drag-and-drop and file upload of 1516228066078.jpeg.
 */
export const ExecutivePortrait: React.FC<ExecutivePortraitProps> = ({ defaultSrc, altText }) => {
  const [portraitSrc, setPortraitSrc] = useState<string>(() => {
    return localStorage.getItem('sudeep_real_portrait') || defaultSrc;
  });
  const [processedSrc, setProcessedSrc] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Process image on canvas to seamlessly extract subject from white studio background
  // and integrate into dark navy executive environment (#071A2D)
  const processImageForDarkNavy = (imageSource: string) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageSource;

    img.onload = () => {
      try {
        const width = img.naturalWidth || img.width;
        const height = img.naturalHeight || img.height;

        if (!width || !height) return;

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (!ctx) return;

        // Draw original image
        ctx.drawImage(img, 0, 0, width, height);
        const imgData = ctx.getImageData(0, 0, width, height);
        const data = imgData.data;

        // Sample corner pixels to check if background is white/light
        const cornerIndices = [
          0, // Top-left
          (width - 1) * 4, // Top-right
          4, // Top near-left
          (width - 5) * 4, // Top near-right
          width * 4 * 10, // 10px down left
          (width * 10 + width - 1) * 4, // 10px down right
        ];

        let avgCornerBrightness = 0;
        for (const idx of cornerIndices) {
          avgCornerBrightness += (data[idx] + data[idx + 1] + data[idx + 2]) / 3;
        }
        avgCornerBrightness /= cornerIndices.length;

        // If background is bright white/light (like studio headshot 1516228066078.jpeg)
        if (avgCornerBrightness > 200) {
          // Boundary flood-fill mask to identify ONLY the connected background
          // This ensures the white shirt collar, teeth, or glasses glare inside the silhouette are never removed!
          const visited = new Uint8Array(width * height);
          const queue: number[] = [];

          const isBgPixel = (x: number, y: number) => {
            if (x < 0 || x >= width || y < 0 || y >= height) return false;
            const idx = (y * width + x) * 4;
            const r = data[idx];
            const g = data[idx + 1];
            const b = data[idx + 2];
            // White / light grey studio background threshold
            return (r > 205 && g > 205 && b > 205) || (r + g + b > 630);
          };

          // Seed top edge, left edge (top half), right edge (top half)
          for (let x = 0; x < width; x++) {
            if (isBgPixel(x, 0)) {
              queue.push(x, 0);
              visited[x] = 1;
            }
          }
          for (let y = 0; y < Math.floor(height * 0.75); y++) {
            if (isBgPixel(0, y) && !visited[y * width]) {
              queue.push(0, y);
              visited[y * width] = 1;
            }
            if (isBgPixel(width - 1, y) && !visited[y * width + width - 1]) {
              queue.push(width - 1, y);
              visited[y * width + width - 1] = 1;
            }
          }

          // Flood fill BFS
          let head = 0;
          while (head < queue.length) {
            const cx = queue[head++];
            const cy = queue[head++];

            // 4-neighborhood
            const neighbors = [
              [cx + 1, cy],
              [cx - 1, cy],
              [cx, cy + 1],
              [cx, cy - 1]
            ];

            for (let i = 0; i < 4; i++) {
              const nx = neighbors[i][0];
              const ny = neighbors[i][1];
              if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                const nIndex = ny * width + nx;
                if (!visited[nIndex] && isBgPixel(nx, ny)) {
                  visited[nIndex] = 1;
                  queue.push(nx, ny);
                }
              }
            }
          }

          // Create composite canvas with dark navy executive atmosphere (#071A2D)
          const compCanvas = document.createElement('canvas');
          compCanvas.width = width;
          compCanvas.height = height;
          const compCtx = compCanvas.getContext('2d');
          if (!compCtx) return;

          // 1. Executive dark navy background (#071A2D to #0B2239)
          compCtx.fillStyle = '#071A2D';
          compCtx.fillRect(0, 0, width, height);

          // 2. Cinematic soft blue atmospheric backlighting & rim glow (#1677D2 and #42B8FF)
          const radial = compCtx.createRadialGradient(
            width * 0.5, height * 0.36, width * 0.05,
            width * 0.5, height * 0.42, width * 0.75
          );
          radial.addColorStop(0, 'rgba(66, 184, 255, 0.38)');
          radial.addColorStop(0.35, 'rgba(22, 119, 210, 0.28)');
          radial.addColorStop(0.65, 'rgba(10, 43, 76, 0.14)');
          radial.addColorStop(1, 'rgba(7, 26, 45, 0)');
          compCtx.fillStyle = radial;
          compCtx.fillRect(0, 0, width, height);

          // 3. Smooth alpha transition on mask boundary
          for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
              const idx = (y * width + x) * 4;
              const isBg = visited[y * width + x] === 1;

              if (isBg) {
                data[idx + 3] = 0; // Fully transparent
              } else {
                // Check if near boundary for anti-aliasing
                let bgNeighbors = 0;
                for (let dy = -1; dy <= 1; dy++) {
                  for (let dx = -1; dx <= 1; dx++) {
                    const nx = x + dx;
                    const ny = y + dy;
                    if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                      if (visited[ny * width + nx] === 1) bgNeighbors++;
                    }
                  }
                }
                if (bgNeighbors > 0) {
                  // Feather edge smoothly
                  const alphaFactor = 1 - (bgNeighbors / 9) * 0.7;
                  data[idx + 3] = Math.floor(data[idx + 3] * alphaFactor);
                }
              }
            }
          }

          // Put masked subject back on temp canvas
          ctx.putImageData(imgData, 0, 0);

          // 4. Draw cinematic rim edge glow around subject
          compCtx.save();
          compCtx.shadowColor = 'rgba(66, 184, 255, 0.4)';
          compCtx.shadowBlur = 18;
          compCtx.drawImage(canvas, 0, 0);
          compCtx.restore();

          // 5. Draw subject with natural skin tones & colors 100% preserved
          compCtx.drawImage(canvas, 0, 0);

          // 6. Seamless gradient blend at bottom to melt into #071A2D hero container
          const bottomGrad = compCtx.createLinearGradient(0, height * 0.7, 0, height);
          bottomGrad.addColorStop(0, 'rgba(7, 26, 45, 0)');
          bottomGrad.addColorStop(0.65, 'rgba(7, 26, 45, 0.6)');
          bottomGrad.addColorStop(1, 'rgba(7, 26, 45, 1)');
          compCtx.fillStyle = bottomGrad;
          compCtx.fillRect(0, height * 0.7, width, height * 0.3);

          // Final output
          const outputDataUrl = compCanvas.toDataURL('image/jpeg', 0.96);
          setProcessedSrc(outputDataUrl);
        } else {
          // Already dark background
          setProcessedSrc(imageSource);
        }
      } catch (err) {
        console.warn('Canvas processing fallback:', err);
        setProcessedSrc(imageSource);
      }
    };

    img.onerror = () => {
      setProcessedSrc(imageSource);
    };
  };

  useEffect(() => {
    processImageForDarkNavy(portraitSrc);
  }, [portraitSrc]);

  // Handle file selection or drag-and-drop
  const handleFile = async (file: File) => {
    if (!file.type.startsWith('image/')) return;
    setIsProcessing(true);

    const reader = new FileReader();
    reader.onload = async (e) => {
      const result = e.target?.result as string;
      if (result) {
        setPortraitSrc(result);
        localStorage.setItem('sudeep_real_portrait', result);
        processImageForDarkNavy(result);

        // Upload to server to persist in /public/1516228066078.jpeg
        try {
          await fetch('/api/upload-portrait', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ image: result, filename: file.name }),
          });
        } catch {
          // Fail silently, localStorage keeps it active
        }
      }
      setIsProcessing(false);
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
      className={`relative w-full h-full group select-none transition-all duration-300 ${
        isDragging ? 'ring-2 ring-[#42B8FF] scale-[1.01]' : ''
      }`}
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

      {/* Main Executive Portrait with CSS Mask */}
      <div className="relative w-full h-full overflow-hidden portrait-executive-mask">
        {/* Soft radial gradient behind portrait image for cinematic blue rim glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 75% 70% at 50% 36%, rgba(66, 184, 255, 0.4) 0%, rgba(22, 119, 210, 0.25) 40%, rgba(7, 26, 45, 0.1) 68%, transparent 100%)',
          }}
          aria-hidden="true"
        />
        <img
          src={processedSrc || portraitSrc}
          alt={altText}
          className="relative z-10 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      {/* Soft Radial Gradient Overlay to melt outer edges seamlessly into #071A2D */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 84% 88% at 50% 45%, transparent 48%, rgba(7, 26, 45, 0.35) 72%, rgba(7, 26, 45, 0.9) 95%, #071A2D 100%)',
        }}
      />

      {/* Subtle edge atmospheric grading overlay & directional vignettes */}
      <div className="absolute inset-x-0 top-0 h-16 pointer-events-none bg-gradient-to-b from-[#071A2D]/70 via-transparent to-transparent" />
      <div className="absolute inset-y-0 left-0 w-20 pointer-events-none bg-gradient-to-r from-[#071A2D] via-[#071A2D]/50 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-20 pointer-events-none bg-gradient-to-l from-[#071A2D]/90 via-[#071A2D]/40 to-transparent" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#071A2D] via-[#071A2D]/50 to-transparent opacity-90" />
      <div className="absolute bottom-0 inset-x-0 h-32 pointer-events-none bg-gradient-to-t from-[#071A2D] via-[#071A2D]/90 to-transparent" />

      {/* Subtle, refined executive photo update control (visible on hover) */}
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        title="Update / replace portrait with 1516228066078.jpeg"
        className="absolute top-3 left-3 z-30 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-[#071A2D]/85 hover:bg-[#1677D2] text-slate-300 hover:text-white border border-slate-700/80 hover:border-[#42B8FF]/60 px-2.5 py-1.5 rounded text-[11px] font-medium tracking-wide flex items-center space-x-1.5 shadow-lg backdrop-blur-sm cursor-pointer"
      >
        <Camera className="w-3.5 h-3.5 text-[#42B8FF]" />
        <span>Update Portrait</span>
      </button>

      {/* Dragging state indicator */}
      {isDragging && (
        <div className="absolute inset-0 z-40 bg-[#071A2D]/90 backdrop-blur-sm flex flex-col items-center justify-center p-4 border-2 border-dashed border-[#42B8FF] rounded-t-lg">
          <Upload className="w-8 h-8 text-[#42B8FF] animate-bounce mb-2" />
          <p className="text-sm font-semibold text-white tracking-tight">Drop 1516228066078.jpeg here</p>
          <p className="text-[12px] text-slate-400 mt-1">Automatically extracts subject & blends into dark navy</p>
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
