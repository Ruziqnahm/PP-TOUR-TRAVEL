import React from 'react';

interface SmallStatsCardProps {
  title?: string;
  label?: string;
  icon: React.ReactNode | string;
  value: string | number;
  bgColor: string;
  iconColor?: string;
  valueColor?: string;
}

export function SmallStatsCard({ title, label, icon, value, bgColor, iconColor, valueColor }: SmallStatsCardProps) {
  const displayLabel = title || label;
  
  return (
    <div className="bg-white border border-[#f3f4f6] rounded-[16.4px] p-[17px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-between gap-[12px]">
        {/* Stats Info */}
        <div className="flex flex-col">
          <p className="text-[16px] leading-[25.6px] text-[#6a7282]">{displayLabel}</p>
          <p className={`text-[16px] leading-[25.6px] ${valueColor || 'text-[#101828]'} font-semibold`}>{value}</p>
        </div>
        
        {/* Icon Container */}
        <div className={`${bgColor} w-[48px] h-[48px] rounded-[16.4px] flex items-center justify-center shrink-0 ${iconColor || ''}`}>
          {typeof icon === 'string' ? (
            <img src={icon} alt="" className="w-[24px] h-[24px]" />
          ) : (
            icon
          )}
        </div>
      </div>
    </div>
  );
}
