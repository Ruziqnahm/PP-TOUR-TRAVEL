'use client';

import React from 'react';

interface FormInputProps {
  label: string;
  icon?: React.ReactNode;
  type?: 'text' | 'number' | 'tel' | 'date';
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
}

export default function FormInput({
  label,
  icon,
  type = 'text',
  value,
  onChange,
  placeholder,
  disabled = false,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="flex items-center gap-2 text-sm text-[#364153]">
        {icon && <span className="w-4 h-4">{icon}</span>}
        <span>{label}</span>
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`h-[50px] px-4 py-3 border border-[#d1d5dc] rounded-[16.4px] text-base ${
          disabled ? 'bg-[#99a1af] text-[#0a0a0a]' : 'text-[rgba(10,10,10,0.5)]'
        } focus:outline-none focus:ring-2 focus:ring-[#2b7fff] focus:border-transparent transition-all`}
      />
    </div>
  );
}
