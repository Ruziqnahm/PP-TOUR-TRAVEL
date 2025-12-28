'use client';

import React from 'react';

export interface FilterTab {
  id: string;
  label: string;
  count: number;
  icon?: React.ReactNode;
  color?: string;
}

interface FilterTabsProps {
  tabs: FilterTab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export default function FilterTabs({ tabs, activeTab, onTabChange }: FilterTabsProps) {
  return (
    <div className="bg-white border border-[#f3f4f6] rounded-2xl shadow-lg p-2 w-full">
      <div className="flex gap-2">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`
                flex-1 h-12 rounded-2xl flex items-center justify-center gap-2 px-4 transition-all
                ${isActive 
                  ? 'bg-gradient-to-r from-[#009966] to-[#00bc7d] text-white shadow-lg font-semibold' 
                  : 'text-[#4a5565] hover:bg-gray-50'
                }
              `}
            >
              {tab.icon && (
                <div className="w-5 h-5 flex items-center justify-center">
                  {tab.icon}
                </div>
              )}
              <span className="text-base font-['Segoe_UI'] leading-6">
                {tab.label}
              </span>
              <div 
                className={`
                  h-6 px-2.5 rounded-full flex items-center justify-center min-w-[28px]
                  ${isActive 
                    ? 'bg-white/20' 
                    : tab.color || 'bg-gray-100'
                  }
                `}
              >
                <span 
                  className={`
                    text-sm font-['Segoe_UI'] leading-5
                    ${isActive ? 'text-white' : (tab.id === 'dikonfirmasi' ? 'text-[#009966]' : tab.id === 'pending' ? 'text-[#e17100]' : tab.id === 'dibatalkan' ? 'text-[#e7000b]' : 'text-gray-700')}
                  `}
                >
                  {tab.count}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
