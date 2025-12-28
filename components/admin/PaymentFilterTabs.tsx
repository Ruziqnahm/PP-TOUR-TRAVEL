'use client';

import React, { useState } from 'react';

type FilterType = 'all' | 'paid' | 'pending';

interface PaymentFilterTabsProps {
  onFilterChange?: (filter: FilterType) => void;
  stats: {
    all: number;
    paid: number;
    pending: number;
  };
}

export default function PaymentFilterTabs({ onFilterChange, stats }: PaymentFilterTabsProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
    if (onFilterChange) {
      onFilterChange(filter);
    }
  };

  const tabs = [
    {
      id: 'all' as FilterType,
      label: 'Semua Pembayaran',
      count: stats.all,
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5 5.83333C2.5 4.91286 3.24619 4.16667 4.16667 4.16667H15.8333C16.7538 4.16667 17.5 4.91286 17.5 5.83333V14.1667C17.5 15.0871 16.7538 15.8333 15.8333 15.8333H4.16667C3.24619 15.8333 2.5 15.0871 2.5 14.1667V5.83333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2.5 8.33333H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      badgeBg: 'bg-white/20',
      badgeText: 'text-white'
    },
    {
      id: 'paid' as FilterType,
      label: 'Sudah Dibayar',
      count: stats.paid,
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.6663 5L7.49967 14.1667L3.33301 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      badgeBg: 'bg-emerald-100',
      badgeText: 'text-emerald-600'
    },
    {
      id: 'pending' as FilterType,
      label: 'Menunggu Verifikasi',
      count: stats.pending,
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 5.83333V10L12.5 11.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      badgeBg: 'bg-amber-100',
      badgeText: 'text-amber-700'
    }
  ];

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-md p-2">
      <div className="flex gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleFilterChange(tab.id)}
            className={`flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-2xl transition-all ${
              activeFilter === tab.id
                ? 'bg-gradient-to-r from-[#009966] to-[#00bc7d] text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            {tab.icon}
            <span className={`text-base ${activeFilter === tab.id ? 'font-semibold' : 'font-normal'}`}>
              {tab.label}
            </span>
            <div className={`px-2.5 py-0.5 rounded-full text-sm ${
              activeFilter === tab.id ? tab.badgeBg : 'bg-gray-100'
            } ${activeFilter === tab.id ? tab.badgeText : 'text-gray-600'}`}>
              {tab.count}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
