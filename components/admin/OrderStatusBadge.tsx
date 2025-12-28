import React from 'react';

export type OrderStatus = 'dikonfirmasi' | 'pending' | 'dibatalkan';

interface OrderStatusBadgeProps {
  status: OrderStatus;
}

export default function OrderStatusBadge({ status }: OrderStatusBadgeProps) {
  const getStatusConfig = () => {
    switch (status) {
      case 'dikonfirmasi':
        return {
          bg: 'bg-[#ecfdf5]',
          border: 'border-[#a4f4cf]',
          text: 'text-[#007a55]',
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ),
          label: 'Dikonfirmasi'
        };
      case 'pending':
        return {
          bg: 'bg-[#fffbeb]',
          border: 'border-[#fee685]',
          text: 'text-[#bb4d00]',
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M8 5V8L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          ),
          label: 'Pending'
        };
      case 'dibatalkan':
        return {
          bg: 'bg-[#fef2f2]',
          border: 'border-[#ffc9c9]',
          text: 'text-[#c10007]',
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          ),
          label: 'Dibatalkan'
        };
    }
  };

  const config = getStatusConfig();

  return (
    <div className={`${config.bg} ${config.text} border ${config.border} rounded-full h-[34px] px-3 flex items-center gap-2 w-fit`}>
      <div className="flex items-center justify-center">
        {config.icon}
      </div>
      <span className="text-sm font-['Segoe_UI'] leading-5">
        {config.label}
      </span>
    </div>
  );
}
