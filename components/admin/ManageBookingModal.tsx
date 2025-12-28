'use client';

import React, { useState } from 'react';
import Modal from './Modal';
import FormDropdown from './FormDropdown';

interface BookingManagementData {
  id: string;
  customerName: string;
  company: string;
  packageName: string;
  bookingCode: string;
  cancellationReason: string;
  userNotes: string;
  status: string;
}

interface ManageBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingData: BookingManagementData;
  onSave: (data: BookingManagementData) => void;
}

export default function ManageBookingModal({ 
  isOpen, 
  onClose, 
  bookingData,
  onSave 
}: ManageBookingModalProps) {
  const [formData, setFormData] = useState<BookingManagementData>(bookingData);

  const statusOptions = [
    { value: 'dikonfirmasi', label: 'Dikonfirmasi' },
    { value: 'pending', label: 'Pending' },
    { value: 'dibatalkan', label: 'Dibatalkan' },
    { value: 'selesai', label: 'Selesai' }
  ];

  const handleStatusChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      status: value
    }));
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      {/* Header */}
      <div className="border-b border-[#e5e7eb] px-6 py-4 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-[#101828] font-['Segoe_UI']">
          Kelola Pengajuan
        </h3>
        <button
          onClick={onClose}
          className="w-6 h-6 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors"
        >
          <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="px-6 py-4 flex flex-col gap-4">
        {/* Row 1: Nama Pelanggan & Instalasi */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <p className="text-base text-[#6a7282] font-['Segoe_UI'] leading-6">Nama Pelanggan</p>
            <p className="text-base text-[#101828] font-['Segoe_UI'] leading-6">{formData.customerName}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-base text-[#6a7282] font-['Segoe_UI'] leading-6">Instalasi</p>
            <p className="text-base text-[#101828] font-['Segoe_UI'] leading-6">{formData.company}</p>
          </div>
        </div>

        {/* Paket Dibatalkan */}
        <div className="flex flex-col">
          <p className="text-base text-[#6a7282] font-['Segoe_UI'] leading-6">Paket Dibatalkan</p>
          <p className="text-base text-[#101828] font-['Segoe_UI'] leading-6">{formData.packageName}</p>
        </div>

        {/* Status Pengajuan */}
        <div className="flex flex-col gap-2">
          <p className="text-base text-[#6a7282] font-['Segoe_UI'] leading-6">Status Pengajuan</p>
          <select
            value={formData.status}
            onChange={(e) => handleStatusChange(e.target.value)}
            className="border border-[#e5e7eb] rounded-2xl px-4 py-3 text-sm text-[rgba(10,10,10,0.5)] font-['Segoe_UI'] focus:outline-none focus:ring-2 focus:ring-[#009966] focus:border-transparent bg-white h-[46px] w-full max-w-[400px]"
          >
            <option value="" disabled>Pilih status pengajuan</option>
            {statusOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Kode Booking */}
        <div className="flex flex-col">
          <p className="text-base text-[#6a7282] font-['Segoe_UI'] leading-6 mb-1">Kode Booking</p>
          <div className="bg-[#f3f4f6] px-3 py-1.5 rounded-lg inline-block w-fit">
            <span className="text-sm text-[#101828] font-['Consolas'] leading-5">
              {formData.bookingCode}
            </span>
          </div>
        </div>

        {/* Alasan Pembatalan */}
        <div className="flex flex-col">
          <p className="text-base text-[#6a7282] font-['Segoe_UI'] leading-6">Alasan Pembatalan</p>
          <p className="text-base text-[#101828] font-['Segoe_UI'] leading-6">{formData.cancellationReason}</p>
        </div>

        {/* Catatan Pengguna */}
        <div className="flex flex-col">
          <p className="text-base text-[#6a7282] font-['Segoe_UI'] leading-6">Catatan Pengguna</p>
          <p className="text-base text-[#101828] font-['Segoe_UI'] leading-6">{formData.userNotes}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[#e5e7eb] px-6 py-4 flex justify-end">
        <button
          onClick={handleSave}
          className="bg-gradient-to-r from-[#009966] to-[#00bc7d] text-white px-6 py-2.5 rounded-2xl text-base font-['Segoe_UI'] hover:opacity-90 transition-opacity h-11"
        >
          Simpan
        </button>
      </div>
    </Modal>
  );
}
