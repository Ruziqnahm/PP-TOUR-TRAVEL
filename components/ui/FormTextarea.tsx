'use client';

import React from 'react';

interface FormTextareaProps {
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
}

export default function FormTextarea({
  label,
  value,
  onChange,
  placeholder,
  rows = 3,
}: FormTextareaProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-[#364153]">{label}</label>
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className="px-4 py-3 border border-[#d1d5dc] rounded-[16.4px] text-base text-[rgba(10,10,10,0.5)] resize-none focus:outline-none focus:ring-2 focus:ring-[#2b7fff] focus:border-transparent transition-all"
      />
    </div>
  );
}
