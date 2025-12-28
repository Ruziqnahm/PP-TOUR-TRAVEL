'use client';

import { useState } from "react";
import toast from 'react-hot-toast';

interface BookingFormProps {
  packagePrice: string;
  packageTitle: string;
}

interface FormErrors {
  name?: string;
  departureDate?: string;
  pax?: string;
  email?: string;
  whatsapp?: string;
}

export default function BookingForm({
  packagePrice,
  packageTitle,
}: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    departureDate: "",
    pax: "50",
    institution: "",
    email: "",
    whatsapp: "",
    notes: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Nama pemesan wajib diisi';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Nama minimal 3 karakter';
    }

    // Departure date validation
    if (!formData.departureDate) {
      newErrors.departureDate = 'Tanggal keberangkatan wajib diisi';
    } else {
      const selectedDate = new Date(formData.departureDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.departureDate = 'Tanggal keberangkatan tidak boleh di masa lalu';
      }
    }

    // PAX validation
    const paxNumber = parseInt(formData.pax);
    if (!formData.pax || isNaN(paxNumber)) {
      newErrors.pax = 'Jumlah PAX wajib diisi';
    } else if (paxNumber < 1) {
      newErrors.pax = 'Jumlah PAX minimal 1 orang';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email wajib diisi';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }

    // WhatsApp validation
    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'Nomor WhatsApp wajib diisi';
    } else if (!/^[0-9]{10,15}$/.test(formData.whatsapp.replace(/[\s-]/g, ''))) {
      newErrors.whatsapp = 'Nomor WhatsApp tidak valid (10-15 digit)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Mohon lengkapi semua field yang wajib diisi');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // TODO: Handle form submission
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      console.log("Form submitted:", formData);
      toast.success("Pesanan Anda telah dikirim! Kami akan menghubungi Anda segera.");
      
      // Reset form
      setFormData({
        name: "",
        departureDate: "",
        pax: "50",
        institution: "",
        email: "",
        whatsapp: "",
        notes: "",
      });
      setErrors({});
    } catch (error) {
      toast.error('Terjadi kesalahan. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="bg-white rounded-lg p-8 sticky top-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-[#364153] mb-2">
          Atur Pesanan
        </h2>
        <p className="text-sm text-[#6a7282]">
          Lengkapi data diri Anda untuk melakukan pemesanan
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nama Pemesan */}
        <div>
          <label className="block text-sm font-medium text-[#364153] mb-2">
            Nama Pemesan <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            placeholder="Masukkan nama lengkap"
            className={`w-full h-[50px] px-4 border rounded-lg focus:outline-none focus:ring-1 text-sm ${
              errors.name 
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                : 'border-[#e5e7eb] focus:border-[#00bc7d] focus:ring-[#00bc7d]'
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        {/* Keberangkatan & Jumlah PAX */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-[#364153] mb-2">
              Keberangkatan <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="date"
                value={formData.departureDate}
                onChange={(e) => handleInputChange('departureDate', e.target.value)}
                className={`w-full h-[50px] px-4 border rounded-lg focus:outline-none focus:ring-1 text-sm ${
                  errors.departureDate 
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                    : 'border-[#e5e7eb] focus:border-[#00bc7d] focus:ring-[#00bc7d]'
                }`}
              />
            </div>
            {errors.departureDate && (
              <p className="text-red-500 text-xs mt-1">{errors.departureDate}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-[#364153] mb-2">
              Jumlah PAX <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              min="1"
              value={formData.pax}
              onChange={(e) => handleInputChange('pax', e.target.value)}
              className={`w-full h-[50px] px-4 border rounded-lg focus:outline-none focus:ring-1 text-sm ${
                errors.pax 
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                  : 'border-[#e5e7eb] focus:border-[#00bc7d] focus:ring-[#00bc7d]'
              }`}
            />
            {errors.pax && (
              <p className="text-red-500 text-xs mt-1">{errors.pax}</p>
            )}
          </div>
        </div>

        {/* Instansi */}
        <div>
          <label className="block text-sm font-medium text-[#364153] mb-2">
            Instansi
          </label>
          <input
            type="text"
            value={formData.institution}
            onChange={(e) =>
              setFormData({ ...formData, institution: e.target.value })
            }
            placeholder="Nama instansi/perusahaan"
            className="w-full h-[50px] px-4 border border-[#e5e7eb] rounded-lg focus:outline-none focus:border-[#00bc7d] focus:ring-1 focus:ring-[#00bc7d] text-sm"
          />
        </div>

        {/* Email & WhatsApp */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-[#364153] mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="email@domain.com"
              className={`w-full h-[50px] px-4 border rounded-lg focus:outline-none focus:ring-1 text-sm ${
                errors.email 
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                  : 'border-[#e5e7eb] focus:border-[#00bc7d] focus:ring-[#00bc7d]'
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-[#364153] mb-2">
              WhatsApp <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              value={formData.whatsapp}
              onChange={(e) => handleInputChange('whatsapp', e.target.value)}
              placeholder="08123456789"
              className={`w-full h-[50px] px-4 border rounded-lg focus:outline-none focus:ring-1 text-sm ${
                errors.whatsapp 
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                  : 'border-[#e5e7eb] focus:border-[#00bc7d] focus:ring-[#00bc7d]'
              }`}
            />
            {errors.whatsapp && (
              <p className="text-red-500 text-xs mt-1">{errors.whatsapp}</p>
            )}
          </div>
        </div>

        {/* Catatan Tambahan */}
        <div>
          <label className="block text-sm font-medium text-[#364153] mb-2">
            Catatan Tambahan (Opsional)
          </label>
          <textarea
            value={formData.notes}
            onChange={(e) =>
              setFormData({ ...formData, notes: e.target.value })
            }
            placeholder="Tambahkan catatan khusus (opsional)"
            rows={3}
            className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg focus:outline-none focus:border-[#00bc7d] focus:ring-1 focus:ring-[#00bc7d] text-sm resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-[60px] bg-gradient-to-r from-[#00bc7d] to-[#009966] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Memproses...
            </>
          ) : (
            <>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              Pesan Sekarang
            </>
          )}
        </button>

        {/* Terms */}
        <p className="text-xs text-[#6a7282] text-center">
          Dengan memesan, Anda menyetujui syarat dan ketentuan yang berlaku
        </p>
      </form>
    </div>
  );
}
