'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ModalHeader from '@/components/ui/ModalHeader';
import { Button } from '@/components/ui/Button';

export default function PembayaranPage() {
  const router = useRouter();
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [selectedBank, setSelectedBank] = useState<string>('BCA');

  // Sample order data
  const orderData = {
    packageName: 'Paket Ekonomis Bali',
    bookingCode: 'BKGXX8MWZ3',
    departureDate: '9 Desember 2025',
    pax: 3,
    totalAmount: 3300000,
    orderCount: 1,
  };

  const bankAccounts = [
    {
      id: 'BCA',
      name: 'Bank BCA',
      accountNumber: '1234567890',
      accountName: 'PT Explore Travel Indonesia',
      emoji: '🏦',
    },
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File terlalu besar! Maksimal 5MB');
        return;
      }
      // Validate file type
      const validTypes = ['image/jpeg', 'image/png', 'application/pdf'];
      if (!validTypes.includes(file.type)) {
        alert('Format file tidak valid! Gunakan JPG, PNG, atau PDF');
        return;
      }
      setUploadedFile(file);
    }
  };

  const handleCopyAccountNumber = () => {
    const account = bankAccounts.find(b => b.id === selectedBank);
    if (account) {
      navigator.clipboard.writeText(account.accountNumber);
      alert('Nomor rekening disalin!');
    }
  };

  const handleSubmit = () => {
    if (!uploadedFile) {
      alert('Upload bukti transfer wajib dilakukan sebelum submit pembayaran');
      return;
    }
    // Handle payment submission
    console.log('Payment submitted:', { uploadedFile, selectedBank });
    router.push('/riwayat-pesanan');
  };

  const handleCancel = () => {
    router.push('/riwayat-pesanan');
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const selectedBankAccount = bankAccounts.find(b => b.id === selectedBank);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-full max-w-[700px] overflow-hidden">
        <ModalHeader 
          title="Pembayaran" 
          subtitle={`${orderData.orderCount} Pesanan`}
          closeUrl="/riwayat-pesanan"
        />
        
        <div className="px-6 py-6 flex flex-col gap-6 max-h-[1102px] overflow-y-auto">
          {/* Detail Pesanan */}
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-semibold text-[#4a5565]">Detail Pesanan</h3>
            
            <div className="bg-gradient-to-r from-[#f9fafb] to-[rgba(243,244,246,0.5)] border border-[#e5e7eb] rounded-[16.4px] px-[17px] py-[17px] flex flex-col gap-3">
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-1">
                  <p className="text-sm text-[#101828]">{orderData.packageName}</p>
                  <p className="text-xs text-[#6a7282]">Kode: {orderData.bookingCode}</p>
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-xs text-[#6a7282]">Total</p>
                  <p className="text-sm text-[#096]">{formatCurrency(orderData.totalAmount)}</p>
                </div>
              </div>
              
              <div className="flex gap-8 border-t border-[#e5e7eb] pt-3">
                <p className="text-xs text-[#4a5565]">📅 {orderData.departureDate}</p>
                <p className="text-xs text-[#4a5565]">👥 {orderData.pax} PAX</p>
              </div>
            </div>
          </div>

          {/* Total Pembayaran */}
          <div className="bg-gradient-to-r from-[#00bc7d] to-[#009966] rounded-[16.4px] px-4 py-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-[#d0fae5]">Total yang harus dibayar</p>
              <p className="text-xs text-[#d0fae5]">{orderData.orderCount} pesanan • {orderData.pax} PAX</p>
            </div>
            <div className="text-right">
              <p className="text-2xl text-white">{formatCurrency(orderData.totalAmount)}</p>
              <p className="text-xs text-[#d0fae5]">Otomatis</p>
            </div>
          </div>

          {/* Pilih Rekening Tujuan */}
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-semibold text-[#364153]">Pilih Rekening Tujuan</h3>
            
            {/* Bank Selector */}
            <div className="bg-white border border-[#d1d5dc] rounded-[16.4px] px-[17px] py-4 flex items-center justify-between cursor-pointer hover:border-[#2b7fff] transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{selectedBankAccount?.emoji}</span>
                <div>
                  <p className="text-sm text-[#101828]">{selectedBankAccount?.name}</p>
                  <p className="text-xs text-[#6a7282]">{selectedBankAccount?.accountNumber}</p>
                </div>
              </div>
              <svg className="w-5 h-5 text-[#6a7282]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Bank Details */}
            <div className="bg-[#ecfdf5] border border-[#a4f4cf] rounded-[16.4px] px-[17px] py-[17px] flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <p className="text-sm text-[#4a5565]">Bank:</p>
                <p className="text-sm text-[#101828]">{selectedBankAccount?.name}</p>
              </div>
              
              <div className="flex items-center justify-between">
                <p className="text-sm text-[#4a5565]">Nomor Rekening:</p>
                <div className="flex items-center gap-2">
                  <p className="text-sm text-[#101828]">{selectedBankAccount?.accountNumber}</p>
                  <button
                    onClick={handleCopyAccountNumber}
                    className="p-1 hover:bg-[#d0fae5] rounded transition-colors"
                    title="Salin nomor rekening"
                  >
                    <svg className="w-4 h-4 text-[#007a55]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <p className="text-sm text-[#4a5565]">Atas Nama:</p>
                <p className="text-sm text-[#101828]">{selectedBankAccount?.accountName}</p>
              </div>
            </div>
          </div>

          {/* Bukti Pembayaran */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1">
              <h3 className="text-2xl font-semibold text-[#364153]">Bukti Pembayaran</h3>
              <span className="text-2xl font-semibold text-[#fb2c36]">*</span>
            </div>
            
            {/* Upload Area */}
            <label className="border-2 border-dashed border-[#d1d5dc] rounded-[16.4px] px-8 py-8 flex flex-col items-center justify-center cursor-pointer hover:border-[#2b7fff] transition-colors">
              <input
                type="file"
                accept="image/jpeg,image/png,application/pdf"
                onChange={handleFileUpload}
                className="hidden"
              />
              <svg className="w-12 h-12 text-[#6a7282] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p className="text-sm text-[#364153] text-center">
                {uploadedFile ? uploadedFile.name : 'Klik untuk upload bukti transfer'}
              </p>
              <p className="text-xs text-[#6a7282] text-center mt-1">
                Format: JPG, PNG, PDF (Maks. 5MB)
              </p>
            </label>

            {/* Warning */}
            <div className="flex items-start gap-2">
              <svg className="w-3 h-3 text-[#fb2c36] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <p className="text-base text-[#fb2c36]">
                Upload bukti transfer wajib dilakukan sebelum submit pembayaran
              </p>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-[#eff6ff] border border-[#bedbff] rounded-[16.4px] px-[17px] py-[17px] flex gap-3">
            <span className="text-2xl">ℹ️</span>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-[#364153]">Cara melakukan pembayaran:</p>
              <ol className="list-decimal list-inside text-xs text-[#364153] space-y-1">
                <li>Transfer sesuai nominal ke rekening yang dipilih</li>
                <li>Screenshot/foto bukti transfer</li>
                <li>Upload bukti transfer di form atas</li>
                <li>Klik tombol "Konfirmasi Pembayaran"</li>
                <li>Tunggu verifikasi admin (maks. 1x24 jam)</li>
              </ol>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              variant="secondary"
              fullWidth
              onClick={handleCancel}
            >
              Batal
            </Button>
            <Button
              variant="success"
              fullWidth
              onClick={handleSubmit}
              icon={
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              }
            >
              Konfirmasi Pembayaran
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
