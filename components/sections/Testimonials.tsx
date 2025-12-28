"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Andi Pratama",
    role: "CEO Startup Tech",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    package: "Paket Tour Bali 4H3M",
    rating: 5,
    text: "Pengalaman yang luar biasa! Pelayanan tour guide sangat profesional dan ramah. Destinasi yang dikunjungi sangat menarik dan sesuai dengan itinerary. Sangat recommended untuk yang ingin berlibur dengan nyaman.",
  },
  {
    name: "Siti Nurhaliza",
    role: "Guru SMA",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    package: "Study Tour Yogyakarta",
    rating: 5,
    text: "Organize study tour untuk siswa kami berjalan lancar berkat bantuan Explore Travel. Tour guide sangat membantu dan memastikan semua siswa aman. Harga juga sangat kompetitif. Terima kasih!",
  },
  {
    name: "Budi Santoso",
    role: "Marketing Manager",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    package: "Company Gathering",
    rating: 5,
    text: "Company gathering kami sangat sukses! Tim Explore Travel sangat profesional dalam mengatur semua detail acara. Lokasi yang dipilih sangat tepat dan kegiatan yang disiapkan sangat menyenangkan.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative py-20 overflow-hidden" style={{
      background: "linear-gradient(135deg, #f9fafb 0%, #ffffff 50%, #eff6ff 100%)"
    }}>
      {/* Decorative Blobs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-[rgba(190,219,255,0.3)] rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-[rgba(164,244,207,0.3)] rounded-full blur-3xl" />
      
      <div className="relative max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#dbeafe] to-[#bfdbfe] rounded-full mb-6">
            <svg className="w-4 h-4 text-[#2b7fff]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
              <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
            </svg>
            <span className="text-sm text-[#1a5db8] font-medium">Testimoni</span>
          </div>
          <h2 className="text-4xl font-bold text-[#101828] mb-4">
            Apa Kata Mereka?
          </h2>
          <p className="text-base text-[#4a5565] max-w-2xl mx-auto">
            Kepuasan pelanggan adalah prioritas utama kami. Berikut testimoni dari mereka yang telah mempercayai layanan kami
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white border-2 border-[#e5e7eb] rounded-3xl p-12 shadow-xl relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <svg className="w-24 h-24 text-[#00bc7d]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Profile */}
            <div className="flex items-center gap-6 mb-8">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-[#00bc7d]">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#101828]">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-sm text-[#4a5565] mb-2">
                  {testimonials[currentIndex].role}
                </p>
                {/* Star Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#fbbf24]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Package Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#ecfdf5] to-[#d0fae5] rounded-full mb-6">
              <svg className="w-4 h-4 text-[#00bc7d]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm text-[#007a55] font-medium">
                {testimonials[currentIndex].package}
              </span>
            </div>

            {/* Testimonial Text */}
            <p className="text-lg text-[#4a5565] leading-relaxed italic">
              "{testimonials[currentIndex].text}"
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-8 mt-8">
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00bc7d] to-[#009966] text-white flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-gradient-to-r from-[#00bc7d] to-[#009966]"
                      : "w-3 bg-[#d1d5db] hover:bg-[#9ca3af]"
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00bc7d] to-[#009966] text-white flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white border-2 border-[#e5e7eb] rounded-2xl">
            <div className="text-4xl font-bold bg-gradient-to-r from-[#00bc7d] to-[#009966] bg-clip-text text-transparent mb-2">
              4.9/5
            </div>
            <p className="text-[#4a5565] font-medium">Rating Kepuasan</p>
          </div>
          <div className="text-center p-8 bg-white border-2 border-[#e5e7eb] rounded-2xl">
            <div className="text-4xl font-bold bg-gradient-to-r from-[#00bc7d] to-[#009966] bg-clip-text text-transparent mb-2">
              500+
            </div>
            <p className="text-[#4a5565] font-medium">Pelanggan Puas</p>
          </div>
          <div className="text-center p-8 bg-white border-2 border-[#e5e7eb] rounded-2xl">
            <div className="text-4xl font-bold bg-gradient-to-r from-[#00bc7d] to-[#009966] bg-clip-text text-transparent mb-2">
              98%
            </div>
            <p className="text-[#4a5565] font-medium">Recommend Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
