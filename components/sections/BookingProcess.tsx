import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Pilih Paket Tour",
    description: "Pilih paket tour sesuai dengan destinasi dan budget yang Anda inginkan dari berbagai pilihan yang tersedia",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
    ),
    gradient: "from-[#00bc7d] to-[#009966]",
    bgGradient: "from-[#ecfdf5] to-[#d0fae5]",
    blobColor: "rgba(164,244,207,0.4)",
  },
  {
    number: "02",
    title: "Isi Form Pemesanan",
    description: "Lengkapi data pemesanan dengan informasi yang akurat untuk proses booking yang lancar",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clipRule="evenodd" />
      </svg>
    ),
    gradient: "from-[#2b7fff] to-[#155dfc]",
    bgGradient: "from-[#eff6ff] to-[#dbeafe]",
    blobColor: "rgba(190,219,255,0.4)",
  },
  {
    number: "03",
    title: "Melakukan Pembayaran",
    description: "Lakukan pembayaran melalui berbagai metode yang tersedia dengan aman dan mudah",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
        <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
      </svg>
    ),
    gradient: "from-[#ad46ff] to-[#9810fa]",
    bgGradient: "from-[#faf5ff] to-[#f3e8ff]",
    blobColor: "rgba(173,70,255,0.3)",
  },
  {
    number: "04",
    title: "Siap Berangkat",
    description: "Terima konfirmasi dan detail perjalanan, lalu siap-siap untuk pengalaman tak terlupakan",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
      </svg>
    ),
    gradient: "from-[#fe9a00] to-[#e17100]",
    bgGradient: "from-[#fffbeb] to-[#fef3c6]",
    blobColor: "rgba(254,154,0,0.3)",
  },
];

export default function BookingProcess() {
  return (
    <section className="relative py-20 overflow-hidden bg-white">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-50">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[rgba(164,244,207,0.2)] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[rgba(190,219,255,0.2)] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#d0fae5] to-[#a4f4cf] rounded-full mb-6">
            <svg className="w-4 h-4 text-[#007a55]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-[#007a55] font-medium">Cara Pemesanan</span>
          </div>
          <h2 className="text-4xl font-bold text-[#101828] mb-4">
            Proses Booking yang Mudah
          </h2>
          <p className="text-base text-[#4a5565] max-w-2xl mx-auto">
            Hanya 4 langkah sederhana untuk mewujudkan perjalanan impian Anda
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connecting Line - Hidden on last item and mobile */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-[60%] w-full h-[2px] bg-gradient-to-r from-[#e5e7eb] to-transparent z-0" />
              )}

              {/* Card */}
              <div className="relative bg-white border-2 border-[#f3f4f6] rounded-2xl p-8 hover:border-[#00bc7d] transition-all duration-300 hover:shadow-xl z-10">
                {/* Decorative Blob */}
                <div 
                  className="absolute -top-4 -right-4 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: step.blobColor }}
                />

                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-white to-gray-50 rounded-full flex items-center justify-center shadow-lg border-2 border-[#e5e7eb]">
                  <span className={`text-lg font-bold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className={`w-20 h-20 bg-gradient-to-br ${step.bgGradient} rounded-2xl flex items-center justify-center mb-6 mt-4`}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center text-white`}>
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#101828] mb-3">
                  {step.title}
                </h3>
                <p className="text-base text-[#4a5565] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-[#f9fafb] via-white to-[#ecfdf5] border-2 border-[#e5e7eb] rounded-3xl p-12 text-center shadow-xl">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-[#101828] mb-4">
              Siap Untuk Memulai Petualangan Anda?
            </h3>
            <p className="text-lg text-[#4a5565] mb-8">
              Jelajahi berbagai paket tour menarik kami atau hubungi tim kami untuk konsultasi gratis
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/paket-tour"
                className="px-8 py-4 bg-gradient-to-r from-[#00bc7d] to-[#009966] text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Lihat Paket Tour
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-[#00bc7d] border-2 border-[#00bc7d] rounded-xl font-semibold hover:bg-[#ecfdf5] transition-colors duration-300"
              >
                Hubungi Kami
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-12 border-t-2 border-[#e5e7eb]">
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#ecfdf5] to-[#d0fae5] rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#00bc7d]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-[#101828]">Pembayaran Aman</div>
                  <div className="text-xs text-[#4a5565]">Terjamin & Terenkripsi</div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#eff6ff] to-[#dbeafe] rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#2b7fff]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-[#101828]">Support 24/7</div>
                  <div className="text-xs text-[#4a5565]">Siap Membantu Anda</div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#fffbeb] to-[#fef3c6] rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#fe9a00]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-[#101828]">Best Rating</div>
                  <div className="text-xs text-[#4a5565]">4.9/5 dari 500+ Review</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
