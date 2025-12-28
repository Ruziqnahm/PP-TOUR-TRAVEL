'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ModalHeader from '@/components/ui/ModalHeader';
import PackageInfoCard from '@/components/ui/PackageInfoCard';
import FormInput from '@/components/ui/FormInput';
import FormDatePicker from '@/components/ui/FormDatePicker';
import FormTextarea from '@/components/ui/FormTextarea';
import TotalPaymentCard from '@/components/ui/TotalPaymentCard';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function EditPesananPage({ params }: PageProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    packageName: 'Paket Ekonomis Bali',
    location: 'Bali',
    bookingCode: 'BKGXX8MWZ3',
    customerName: 'Sigit',
    departureDate: '2025-12-09',
    whatsapp: '08521641118',
    pax: 50,
    institution: 'PT BUANA',
    notes: 'Penyediaan Obat umum dan Alat P3K Sederhana',
    totalPayment: 55000000,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    router.push('/riwayat-pesanan');
  };

  const handleCancel = () => {
    router.push('/riwayat-pesanan');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-full max-w-[700px] overflow-hidden">
        <ModalHeader 
          title="Edit Pesanan" 
          subtitle={`Kode: ${formData.bookingCode}`}
          closeUrl="/riwayat-pesanan"
        />
        
        <form onSubmit={handleSubmit} className="px-6 py-6 flex flex-col gap-6 max-h-[769px] overflow-y-auto">
          {/* Package Info */}
          <PackageInfoCard 
            packageName={formData.packageName}
            location={formData.location}
          />

          {/* Form Fields */}
          <div className="flex flex-col gap-6">
            {/* Nama Pemesan */}
            <FormInput
              label="Nama Pemesan"
              icon={
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              }
              value={formData.customerName}
              onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
              placeholder="Sigit"
            />

            {/* Keberangkatan & WhatsApp */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormDatePicker
                label="Keberangkatan"
                icon={
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                }
                value={formData.departureDate}
                onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
              />

              <FormInput
                label="WhatsApp"
                type="tel"
                icon={
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                }
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                placeholder="08521641118"
              />
            </div>

            {/* Jumlah PAX & Instansi */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormInput
                label="Jumlah PAX"
                type="number"
                icon={
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                }
                value={formData.pax}
                onChange={(e) => setFormData({ ...formData, pax: parseInt(e.target.value) })}
                disabled={true}
              />

              <FormInput
                label="Instansi"
                icon={
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                  </svg>
                }
                value={formData.institution}
                onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                placeholder="PT BUANA"
              />
            </div>

            {/* Catatan Tambahan */}
            <FormTextarea
              label="Catatan Tambahan (Opsional)"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Penyediaan Obat umum dan Alat P3K Sederhana"
              rows={3}
            />
          </div>

          {/* Total Payment */}
          <TotalPaymentCard amount={formData.totalPayment} />

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleCancel}
              className="flex-1 h-12 bg-[#f3f4f6] text-[#364153] rounded-[16.4px] text-base hover:bg-[#e5e7eb] transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              className="flex-1 h-12 bg-gradient-to-r from-[#2b7fff] to-[#155dfc] text-white rounded-[16.4px] text-base flex items-center justify-center gap-2 hover:from-[#1a6eef] hover:to-[#0d4ddc] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
              </svg>
              Simpan Perubahan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
