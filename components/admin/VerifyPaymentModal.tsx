'use client';

import { useState } from 'react';

interface PaymentVerificationData {
  bookingCode: string;
  customerName: string;
  institution: string;
  packageName: string;
  pax: number;
  totalAmount: number;
  currentStatus: string;
  whatsappNumber: string;
}

interface VerifyPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  paymentData: PaymentVerificationData | null;
  onVerify: (notes: string) => void;
}

export default function VerifyPaymentModal({
  isOpen,
  onClose,
  paymentData,
  onVerify,
}: VerifyPaymentModalProps) {
  const [notes, setNotes] = useState('');

  if (!isOpen || !paymentData) return null;

  const handleVerify = () => {
    onVerify(notes);
    setNotes('');
  };

  const handleCancel = () => {
    setNotes('');
    onClose();
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={handleCancel}
      />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-full max-w-[660px] max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="border-b border-[#e5e7eb] px-6 py-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-[#101828]">
              Konfirmasi Pembayaran
            </h2>
            <button
              onClick={handleCancel}
              className="w-6 h-6 flex items-center justify-center text-[#6a7282] hover:text-[#101828] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="px-6 py-5 flex flex-col gap-6">
            {/* Payment Details Grid */}
            <div className="grid grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="flex flex-col gap-4">
                {/* Booking Code */}
                <div>
                  <label className="block text-sm text-[#6a7282] mb-1">
                    Kode Booking
                  </label>
                  <div className="inline-flex items-center px-3 py-1.5 bg-[#f3f4f6] rounded-lg">
                    <span className="text-sm text-[#101828] font-['Consolas',monospace]">
                      {paymentData.bookingCode}
                    </span>
                  </div>
                </div>

                {/* Customer Name */}
                <div>
                  <label className="block text-sm text-[#6a7282] mb-1">
                    Nama Pelanggan
                  </label>
                  <p className="text-base text-[#101828]">
                    {paymentData.customerName}
                  </p>
                </div>

                {/* Institution */}
                <div>
                  <label className="block text-sm text-[#6a7282] mb-1">
                    Instansi
                  </label>
                  <p className="text-base text-[#101828]">
                    {paymentData.institution}
                  </p>
                </div>

                {/* Package Tour */}
                <div>
                  <label className="block text-sm text-[#6a7282] mb-1">
                    Paket Tour
                  </label>
                  <p className="text-base text-[#101828]">
                    {paymentData.packageName}
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-4">
                {/* Pax */}
                <div>
                  <label className="block text-sm text-[#6a7282] mb-1">
                    Jumlah Pax
                  </label>
                  <p className="text-base text-[#101828]">
                    {paymentData.pax} orang
                  </p>
                </div>

                {/* Total Amount */}
                <div>
                  <label className="block text-sm text-[#6a7282] mb-1">
                    Total Biaya
                  </label>
                  <p className="text-base text-[#101828]">
                    {formatCurrency(paymentData.totalAmount)}
                  </p>
                </div>

                {/* Current Status */}
                <div>
                  <label className="block text-sm text-[#6a7282] mb-1.5">
                    Status Saat Ini
                  </label>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#fffbeb] border border-[#fee685] rounded-full">
                    <svg className="w-4 h-4 text-[#bb4d00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-[#bb4d00]">
                      {paymentData.currentStatus}
                    </span>
                  </div>
                </div>

                {/* WhatsApp Contact */}
                <div>
                  <label className="block text-sm text-[#6a7282] mb-1.5">
                    Kontak WhatsApp
                  </label>
                  <a
                    href={`https://wa.me/${paymentData.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f0fdf4] border border-[#b9f8cf] rounded-lg hover:bg-[#dcfce7] transition-colors"
                  >
                    <svg className="w-4 h-4 text-[#008236]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <span className="text-sm text-[#008236]">
                      {paymentData.whatsappNumber}
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Info Box */}
            <div className="border-t border-[#e5e7eb] pt-6">
              <div className="bg-[#eff6ff] border border-[#bedbff] rounded-2xl p-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-[#dbeafe] rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-[#1c398e]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-base font-semibold text-[#1c398e] mb-1">
                      Pastikan bukti transfer sudah diterima via WhatsApp
                    </p>
                    <p className="text-base text-[#1447e6]">
                      Verifikasi pembayaran setelah Anda mengecek bukti transfer yang dikirim pelanggan melalui WhatsApp
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes Input */}
            <div>
              <label className="block text-sm text-[#364153] mb-2">
                Catatan Verifikasi (Opsional)
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Contoh: Transfer sudah masuk, nominal sesuai"
                rows={3}
                className="w-full px-4 py-2.5 border border-[#e5e7eb] rounded-lg text-sm text-[#101828] placeholder:text-[rgba(16,24,40,0.5)] focus:outline-none focus:border-[#00bc7d] focus:ring-1 focus:ring-[#00bc7d] resize-none"
              />
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-[#e5e7eb] px-6 py-4 flex items-center justify-end gap-3">
            <button
              onClick={handleCancel}
              className="px-5 py-2.5 bg-[#f3f4f6] text-[#364153] rounded-2xl text-base hover:bg-[#e5e7eb] transition-colors"
            >
              Batal
            </button>
            <button
              onClick={handleVerify}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#009966] to-[#00bc7d] text-white rounded-2xl text-base hover:shadow-lg transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Verifikasi & Setujui
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
