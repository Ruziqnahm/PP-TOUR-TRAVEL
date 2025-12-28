'use client';

import { useState } from 'react';

interface AdminFormInputProps {
  label: string;
  type?: 'text' | 'email' | 'password';
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  showPasswordToggle?: boolean;
}

export function AdminFormInput({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  showPasswordToggle = false
}: AdminFormInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = showPasswordToggle ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="flex flex-col gap-[9.345px]">
      {/* Label */}
      <label className="font-semibold text-[18px] text-black leading-normal">
        {label}
      </label>
      
      {/* Input Container */}
      <div className="relative">
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`bg-[#b1b1b1] w-full h-[46.725px] rounded-[10px] px-[18.69px] py-[18.69px] text-white placeholder:text-white text-[15.186px] outline-none ${
            error ? 'border-2 border-red-500' : ''
          }`}
        />
        
        {/* Password Toggle Icon */}
        {showPasswordToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-[18.69px] top-1/2 -translate-y-1/2"
          >
            <img
              src={showPassword 
                ? "https://www.figma.com/api/mcp/asset/02590fde-b8b6-4318-ba8a-7edc81f92d0c"
                : "https://www.figma.com/api/mcp/asset/02590fde-b8b6-4318-ba8a-7edc81f92d0c"
              }
              alt="Toggle password visibility"
              className="w-[18.69px] h-[18.69px]"
            />
          </button>
        )}
      </div>
      
      {/* Error Message */}
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
}
