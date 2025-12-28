import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-[880px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop"
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(16,24,40,0.8)] via-[rgba(16,24,40,0.6)] to-[rgba(0,0,0,0)]" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1512px] mx-auto px-[156px]">
        <div className="pt-[124px] max-w-[768px]">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] rounded-full mb-6">
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" fill="#00bc7d" />
            </svg>
            <span className="text-sm text-[rgba(255,255,255,0.9)]">
              Berwisata Dengan Nyaman dan Aman
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-3 mb-6">
            <h1 className="text-[40px] font-bold leading-[48px] text-white">
              Travel, nikmati dan
            </h1>
            <h1
              className="text-[40px] font-bold leading-[48px] bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(0, 212, 146, 1) 0%, rgba(0, 211, 242, 1) 50%, rgba(0, 188, 125, 1) 100%)",
              }}
            >
              jelajahi hidup yang baru
            </h1>
          </div>

          {/* Description */}
          <p className="text-base leading-[25.6px] text-[rgba(255,255,255,0.8)] mb-8 max-w-[651px]">
            Wujudkan impian liburan Anda bersama kami. Paket lengkap, harga terjangkau, pengalaman tak terlupakan.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 mb-16">
            <Link
              href="/tours"
              className="px-8 h-[60px] flex items-center justify-center bg-gradient-to-r from-[#00bc7d] to-[#009966] rounded-[10px] text-white text-base"
            >
              Jelajahi Sekarang
            </Link>
            <button className="px-8 h-[60px] flex items-center justify-center gap-2 border-2 border-[rgba(255,255,255,0.3)] rounded-[10px] text-white text-base">
              Pelajari Lebih Lanjut
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Statistics Cards */}
          <div className="flex gap-[19px]">
            <div className="w-[168px] h-[114px] px-[25px] pt-[25px] pb-px bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] rounded-[16.4px] flex flex-col gap-1">
              <p className="text-[30px] leading-9 text-white text-center">
                500+
              </p>
              <p className="text-base leading-6 text-[rgba(255,255,255,0.7)] text-center">
                Pelanggan Puas
              </p>
            </div>
            <div className="w-[168px] h-[114px] px-[25px] pt-[25px] pb-px bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] rounded-[16.4px] flex flex-col gap-1">
              <p className="text-[30px] leading-9 text-white text-center">
                50+
              </p>
              <p className="text-base leading-6 text-[rgba(255,255,255,0.7)] text-center">
                Destinasi Wisata
              </p>
            </div>
            <div className="w-[168px] h-[114px] px-[25px] pt-[25px] pb-px bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] rounded-[16.4px] flex flex-col gap-1">
              <p className="text-[30px] leading-9 text-white text-center">
                4.9★
              </p>
              <p className="text-base leading-6 text-[rgba(255,255,255,0.7)] text-center">
                Rating Tertinggi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
