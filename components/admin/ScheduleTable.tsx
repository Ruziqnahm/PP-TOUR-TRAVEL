'use client';

import React, { useState } from 'react';
import ScheduleStatusBadge from './ScheduleStatusBadge';

export interface ScheduleData {
  id: string;
  company: string;
  tourPackage: string;
  code: string;
  departureDate: string;
  status: 'active' | 'inactive';
}

interface ScheduleTableProps {
  data: ScheduleData[];
  onSelectionChange?: (selectedIds: string[]) => void;
}

export default function ScheduleTable({ data, onSelectionChange }: ScheduleTableProps) {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      const allIds = currentData.map(item => item.id);
      setSelectedRows(allIds);
      onSelectionChange?.(allIds);
    } else {
      setSelectedRows([]);
      onSelectionChange?.([]);
    }
  };

  const handleSelectRow = (id: string, checked: boolean) => {
    let newSelection: string[];
    if (checked) {
      newSelection = [...selectedRows, id];
    } else {
      newSelection = selectedRows.filter(rowId => rowId !== id);
    }
    setSelectedRows(newSelection);
    onSelectionChange?.(newSelection);
  };

  const formatDate = (dateString: string) => {
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 
                    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    const [day, month, year] = dateString.split(' ');
    const monthIndex = months.indexOf(month);
    const monthNumber = monthIndex !== -1 ? monthIndex : parseInt(month) - 1;
    
    return `${parseInt(day)} ${months[monthNumber]} ${year}`;
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-md overflow-hidden">
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
              <th className="w-20 p-4">
                <input
                  type="checkbox"
                  className="w-[22px] h-[22px] rounded-md border-[1.1px] border-gray-400 cursor-pointer"
                  checked={selectedRows.length === currentData.length && currentData.length > 0}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                />
              </th>
              <th className="px-6 py-5 text-left">
                <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                  Instalasi
                </span>
              </th>
              <th className="px-6 py-5 text-left">
                <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                  Paket Tour
                </span>
              </th>
              <th className="px-6 py-5 text-left">
                <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                  Kode
                </span>
              </th>
              <th className="px-6 py-5 text-left">
                <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                  Keberangkatan
                </span>
              </th>
              <th className="px-6 py-5 text-left">
                <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                  Status Layanan
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((row) => (
              <tr key={row.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="p-4">
                  <input
                    type="checkbox"
                    className="w-[22px] h-[22px] rounded-md border-[1.1px] border-gray-400 cursor-pointer"
                    checked={selectedRows.includes(row.id)}
                    onChange={(e) => handleSelectRow(row.id, e.target.checked)}
                  />
                </td>
                <td className="px-6 py-6">
                  <span className="text-base text-gray-900">{row.company}</span>
                </td>
                <td className="px-6 py-6">
                  <span className="text-base text-gray-900">{row.tourPackage}</span>
                </td>
                <td className="px-6 py-6">
                  <div className="bg-gray-100 inline-block px-3 py-1.5 rounded-lg">
                    <code className="text-sm text-gray-900 font-mono">
                      {row.code}
                    </code>
                  </div>
                </td>
                <td className="px-6 py-6">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-500" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.6667 2.66667H3.33333C2.59695 2.66667 2 3.26362 2 4V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V4C14 3.26362 13.403 2.66667 12.6667 2.66667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10.6667 1.33333V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5.33333 1.33333V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 6.66667H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-base text-gray-900">{formatDate(row.departureDate)}</span>
                  </div>
                </td>
                <td className="px-6 py-6">
                  <ScheduleStatusBadge status={row.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="bg-gray-50 border-t border-gray-200 px-6 py-5 flex items-center justify-between">
        <div className="text-base text-gray-600">
          Menampilkan{' '}
          <span className="font-semibold">{startIndex + 1}-{Math.min(endIndex, data.length)}</span>
          {' '}dari{' '}
          <span className="font-semibold">{data.length}</span>
          {' '}jadwal
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border border-gray-300 rounded-lg text-base text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-lg text-base ${
                currentPage === page
                  ? 'bg-[#009966] text-white'
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border border-gray-300 rounded-lg text-base text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
