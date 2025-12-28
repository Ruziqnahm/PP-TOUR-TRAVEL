import React from 'react';

interface InvoiceRowProps {
  label: string;
  value: string;
  emoji?: string;
}

export default function InvoiceRow({ label, value, emoji }: InvoiceRowProps) {
  return (
    <div className="bg-transparent flex h-[52px] items-center overflow-hidden rounded-[16.4px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]">
      <div 
        className="h-[52px] w-[224px] flex items-center px-6 py-4"
        style={{ 
          backgroundImage: 'linear-gradient(166.93deg, rgba(243, 244, 246, 1) 0%, rgba(229, 231, 235, 1) 100%)' 
        }}
      >
        <p className="text-base text-[#364153]">
          {emoji && `${emoji} `}{label}
        </p>
      </div>
      <div className="flex-1 h-[52px] bg-gradient-to-r from-[#10b981] to-[#059669] flex items-center px-6 py-4">
        <p className="text-sm font-bold text-white">{value}</p>
      </div>
    </div>
  );
}
