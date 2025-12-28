'use client';

import React from 'react';
import Modal from './Modal';

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
}

export default function DeleteConfirmationModal({ 
  isOpen, 
  onClose, 
  onConfirm,
  title = 'Konfirmasi Hapus',
  message = 'Apakah Anda yakin ingin menghapus item ini?'
}: DeleteConfirmationModalProps) {
  
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm">
      <div className="p-8 flex flex-col items-center">
        {/* Warning Icon */}
        <div className="w-16 h-16 bg-[#ffe2e2] rounded-full flex items-center justify-center mb-6">
          <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
            <path 
              d="M16 10.6667V16M16 21.3333H16.0133M28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z" 
              stroke="#e7000b" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Message */}
        <p className="text-base text-[#101828] text-center font-['Segoe_UI'] leading-6 mb-8">
          {message}
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-3 w-full justify-center">
          <button
            onClick={handleConfirm}
            className="bg-[#e7000b] text-white px-8 py-3 rounded-lg text-base font-['Segoe_UI'] hover:bg-[#c10007] transition-colors min-w-[132px]"
          >
            Ya, Hapus
          </button>
          <button
            onClick={onClose}
            className="bg-[#99a1af] text-white px-8 py-3 rounded-lg text-base font-['Segoe_UI'] hover:bg-[#8891a0] transition-colors min-w-[102px]"
          >
            Tidak
          </button>
        </div>
      </div>
    </Modal>
  );
}
