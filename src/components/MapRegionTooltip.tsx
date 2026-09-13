import React from 'react';
import { GlobalLocationData } from '../data/executiveData';
import { Briefcase, Building2, MapPin, CheckCircle, TrendingUp, Sparkles } from 'lucide-react';

interface MapRegionTooltipProps {
  location: GlobalLocationData;
  coords: { x: number; y: number }; // Pixel or percentage within the map container
  containerWidth: number;
}

export const MapRegionTooltip: React.FC<MapRegionTooltipProps> = ({
  location,
  coords,
  containerWidth,
}) => {
  // Prevent tooltip from overflowing left or right edges of map container
  const isRightHalf = coords.x > (containerWidth * 0.6);
  const isTopHalf = coords.y < 180;

  return (
    <div
      role="tooltip"
      aria-hidden="false"
      className={`absolute z-50 pointer-events-none transition-all duration-150 ease-out ${
        isRightHalf ? '-translate-x-[92%]' : '-translate-x-[8%]'
      } ${isTopHalf ? 'translate-y-4' : '-translate-y-[108%]'}`}
      style={{
        left: `${coords.x}px`,
        top: `${coords.y}px`,
      }}
    >
      <div className="w-72 sm:w-80 bg-[#081F33]/98 backdrop-blur-md border border-[#1677D2] rounded-lg shadow-2xl p-4 text-white">
        {/* Header */}
        <div className="flex items-start justify-between gap-2 pb-2.5 mb-2.5 border-b border-slate-700/80">
          <div>
            <div className="flex items-center space-x-1.5 text-[10px] font-mono uppercase tracking-wider text-[#42B8FF] mb-0.5">
              <MapPin className="w-3 h-3 text-[#42B8FF]" />
              <span>{location.regionCode}</span>
            </div>
            <h4 className="font-serif text-sm font-bold text-white leading-snug">
              {location.name}
            </h4>
          </div>

          <div className="text-right shrink-0 bg-[#051525] px-2 py-1 rounded border border-slate-700/80">
            <span className="block font-serif text-base font-bold text-[#42B8FF] leading-none">
              {location.projectCount}+
            </span>
            <span className="text-[9.5px] font-mono uppercase text-slate-400">
              Engagements
            </span>
          </div>
        </div>

        {/* Practice Scale Badge */}
        <div className="flex items-center justify-between text-[11px] bg-[#071A2D] px-2.5 py-1.5 rounded mb-3 border border-slate-800">
          <span className="text-slate-400 flex items-center space-x-1.5">
            <TrendingUp className="w-3 h-3 text-[#42B8FF]" />
            <span>Consulting Scale:</span>
          </span>
          <span className="font-semibold text-slate-200 font-mono">
            {location.consultantsScale}
          </span>
        </div>

        {/* Key Industries */}
        <div className="mb-3">
          <div className="flex items-center space-x-1 text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
            <Building2 className="w-3 h-3 text-[#38BDF8]" />
            <span>Key Sector Domains</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {location.keyIndustries.map((industry) => (
              <span
                key={industry}
                className="text-[10px] font-medium bg-[#1677D2]/20 border border-[#1677D2]/40 text-[#60A5FA] px-2 py-0.5 rounded"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>

        {/* Primary Enterprise Accounts */}
        <div className="mb-3">
          <div className="flex items-center space-x-1 text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">
            <Briefcase className="w-3 h-3 text-[#42B8FF]" />
            <span>Associated Enterprise Clients</span>
          </div>
          <p className="text-[11px] text-slate-300 font-medium">
            {location.enterprises.join(' • ')}
          </p>
        </div>

        {/* Key Delivery Highlight */}
        <div className="pt-2 border-t border-slate-700/70 text-[11px] text-slate-300 font-light leading-relaxed italic flex items-start space-x-1.5">
          <Sparkles className="w-3 h-3 text-[#42B8FF] shrink-0 mt-0.5" />
          <span>{location.keyAchievement}</span>
        </div>
      </div>
    </div>
  );
};
