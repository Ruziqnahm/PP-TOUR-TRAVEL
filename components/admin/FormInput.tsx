import React from 'react';

interface FormInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: 'text' | 'number' | 'email' | 'password';
  required?: boolean;
}

export default function FormInput({ 
  label, 
  value, 
  onChange, 
  placeholder, 
  type = 'text',
  required = false 
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-[#364153] font-['Segoe_UI']">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="border border-[#e5e7eb] rounded-lg px-4 py-2.5 text-sm text-[rgba(10,10,10,0.5)] font-['Segoe_UI'] focus:outline-none focus:ring-2 focus:ring-[#009966] focus:border-transparent"
      />
    </div>
  );
}
