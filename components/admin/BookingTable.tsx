'use client';

import React, { useState } from 'react';
import OrderStatusBadge, { OrderStatus } from './OrderStatusBadge';

export interface BookingData {
  id: string;
  customerName: string;
  company: string;
  packageName: string;
  contact: string;
  bookingCode: string;
  status: OrderStatus;
}

interface BookingTableProps {
  data: BookingData[];
  onSelectionChange?: (selectedIds: string[]) => void;
}

export default function BookingTable({ data, onSelectionChange }: BookingTableProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const handleSelectAll = (checked: boolean) => {
    const newSelected = checked ? currentData.map(item => item.id) : [];
    setSelectedIds(newSelected);
    onSelectionChange?.(newSelected);
  };

  const handleSelectOne = (id: string, checked: boolean) => {
    const newSelected = checked 
      ? [...selectedIds, id]
      : selectedIds.filter(selectedId => selectedId !== id);
    setSelectedIds(newSelected);
    onSelectionChange?.(newSelected);
  };

  const isAllSelected = currentData.length > 0 && currentData.every(item => selectedIds.includes(item.id));

  return (
    <div className="bg-white border border-[#f3f4f6] rounded-2xl shadow-lg overflow-hidden">
      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full">
          {/* Table Header */}
          <thead className="bg-gradient-to-r from-[#f9fafb] to-[#f3f4f6] border-b border-[#e5e7eb]">
            <tr>
              <th className="w-20 px-6 py-5">
                <input
                  type="checkbox"
                  checked={isAllSelected}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                  className="w-[22px] h-[22px] rounded-md border-[#c2c2c2] border-[1.1px] cursor-pointer accent-[#009966]"
                />
              </th>
              <th className="px-6 py-5 text-left">
                <span className="text-xs font-bold text-[#4a5565] uppercase tracking-wider font-['Segoe_UI']">
                  Pelanggan
                </span>
              </th>
              <th className="px-6 py-5 text-left">
                <span className="text-xs font-bold text-[#4a5565] uppercase tracking-wider font-['Segoe_UI']">
                  Paket
                </span>
              </th>
              <th className="px-6 py-5 text-left">
                <span className="text-xs font-bold text-[#4a5565] uppercase tracking-wider font-['Segoe_UI']">
                  Kontak
                </span>
              </th>
              <th className="px-6 py-5 text-left">
                <span className="text-xs font-bold text-[#4a5565] uppercase tracking-wider font-['Segoe_UI']">
                  Kode Booking
                </span>
              </th>
              <th className="px-6 py-5 text-left">
                <span className="text-xs font-bold text-[#4a5565] uppercase tracking-wider font-['Segoe_UI']">
                  Status
                </span>
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {currentData.map((booking, index) => (
              <tr 
                key={booking.id}
                className={`border-b border-[#f3f4f6] hover:bg-gray-50 transition-colors ${
                  index === currentData.length - 1 ? 'border-b-0' : ''
                }`}
              >
                <td className="px-6 py-6">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(booking.id)}
                    onChange={(e) => handleSelectOne(booking.id, e.target.checked)}
                    className="w-[22px] h-[22px] rounded-md border-[#c2c2c2] border-[1.1px] cursor-pointer accent-[#009966]"
                  />
                </td>
                <td className="px-6 py-6">
                  <div className="flex flex-col">
                    <span className="text-base text-[#101828] font-['Segoe_UI'] leading-6">
                      {booking.customerName}
                    </span>
                    <span className="text-base text-[#6a7282] font-['Segoe_UI'] leading-6">
                      {booking.company}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-6">
                  <span className="text-base text-[#101828] font-['Segoe_UI'] leading-6">
                    {booking.packageName}
                  </span>
                </td>
                <td className="px-6 py-6">
                  <span className="text-base text-[#101828] font-['Segoe_UI'] leading-6">
                    {booking.contact}
                  </span>
                </td>
                <td className="px-6 py-6">
                  <div className="bg-[#f3f4f6] px-3 py-1.5 rounded-lg inline-block">
                    <span className="text-sm text-[#101828] font-['Consolas'] leading-5">
                      {booking.bookingCode}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-6">
                  <OrderStatusBadge status={booking.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="bg-[#f9fafb] border-t border-[#e5e7eb] px-6 py-5 flex items-center justify-between">
        <div className="text-base text-[#4a5565] font-['Segoe_UI']">
          Menampilkan <span className="font-semibold">{startIndex + 1}-{Math.min(endIndex, data.length)}</span> dari <span className="font-semibold">{data.length}</span> pesanan
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="bg-white border border-[#e5e7eb] rounded-lg px-6 h-[42px] text-base text-[#364153] font-['Segoe_UI'] hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>
          
          {Array.from({ length: Math.min(totalPages, 2) }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`
                rounded-lg h-[42px] min-w-[42px] px-3 text-base font-['Segoe_UI'] transition-colors
                ${currentPage === page 
                  ? 'bg-[#009966] text-white' 
                  : 'bg-white border border-[#e5e7eb] text-[#364153] hover:bg-gray-50'
                }
              `}
            >
              {page}
            </button>
          ))}
          
          <button
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className="bg-white border border-[#e5e7eb] rounded-lg px-6 h-[42px] text-base text-[#364153] font-['Segoe_UI'] hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
