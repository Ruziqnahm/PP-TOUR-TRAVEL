'use client';

import { useRef } from 'react';

interface FileUploadInputProps {
  label?: string;
  fileName?: string;
  onFileChange?: (file: File | null) => void;
  accept?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  multiple?: boolean;
  placeholder?: string;
}

export function FileUploadInput({ 
  label,
  fileName = '',
  onFileChange,
  accept = "image/*",
  required = false,
  onChange, 
  multiple = false,
  placeholder = "Pilih file..."
}: FileUploadInputProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (onFileChange) {
      onFileChange(file);
    }
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm text-[#364153] font-['Segoe_UI']">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative h-[42px] w-full">
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileChange}
          accept={accept}
          multiple={multiple}
          className="hidden"
        />
        <div 
          onClick={handleClick}
          className="border border-[#e5e7eb] rounded-[10px] h-[42px] flex items-center px-[16px] cursor-pointer hover:border-[#009966] transition-colors"
        >
          <p className="text-[14px] text-[rgba(10,10,10,0.5)] flex-1">
            {fileName || placeholder}
          </p>
          <button 
            type="button"
            className="w-[28px] h-[28px] flex items-center justify-center rounded-[4px] hover:bg-gray-100 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 2V14M8 2L11 5M8 2L5 5" stroke="#364153" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 10V12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14H4C3.46957 14 2.96086 13.7893 2.58579 13.4142C2.21071 13.0391 2 12.5304 2 12V10" stroke="#364153" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
