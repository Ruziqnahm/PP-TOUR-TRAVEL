'use client';

import React, { useState } from 'react';

interface DateRangeFilterProps {
  onDateRangeChange: (startDate: string, endDate: string) => void;
  onReset: () => void;
}

export default function DateRangeFilter({ onDateRangeChange, onReset }: DateRangeFilterProps) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleApply = () => {
    if (startDate && endDate) {
      if (new Date(startDate) > new Date(endDate)) {
        alert('Tanggal awal tidak boleh lebih besar dari tanggal akhir');
        return;
      }
      onDateRangeChange(startDate, endDate);
      setIsOpen(false);
    }
  };

  const handleReset = () => {
    setStartDate('');
    setEndDate('');
    onReset();
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Filter Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-4 py-2.5 border rounded-xl text-sm font-medium transition-colors ${
          startDate || endDate
            ? 'bg-[#009966] text-white border-[#009966]'
            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
        }`}
      >
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
          <path
            d="M6.66667 1.66667V4.16667M13.3333 1.66667V4.16667M2.5 7.5H17.5M4.16667 3.33333H15.8333C16.7538 3.33333 17.5 4.07953 17.5 5V16.6667C17.5 17.5871 16.7538 18.3333 15.8333 18.3333H4.16667C3.24619 18.3333 2.5 17.5871 2.5 16.6667V5C2.5 4.07953 3.24619 3.33333 4.16667 3.33333Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>
          {startDate && endDate
            ? `${new Date(startDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })} - ${new Date(endDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}`
            : 'Filter Tanggal'}
        </span>
        {(startDate || endDate) && (
          <span className="ml-1 px-2 py-0.5 bg-white bg-opacity-20 rounded-full text-xs">
            Aktif
          </span>
        )}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown Content */}
          <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 z-20 overflow-hidden">
            <div className="p-5">
              <h3 className="text-base font-semibold text-gray-900 mb-4">
                Filter Rentang Tanggal
              </h3>

              <div className="space-y-4">
                {/* Start Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Tanggal Mulai
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#009966] focus:border-transparent"
                  />
                </div>

                {/* End Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Tanggal Akhir
                  </label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    min={startDate}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#009966] focus:border-transparent"
                  />
                </div>

                {/* Quick Select */}
                <div className="pt-2 border-t border-gray-200">
                  <p className="text-xs font-medium text-gray-500 mb-2">
                    Pilihan Cepat
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => {
                        const today = new Date();
                        const sevenDaysAgo = new Date(today);
                        sevenDaysAgo.setDate(today.getDate() - 7);
                        setStartDate(sevenDaysAgo.toISOString().split('T')[0]);
                        setEndDate(today.toISOString().split('T')[0]);
                      }}
                      className="px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      7 Hari Terakhir
                    </button>
                    <button
                      onClick={() => {
                        const today = new Date();
                        const thirtyDaysAgo = new Date(today);
                        thirtyDaysAgo.setDate(today.getDate() - 30);
                        setStartDate(thirtyDaysAgo.toISOString().split('T')[0]);
                        setEndDate(today.toISOString().split('T')[0]);
                      }}
                      className="px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      30 Hari Terakhir
                    </button>
                    <button
                      onClick={() => {
                        const today = new Date();
                        const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
                        setStartDate(startOfMonth.toISOString().split('T')[0]);
                        setEndDate(today.toISOString().split('T')[0]);
                      }}
                      className="px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Bulan Ini
                    </button>
                    <button
                      onClick={() => {
                        const today = new Date();
                        const lastMonthStart = new Date(today.getFullYear(), today.getMonth() - 1, 1);
                        const lastMonthEnd = new Date(today.getFullYear(), today.getMonth(), 0);
                        setStartDate(lastMonthStart.toISOString().split('T')[0]);
                        setEndDate(lastMonthEnd.toISOString().split('T')[0]);
                      }}
                      className="px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Bulan Lalu
                    </button>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 mt-5 pt-4 border-t border-gray-200">
                <button
                  onClick={handleReset}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Reset
                </button>
                <button
                  onClick={handleApply}
                  disabled={!startDate || !endDate}
                  className="flex-1 px-4 py-2 bg-[#009966] text-white rounded-lg text-sm font-medium hover:bg-[#007a52] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Terapkan
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
