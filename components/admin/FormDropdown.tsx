import React from 'react';

interface DropdownOption {
  value: string;
  label: string;
}

interface FormDropdownProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: DropdownOption[];
  placeholder?: string;
  required?: boolean;
}

export default function FormDropdown({ 
  label, 
  value, 
  onChange, 
  options,
  placeholder = 'Pilih salah satu',
  required = false 
}: FormDropdownProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-[#364153] font-['Segoe_UI']">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-[#e5e7eb] rounded-lg px-4 py-2.5 text-sm text-[rgba(10,10,10,0.5)] font-['Segoe_UI'] focus:outline-none focus:ring-2 focus:ring-[#009966] focus:border-transparent bg-white"
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
