'use client';

import React, { useState } from 'react';
import AdminSidebar from '@/components/admin/AdminSidebar';
import PaymentStatsCard from '@/components/admin/PaymentStatsCard';
import PaymentFilterTabs from '@/components/admin/PaymentFilterTabs';
import PaymentTable, { PaymentData } from '@/components/admin/PaymentTable';
import VerifyPaymentModal from '@/components/admin/VerifyPaymentModal';
import toast from 'react-hot-toast';

export default function VerifikasiPembayaranPage() {
  const [selectedPayments, setSelectedPayments] = useState<string[]>([]);
  const [currentFilter, setCurrentFilter] = useState<'all' | 'paid' | 'pending'>('all');
  const [isVerifyModalOpen, setIsVerifyModalOpen] = useState(false);
  const [selectedPaymentForVerify, setSelectedPaymentForVerify] = useState<any>(null);

  // Data dummy untuk demo
  const allPayments: PaymentData[] = [
    {
      id: '1',
      bookingCode: 'BAMH760',
      customerName: 'Bambang',
      company: 'PT. Amerta Jaya',
      tourPackage: 'Bali Premium',
      pax: 48,
      totalCost: 69600000,
      status: 'paid'
    },
    {
      id: '2',
      bookingCode: 'BHRS937',
      customerName: 'Sigit',
      company: 'PT. Amerta Jaya',
      tourPackage: 'Bali Ekonomis',
      pax: 56,
      totalCost: 61600000,
      status: 'paid'
    },
    {
      id: '3',
      bookingCode: 'DEWK123',
      customerName: 'Dewi Kusuma',
      company: 'CV. Maju Bersama',
      tourPackage: 'Yogyakarta Premium',
      pax: 32,
      totalCost: 24000000,
      status: 'paid'
    },
    {
      id: '4',
      bookingCode: 'ANDW456',
      customerName: 'Andi Wijaya',
      company: 'PT. Sukses Makmur',
      tourPackage: 'Bandung Ekonomis',
      pax: 40,
      totalCost: 39600000,
      status: 'pending'
    },
    {
      id: '5',
      bookingCode: 'SITN321',
      customerName: 'Siti Nurhaliza',
      company: 'CV. Berkah Jaya',
      tourPackage: 'Lombok Premium',
      pax: 28,
      totalCost: 33600000,
      status: 'pending'
    }
  ];

  // Filter data berdasarkan filter yang dipilih
  const filteredPayments = allPayments.filter(payment => {
    if (currentFilter === 'all') return true;
    if (currentFilter === 'paid') return payment.status === 'paid';
    if (currentFilter === 'pending') return payment.status === 'pending';
    return true;
  });

  // Hitung statistik
  const stats = {
    all: allPayments.length,
    paid: allPayments.filter(p => p.status === 'paid').length,
    pending: allPayments.filter(p => p.status === 'pending').length
  };

  const handleVerifyPayment = () => {
    if (selectedPayments.length === 0) {
      toast.error('Pilih pembayaran yang ingin diverifikasi');
      return;
    }
    
    // Ambil data pembayaran pertama yang dipilih
    const paymentId = selectedPayments[0];
    const payment = allPayments.find(p => p.id === paymentId);
    
    if (payment) {
      // Mapping data untuk modal
      setSelectedPaymentForVerify({
        bookingCode: payment.bookingCode,
        customerName: payment.customerName,
        institution: payment.company,
        packageName: payment.tourPackage,
        pax: payment.pax,
        totalAmount: payment.totalCost,
        currentStatus: payment.status === 'pending' ? 'Menunggu Verifikasi' : 'Sudah Dibayar',
        whatsappNumber: '081234567893' // Data dummy, seharusnya dari database
      });
      setIsVerifyModalOpen(true);
    }
  };

  const handleConfirmVerify = (notes: string) => {
    console.log('Verifikasi pembayaran dengan catatan:', notes);
    console.log('Payment data:', selectedPaymentForVerify);
    
    // TODO: Implementasi API call untuk verifikasi pembayaran
    toast.success(`Pembayaran ${selectedPaymentForVerify.bookingCode} berhasil diverifikasi!`);
    if (notes) {
      toast.info(`Catatan: ${notes}`);
    }
    
    setIsVerifyModalOpen(false);
    setSelectedPayments([]);
  };

  const handleDeletePayment = () => {
    if (selectedPayments.length === 0) {
      toast.error('Pilih pembayaran yang ingin dihapus');
      return;
    }
    if (confirm(`Hapus ${selectedPayments.length} pembayaran?`)) {
      toast.success('Pembayaran berhasil dihapus');
      // Implementasi hapus pembayaran di sini
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <AdminSidebar activePage="pembayaran" />

      {/* Main Content */}
      <div className="flex-1 ml-64">
        <div 
          className="min-h-screen p-8 pt-8 overflow-y-auto"
          style={{
            background: 'linear-gradient(141.98deg, #F9FAFB 0%, #F3F4F6 100%)'
          }}
        >
          <div className="max-w-[1256px] mx-auto space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
                  Verifikasi Pembayaran
                </h1>
                <p className="text-base text-gray-500 mt-1">
                  Kelola dan verifikasi bukti pembayaran dari pelanggan
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleDeletePayment}
                  className="flex items-center gap-2 px-5 py-3 bg-[#E7000B] text-white rounded-2xl hover:bg-[#CC0009] transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 5H4.16667H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.66699 5.00016V3.3335C6.66699 2.89147 6.84259 2.46754 7.15515 2.15499C7.46771 1.84243 7.89163 1.66683 8.33366 1.66683H11.667C12.109 1.66683 12.5329 1.84243 12.8455 2.15499C13.1581 2.46754 13.3337 2.89147 13.3337 3.3335V5.00016M15.8337 5.00016V16.6668C15.8337 17.1089 15.6581 17.5328 15.3455 17.8453C15.0329 18.1579 14.609 18.3335 14.167 18.3335H5.83366C5.39163 18.3335 4.96771 18.1579 4.65515 17.8453C4.34259 17.5328 4.16699 17.1089 4.16699 16.6668V5.00016H15.8337Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-base">Hapus</span>
                </button>
                <button
                  onClick={handleVerifyPayment}
                  className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-[#009966] to-[#00BC7D] text-white rounded-2xl hover:from-[#008855] hover:to-[#00AA6D] transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6663 5L7.49967 14.1667L3.33301 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-base">Verifikasi Pembayaran</span>
                </button>
              </div>
            </div>

            {/* Filter Tabs */}
            <PaymentFilterTabs 
              stats={stats}
              onFilterChange={setCurrentFilter}
            />

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4">
              <PaymentStatsCard
                title="Total Pembayaran"
                value={stats.all}
                bgColor="bg-blue-100"
                icon={
                  <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                }
              />
              <PaymentStatsCard
                title="Menunggu Verifikasi"
                value={stats.pending}
                bgColor="bg-amber-100"
                textColor="text-amber-700"
                icon={
                  <svg className="w-6 h-6 text-amber-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                }
              />
              <PaymentStatsCard
                title="Sudah Dibayar"
                value={stats.paid}
                bgColor="bg-emerald-100"
                textColor="text-emerald-700"
                icon={
                  <svg className="w-6 h-6 text-emerald-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                }
              />
            </div>

            {/* Search and Filter */}
            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Cari berdasarkan nama, perusahaan, atau kode booking..."
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-2xl text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <svg 
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" 
                    viewBox="0 0 20 20" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.5 17.5L13.875 13.875" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-2xl text-base text-gray-700 hover:bg-gray-50 transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 5.83333H17.5L11.6667 12.9167V16.6667L8.33333 18.3333V12.9167L2.5 5.83333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Filter Lanjutan</span>
                </button>
              </div>
            </div>

            {/* Payment Table */}
            <PaymentTable 
              data={filteredPayments}
              onSelectionChange={setSelectedPayments}
            />
          </div>
        </div>
      </div>

      {/* Verify Payment Modal */}
      <VerifyPaymentModal
        isOpen={isVerifyModalOpen}
        onClose={() => setIsVerifyModalOpen(false)}
        paymentData={selectedPaymentForVerify}
        onVerify={handleConfirmVerify}
      />
    </div>
  );
}
