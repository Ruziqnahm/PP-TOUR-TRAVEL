'use client';

import { useState } from 'react';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
}

export function SearchBar({ placeholder = 'Cari...', onSearch }: SearchBarProps) {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch?.(value);
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={searchValue}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full h-[50px] border border-[#e5e7eb] rounded-[16.4px] pl-[48px] pr-[16px] py-[12px] text-[16px] text-black placeholder:text-[rgba(10,10,10,0.5)] outline-none focus:border-[#009966] transition-colors"
      />
      <div className="absolute left-[16px] top-[14px] w-[20px] h-[20px]">
        <img
          src="https://www.figma.com/api/mcp/asset/064fd585-1e66-4ec7-b02a-8be6bf3d114c"
          alt="Search"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
