import React, { useState } from 'react';
import { BarChart3 } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectClass?: string;
  fallbackTitle?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = '',
  aspectClass = 'aspect-video',
  fallbackTitle = 'Digital Vibes Studio'
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A1128] via-[#0F172A] to-[#0284C7] text-white p-8 ${aspectClass} ${className}`}
      >
        <div className="flex flex-col items-center text-center max-w-sm">
          <BarChart3 className="w-10 h-10 text-[#38BDF8] mb-3" />
          <span className="font-display text-lg font-semibold tracking-tight text-white">
            {fallbackTitle}
          </span>
          <span className="text-xs text-slate-300 mt-1">
            {alt}
          </span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={`object-cover ${aspectClass} ${className}`}
    />
  );
};
