'use client';

import React, { useState } from 'react';
import PaymentStatusBadge from './PaymentStatusBadge';

export interface PaymentData {
  id: string;
  bookingCode: string;
  customerName: string;
  company: string;
  tourPackage: string;
  pax: number;
  totalCost: number;
  status: 'paid' | 'pending' | 'verified';
}

interface PaymentTableProps {
  data: PaymentData[];
  onSelectionChange?: (selectedIds: string[]) => void;
}

export default function PaymentTable({ data, onSelectionChange }: PaymentTableProps) {
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

  const formatCurrency = (amount: number) => {
    return `Rp ${amount.toLocaleString('id-ID')}`;
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-md overflow-hidden">
      {/* Table - Responsive wrapper */}
      <div className="overflow-x-auto">
        <div className="min-w-[900px]">{/* Force minimum width for desktop experience */}
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
              <th className="w-16 p-4">
                <input
                  type="checkbox"
                  className="w-[22px] h-[22px] rounded-md border-[1.1px] border-gray-400 cursor-pointer"
                  checked={selectedRows.length === currentData.length && currentData.length > 0}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                />
              </th>
              <th className="px-6 py-4 text-left">
                <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                  Kode Booking
                </span>
              </th>
              <th className="px-6 py-4 text-left">
                <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                  Nama Pelanggan
                </span>
              </th>
              <th className="px-6 py-4 text-left">
                <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                  Instansi
                </span>
              </th>
              <th className="px-6 py-4 text-left">
                <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                  Paket Tour
                </span>
              </th>
              <th className="px-6 py-4 text-left">
                <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                  Jumlah Pax
                </span>
              </th>
              <th className="px-6 py-4 text-left">
                <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                  Total Biaya
                </span>
              </th>
              <th className="px-6 py-4 text-left">
                <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                  Status Pembayaran
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
                <td className="px-6 py-7">
                  <div className="bg-gray-100 inline-block px-2.5 py-1 rounded">
                    <code className="text-sm text-gray-900 font-mono">
                      {row.bookingCode}
                    </code>
                  </div>
                </td>
                <td className="px-6 py-7">
                  <span className="text-base text-gray-900">{row.customerName}</span>
                </td>
                <td className="px-6 py-7">
                  <span className="text-base text-gray-900">{row.company}</span>
                </td>
                <td className="px-6 py-7">
                  <span className="text-base text-gray-900">{row.tourPackage}</span>
                </td>
                <td className="px-6 py-7">
                  <span className="text-base text-gray-900">{row.pax}</span>
                </td>
                <td className="px-6 py-7">
                  <span className="text-base text-gray-900">{formatCurrency(row.totalCost)}</span>
                </td>
                <td className="px-6 py-7">
                  <PaymentStatusBadge status={row.status} />
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
          {' '}pembayaran
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
        </div>{/* Close min-w wrapper */}
      </div>
    </div>
  );
}
