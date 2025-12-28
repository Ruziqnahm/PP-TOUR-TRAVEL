const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
      </svg>
    ),
    title: "Harga Terbaik",
    description: "Paket tour berkualitas dengan harga kompetitif dan transparan tanpa biaya tersembunyi",
    gradient: "from-[#00bc7d] to-[#009966]",
    bgGradient: "from-[#ecfdf5] to-[#d0fae5]",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
      </svg>
    ),
    title: "Guide Profesional",
    description: "Tour guide berpengalaman dan ramah yang siap menemani perjalanan Anda",
    gradient: "from-[#2b7fff] to-[#155dfc]",
    bgGradient: "from-[#eff6ff] to-[#dbeafe]",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    title: "Aman & Terpercaya",
    description: "Legalitas lengkap dan asuransi perjalanan untuk keamanan maksimal",
    gradient: "from-[#ad46ff] to-[#9810fa]",
    bgGradient: "from-[#faf5ff] to-[#f3e8ff]",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
      </svg>
    ),
    title: "Fleksibel",
    description: "Jadwal keberangkatan yang fleksibel dan dapat disesuaikan dengan kebutuhan",
    gradient: "from-[#fe9a00] to-[#e17100]",
    bgGradient: "from-[#fffbeb] to-[#fef3c6]",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>
    ),
    title: "Support 24/7",
    description: "Customer service siap membantu Anda kapan saja sebelum, saat, dan setelah perjalanan",
    gradient: "from-[#f6339a] to-[#e60076]",
    bgGradient: "from-[#fdf2f8] to-[#fce7f3]",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
      </svg>
    ),
    title: "Berpengalaman",
    description: "10+ tahun melayani ribuan pelanggan dengan kepuasan 98%",
    gradient: "from-[#615fff] to-[#4f39f6]",
    bgGradient: "from-[#eef2ff] to-[#e0e7ff]",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 overflow-hidden" style={{
      background: "linear-gradient(138.54deg, #f9fafb 0%, #ffffff 50%, #ecfdf5 100%)"
    }}>
      {/* Decorative Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[rgba(164,244,207,0.3)] rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-32 w-72 h-72 bg-[rgba(190,219,255,0.3)] rounded-full blur-3xl" />
      
      <div className="relative max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#d0fae5] to-[#a4f4cf] rounded-full mb-6">
            <svg className="w-4 h-4 text-[#007a55]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-[#007a55] font-medium">Keunggulan Kami</span>
          </div>
          <h2 className="text-4xl font-bold text-[#101828] mb-4">
            Mengapa Memilih Explore Travel?
          </h2>
          <p className="text-base text-[#4a5565] max-w-2xl mx-auto">
            Kepercayaan ribuan pelanggan adalah bukti komitmen kami untuk memberikan pelayanan terbaik
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="group bg-white border-2 border-[#f3f4f6] rounded-2xl p-8 hover:border-[#00bc7d] transition-all duration-300 hover:shadow-xl">
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.bgGradient} rounded-2xl flex items-center justify-center mb-6`}>
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center text-white`}>
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#101828] mb-3">
                {feature.title}
              </h3>
              <p className="text-base text-[#4a5565] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trusted By Section */}
        <div className="bg-white border-2 border-[#e5e7eb] rounded-3xl p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-[#101828] mb-2">Dipercaya Oleh</h3>
            <p className="text-base text-[#4a5565]">
              Berbagai institusi dan perusahaan telah mempercayai layanan kami
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Sekolah & Universitas", icon: "M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z", gradient: "from-[#ecfdf5] to-[#d0fae5]" },
              { name: "Perusahaan", icon: "M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z", gradient: "from-[#eff6ff] to-[#dbeafe]" },
              { name: "Keluarga", icon: "M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z", gradient: "from-[#faf5ff] to-[#f3e8ff]" },
              { name: "Komunitas", icon: "M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3z", gradient: "from-[#fffbeb] to-[#fef3c6]" },
            ].map((client, index) => (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${client.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <svg className="w-10 h-10 text-[#00bc7d]" fill="currentColor" viewBox="0 0 20 20">
                    <path d={client.icon} />
                  </svg>
                </div>
                <p className="text-sm text-[#4a5565] font-medium">{client.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
