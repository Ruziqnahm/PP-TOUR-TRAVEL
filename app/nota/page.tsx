'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import InvoiceRow from '@/components/ui/InvoiceRow';
import InvoiceSection from '@/components/ui/InvoiceSection';

export default function NotaPage() {
  const router = useRouter();

  // Sample invoice data
  const invoiceData = {
    bookingCode: 'BKGXX8MWZ3',
    packageName: 'Paket Ekonomis Bali',
    destination: 'Bali',
    departureDate: '9 Desember 2025',
    pax: '3 orang (3 Dewasa, 0 Anak)',
    totalPayment: 55000000,
    status: 'SUDAH DIBAYAR',
    customerName: 'Sigit',
    institution: 'PT BUANA',
    whatsapp: '08521641118',
    email: 'Sigit@gmail.com',
    adminSession: 'Admin 1',
    adminName: 'Gatot Subroto',
    adminId: 'AE7EXGE',
    printDate: '8 Desember 2025 pukul 01.22',
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleClose = () => {
    router.push('/riwayat-pesanan');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9fafb] to-white flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#00bc7d] to-[#009966] px-8 py-6 relative print:hidden">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-[52px] h-[52px] bg-[rgba(255,255,255,0.2)] rounded-2xl flex items-center justify-center">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h1 className="text-[32px] font-bold text-white leading-tight">Preview Nota Pesanan</h1>
              <p className="text-base text-[#d0fae5]">Siap untuk dicetak atau disimpan sebagai PDF</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="w-10 h-10 rounded-[16.4px] flex items-center justify-center hover:bg-[rgba(255,255,255,0.1)] transition-colors"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-8 py-8 print:p-0">
        <div className="max-w-6xl mx-auto">
          {/* Print Button */}
          <div className="flex justify-end mb-8 print:hidden">
            <Button
              variant="success"
              onClick={handlePrint}
              startIcon={
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
              }
            >
              Cetak / Simpan PDF
            </Button>
          </div>

          {/* Invoice Card */}
          <div className="bg-white border-2 border-[#e5e7eb] rounded-3xl shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden">
            {/* Invoice Header */}
            <div className="bg-gradient-to-r from-[#00bc7c] to-[#3f3e2e] px-8 py-8 relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-10">
                  <div className="w-12 h-16 bg-white/20 rounded-lg" /> {/* Logo placeholder */}
                  <div>
                    <h2 className="text-[30px] text-white leading-9">PP Tour Travel</h2>
                    <p className="text-sm text-white">Wujudkan Petualangan Impian Anda</p>
                  </div>
                </div>
                <div className="bg-[rgba(255,255,255,0.2)] border-2 border-[rgba(255,255,255,0.3)] rounded-2xl px-6 py-3.5">
                  <p className="text-xs text-[#c6d2ff]">Kode Pesanan</p>
                  <p className="text-xl text-white tracking-wider font-normal">{invoiceData.bookingCode}</p>
                </div>
              </div>
            </div>

            {/* Invoice Body */}
            <div className="px-8 py-8 flex flex-col gap-8">
              {/* Detail Paket Wisata */}
              <InvoiceSection
                title="Detail Paket Wisata"
                icon={
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                }
              >
                <InvoiceRow label="Nama Paket" value={invoiceData.packageName} emoji="🎒" />
                <InvoiceRow label="Destinasi" value={invoiceData.destination} emoji="📍" />
                <InvoiceRow label="Keberangkatan" value={invoiceData.departureDate} emoji="📅" />
                <InvoiceRow label="Jumlah PAX" value={invoiceData.pax} emoji="👥" />

                {/* Total Pembayaran - Special Styling */}
                <div className="bg-gradient-to-r from-[#fffbeb] to-[#fef3c6] border-[3px] border-[#ffb900] rounded-2xl px-7 py-7 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
                  <p className="text-xs text-[#973c00] uppercase tracking-wider">💰 TOTAL PEMBAYARAN</p>
                  <p className="text-4xl text-[#7b3306] leading-10 mt-2">{formatCurrency(invoiceData.totalPayment)}</p>
                </div>

                <InvoiceRow label="Status" value={invoiceData.status} emoji="💳" />
              </InvoiceSection>

              {/* Informasi Pemesan */}
              <InvoiceSection
                title="Informasi Pemesan"
                iconBgColor="linear-gradient(135deg, rgba(43, 127, 255, 1) 0%, rgba(21, 93, 252, 1) 100%)"
                icon={
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                }
              >
                <InvoiceRow label="Nama Lengkap" value={invoiceData.customerName} emoji="👨" />
                <InvoiceRow label="Instansi" value={invoiceData.institution} emoji="🏢" />
                <InvoiceRow label="WhatsApp" value={invoiceData.whatsapp} emoji="📱" />
                <InvoiceRow label="Email" value={invoiceData.email} emoji="📧" />
              </InvoiceSection>

              {/* Informasi Petugas */}
              <InvoiceSection
                title="Informasi Petugas"
                iconBgColor="linear-gradient(135deg, rgba(173, 70, 255, 1) 0%, rgba(152, 16, 250, 1) 100%)"
                icon={
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                }
              >
                <div 
                  className="border-2 border-[#e5e7eb] rounded-2xl px-6 py-6 flex flex-col gap-3"
                  style={{ 
                    backgroundImage: 'linear-gradient(162.9deg, rgba(249, 250, 251, 1) 0%, rgba(243, 244, 246, 1) 100%)' 
                  }}
                >
                  <div className="bg-transparent flex h-[52px] items-center overflow-hidden rounded-[16.4px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]">
                    <div 
                      className="h-[52px] w-[200px] flex items-center px-6 py-4"
                      style={{ 
                        backgroundImage: 'linear-gradient(165.43deg, rgba(243, 244, 246, 1) 0%, rgba(229, 231, 235, 1) 100%)' 
                      }}
                    >
                      <p className="text-base text-[#364153]">👨‍💼 Petugas Sesi</p>
                    </div>
                    <div className="flex-1 h-[52px] bg-gradient-to-r from-[#10b981] to-[#059669] flex items-center px-6 py-4">
                      <p className="text-sm font-bold text-white">{invoiceData.adminSession}</p>
                    </div>
                  </div>
                  
                  <div className="bg-transparent flex h-[52px] items-center overflow-hidden rounded-[16.4px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]">
                    <div 
                      className="h-[52px] w-[200px] flex items-center px-6 py-4"
                      style={{ 
                        backgroundImage: 'linear-gradient(165.43deg, rgba(243, 244, 246, 1) 0%, rgba(229, 231, 235, 1) 100%)' 
                      }}
                    >
                      <p className="text-base text-[#364153]">📛 Nama Petugas</p>
                    </div>
                    <div className="flex-1 h-[52px] bg-gradient-to-r from-[#10b981] to-[#059669] flex items-center px-6 py-4">
                      <p className="text-sm font-bold text-white">{invoiceData.adminName}</p>
                    </div>
                  </div>
                  
                  <div className="bg-transparent flex h-[52px] items-center overflow-hidden rounded-[16.4px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]">
                    <div 
                      className="h-[52px] w-[200px] flex items-center px-6 py-4"
                      style={{ 
                        backgroundImage: 'linear-gradient(165.43deg, rgba(243, 244, 246, 1) 0%, rgba(229, 231, 235, 1) 100%)' 
                      }}
                    >
                      <p className="text-base text-[#364153]">🔑 ID Admin</p>
                    </div>
                    <div className="flex-1 h-[52px] bg-gradient-to-r from-[#10b981] to-[#059669] flex items-center px-6 py-4">
                      <p className="text-sm font-bold text-white">{invoiceData.adminId}</p>
                    </div>
                  </div>
                </div>
              </InvoiceSection>
            </div>

            {/* Invoice Footer */}
            <div className="bg-gradient-to-r from-[#1e2939] to-[#101828] px-8 py-7 relative">
              <div className="w-20 h-1 bg-[#00bc7d] rounded-full mx-auto mb-6" />
              <p className="text-[15px] font-semibold text-[#99a1af] text-center">
                Dokumen dicetak pada {invoiceData.printDate}
              </p>
              <p className="text-xs text-[#6a7282] text-center mt-2">
                © 2025 Explore Travel Agency. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="bg-[#f9fafb] border-t border-[#e5e7eb] px-8 py-5 print:hidden">
        <div className="max-w-6xl mx-auto flex justify-end">
          <button
            onClick={handleClose}
            className="bg-[#e5e7eb] hover:bg-[#d1d5db] text-[#364153] px-6 py-3 rounded-[16.4px] text-sm font-semibold transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
