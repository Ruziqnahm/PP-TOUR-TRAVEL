'use client';

import React from 'react';

interface FormDatePickerProps {
  label: string;
  icon?: React.ReactNode;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormDatePicker({
  label,
  icon,
  value,
  onChange,
}: FormDatePickerProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="flex items-center gap-2 text-sm text-[#364153]">
        {icon && <span className="w-4 h-4">{icon}</span>}
        <span>{label}</span>
      </label>
      <div className="relative">
        <input
          type="date"
          value={value}
          onChange={onChange}
          className="w-full h-[50px] px-4 py-3 border border-[#d1d5dc] rounded-[16.4px] text-sm text-[#364153] focus:outline-none focus:ring-2 focus:ring-[#2b7fff] focus:border-transparent transition-all [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-4 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
        />
      </div>
    </div>
  );
}
