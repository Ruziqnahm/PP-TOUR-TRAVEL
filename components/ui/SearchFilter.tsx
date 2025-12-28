'use client';

import { useState } from "react";

interface SearchFilterProps {
  onSearch?: (searchTerm: string) => void;
  onDestinationChange?: (destination: string) => void;
  onDurationChange?: (duration: string) => void;
  onBudgetChange?: (budget: string) => void;
  totalResults?: number;
}

export default function SearchFilter({
  onSearch,
  onDestinationChange,
  onDurationChange,
  onBudgetChange,
  totalResults = 0,
}: SearchFilterProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [destination, setDestination] = useState("all");
  const [duration, setDuration] = useState("all");
  const [budget, setBudget] = useState("all");

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    onSearch?.(value);
  };

  const handleDestinationChange = (value: string) => {
    setDestination(value);
    onDestinationChange?.(value);
  };

  const handleDurationChange = (value: string) => {
    setDuration(value);
    onDurationChange?.(value);
  };

  const handleBudgetChange = (value: string) => {
    setBudget(value);
    onBudgetChange?.(value);
  };

  return (
    <div className="bg-white border border-[#e5e7eb] rounded-2xl p-6 shadow-sm">
      {/* Search and Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        {/* Search Input */}
        <div className="flex-1 min-w-[300px] relative">
          <input
            type="text"
            placeholder="Cari paket atau destinasi..."
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full h-[50px] pl-11 pr-4 border border-[#d1d5db] rounded-lg text-sm text-[#364153] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#00bc7d] focus:ring-1 focus:ring-[#00bc7d]"
          />
          <svg
            className="absolute left-3 top-[15px] w-5 h-5 text-[#9ca3af]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Destination Filter */}
        <select
          value={destination}
          onChange={(e) => handleDestinationChange(e.target.value)}
          className="h-[50px] px-4 border border-[#d1d5db] rounded-lg text-sm text-[#364153] bg-white focus:outline-none focus:border-[#00bc7d] focus:ring-1 focus:ring-[#00bc7d] min-w-[200px]"
        >
          <option value="all">Semua Destinasi</option>
          <option value="bali">Bali</option>
          <option value="yogyakarta">Yogyakarta</option>
          <option value="malang">Malang - Batu</option>
          <option value="semarang">Semarang</option>
          <option value="bandung">Bandung</option>
        </select>

        {/* Duration Filter */}
        <select
          value={duration}
          onChange={(e) => handleDurationChange(e.target.value)}
          className="h-[50px] px-4 border border-[#d1d5db] rounded-lg text-sm text-[#364153] bg-white focus:outline-none focus:border-[#00bc7d] focus:ring-1 focus:ring-[#00bc7d] min-w-[200px]"
        >
          <option value="all">Semua Durasi</option>
          <option value="1">1 Hari</option>
          <option value="2">2 Hari 1 Malam</option>
          <option value="3">3 Hari 2 Malam</option>
          <option value="4">4 Hari 3 Malam</option>
        </select>

        {/* Budget Filter */}
        <select
          value={budget}
          onChange={(e) => handleBudgetChange(e.target.value)}
          className="h-[50px] px-4 border border-[#d1d5db] rounded-lg text-sm text-[#364153] bg-white focus:outline-none focus:border-[#00bc7d] focus:ring-1 focus:ring-[#00bc7d] min-w-[200px]"
        >
          <option value="all">Semua Harga</option>
          <option value="0-500000">&lt; Rp 500.000</option>
          <option value="500000-1000000">Rp 500.000 - 1.000.000</option>
          <option value="1000000-2000000">Rp 1.000.000 - 2.000.000</option>
          <option value="2000000-999999999">&gt; Rp 2.000.000</option>
        </select>
      </div>

      {/* Results Count */}
      <div className="flex items-center gap-2 text-sm text-[#4a5565]">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Menampilkan {totalResults} dari {totalResults} paket</span>
      </div>
    </div>
  );
}
