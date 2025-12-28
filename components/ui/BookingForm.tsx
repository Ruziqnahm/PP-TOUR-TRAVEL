'use client';

import { useState } from "react";
import toast from 'react-hot-toast';

interface BookingFormProps {
  packagePrice: string;
  packageTitle: string;
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission
    console.log("Form submitted:", formData);
    toast.success("Pesanan Anda telah dikirim! Kami akan menghubungi Anda segera.");
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
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Masukkan nama lengkap"
            className="w-full h-[50px] px-4 border border-[#e5e7eb] rounded-lg focus:outline-none focus:border-[#00bc7d] focus:ring-1 focus:ring-[#00bc7d] text-sm"
          />
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
                required
                value={formData.departureDate}
                onChange={(e) =>
                  setFormData({ ...formData, departureDate: e.target.value })
                }
                className="w-full h-[50px] px-4 border border-[#e5e7eb] rounded-lg focus:outline-none focus:border-[#00bc7d] focus:ring-1 focus:ring-[#00bc7d] text-sm"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#364153] mb-2">
              Jumlah PAX <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              required
              min="1"
              value={formData.pax}
              onChange={(e) => setFormData({ ...formData, pax: e.target.value })}
              className="w-full h-[50px] px-4 border border-[#e5e7eb] rounded-lg focus:outline-none focus:border-[#00bc7d] focus:ring-1 focus:ring-[#00bc7d] text-sm"
            />
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
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="email@domain.com"
              className="w-full h-[50px] px-4 border border-[#e5e7eb] rounded-lg focus:outline-none focus:border-[#00bc7d] focus:ring-1 focus:ring-[#00bc7d] text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#364153] mb-2">
              WhatsApp <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              required
              value={formData.whatsapp}
              onChange={(e) =>
                setFormData({ ...formData, whatsapp: e.target.value })
              }
              placeholder="tambahkan nomor WA anda"
              className="w-full h-[50px] px-4 border border-[#e5e7eb] rounded-lg focus:outline-none focus:border-[#00bc7d] focus:ring-1 focus:ring-[#00bc7d] text-sm"
            />
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
          className="w-full h-[60px] bg-gradient-to-r from-[#00bc7d] to-[#009966] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
        >
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
        </button>

        {/* Terms */}
        <p className="text-xs text-[#6a7282] text-center">
          Dengan memesan, Anda menyetujui syarat dan ketentuan yang berlaku
        </p>
      </form>
    </div>
  );
}
