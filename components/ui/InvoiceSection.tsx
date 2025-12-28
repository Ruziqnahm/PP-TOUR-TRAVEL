import React from 'react';

interface InvoiceSectionProps {
  title: string;
  icon: React.ReactNode;
  iconBgColor?: string;
  children: React.ReactNode;
}

export default function InvoiceSection({ 
  title, 
  icon, 
  iconBgColor = 'linear-gradient(135deg, rgba(0, 188, 125, 1) 0%, rgba(0, 153, 102, 1) 100%)',
  children 
}: InvoiceSectionProps) {
  return (
    <div className="flex flex-col gap-5">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <div 
          className="w-10 h-10 rounded-[16.4px] flex items-center justify-center text-white"
          style={{ backgroundImage: iconBgColor }}
        >
          {icon}
        </div>
        <h3 className="text-2xl font-semibold text-[#101828]">{title}</h3>
      </div>
      
      {/* Section Content */}
      <div className="flex flex-col gap-3">
        {children}
      </div>
    </div>
  );
}
