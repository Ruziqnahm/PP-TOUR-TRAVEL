import React from 'react';

type ScheduleStatus = 'active' | 'inactive';

interface ScheduleStatusBadgeProps {
  status: ScheduleStatus;
}

export default function ScheduleStatusBadge({ status }: ScheduleStatusBadgeProps) {
  const statusConfig = {
    active: {
      label: 'Aktif',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      textColor: 'text-emerald-700',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.3337 4L6.00033 11.3333L2.66699 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    inactive: {
      label: 'Tidak Aktif',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      textColor: 'text-red-700',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  };

  const config = statusConfig[status];

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${config.bgColor} ${config.borderColor}`}>
      <div className={config.textColor}>
        {config.icon}
      </div>
      <span className={`text-sm font-normal ${config.textColor}`}>
        {config.label}
      </span>
    </div>
  );
}
