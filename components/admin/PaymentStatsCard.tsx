import React from 'react';

interface PaymentStatsCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  bgColor: string;
  textColor?: string;
}

export default function PaymentStatsCard({ 
  title, 
  value, 
  icon, 
  bgColor,
  textColor = 'text-gray-900' 
}: PaymentStatsCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-base text-gray-500">{title}</p>
          <p className={`text-base ${textColor}`}>{value}</p>
        </div>
        <div className={`${bgColor} rounded-2xl w-12 h-12 flex items-center justify-center`}>
          {icon}
        </div>
      </div>
    </div>
  );
}
