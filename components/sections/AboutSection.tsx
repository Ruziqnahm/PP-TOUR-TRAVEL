import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image & Badge */}
          <div className="relative">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop&q=80"
                alt="Travel Adventure"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#00bc7d]/10 to-[#009966]/10" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 bg-white rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00bc7d] to-[#009966] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#101828]">10+ Tahun</p>
                    <p className="text-sm text-[#4a5565]">Pengalaman Terbaik</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#d0fae5] rounded-full mb-4">
                <svg className="w-4 h-4 text-[#007a55]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                <span className="text-sm text-[#007a55] font-medium">Tentang Kami</span>
              </div>
              <h2 className="text-4xl font-bold text-[#101828] mb-6">
                Explore Travel Agency
              </h2>
              <p className="text-base text-[#4a5565] leading-relaxed">
                Partner terpercaya untuk mewujudkan petualangan impian Anda sejak 2022
              </p>
            </div>

            {/* Story */}
            <div className="bg-white border-2 border-[#e5e7eb] rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-[#101828] mb-4">Cerita Kami</h3>
              <p className="text-base text-[#4a5565] leading-relaxed mb-4">
                <strong className="text-[#00bc7d]">PP Tour Travel</strong> didirikan pada Tahun 2022 dengan misi untuk mewujudkan impian perjalanan setiap orang. Kami percaya bahwa setiap perjalanan adalah kesempatan untuk menciptakan kenangan berharga yang akan diingat selamanya.
              </p>
              <p className="text-base text-[#4a5565] leading-relaxed">
                Dengan pengalaman lebih dari 10 tahun, kami telah melayani ribuan pelanggan, mulai dari study tour sekolah, family gathering, outbound hingga corporate gathering, kami siap memberikan pengalaman terbaik untuk setiap perjalanan yang kami kelola.
              </p>
            </div>

            {/* Vision */}
            <div className="flex gap-4 p-6 bg-[#ecfdf5] border-2 border-[#a7f3d0] rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-br from-[#00bc7d] to-[#009966] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#047857] mb-2">Visi Kami</h3>
                <p className="text-base text-[#065f46] leading-relaxed">
                  Menjadi travel agency terdepan dan terpercaya di Indonesia yang menghadirkan pengalaman perjalanan berkualitas untuk semua kalangan.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="flex gap-4 p-6 bg-[#ecfdf5] border-2 border-[#a7f3d0] rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-br from-[#00bc7d] to-[#009966] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#047857] mb-2">Misi Kami</h3>
                <p className="text-base text-[#065f46] leading-relaxed">
                  Memberikan pelayanan terbaik, harga kompetitif, dan pengalaman tak terlupakan untuk setiap perjalanan yang kami kelola.
                </p>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white border-2 border-[#e5e7eb] rounded-xl">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-[#00bc7d]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                  </svg>
                  <p className="text-2xl font-bold text-[#101828]">10+</p>
                </div>
                <p className="text-sm text-[#4a5565]">Tahun Berpengalaman</p>
              </div>
              <div className="text-center p-4 bg-white border-2 border-[#e5e7eb] rounded-xl">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-[#00bc7d]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  <p className="text-2xl font-bold text-[#101828]">500+</p>
                </div>
                <p className="text-sm text-[#4a5565]">Pelanggan Puas</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#00bc7d] to-[#009966] rounded-3xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                </svg>
                <p className="text-4xl font-bold">10+</p>
              </div>
              <p className="text-base opacity-90">Tahun Berpengalaman</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <p className="text-4xl font-bold">500+</p>
              </div>
              <p className="text-base opacity-90">Pelanggan Puas</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <p className="text-4xl font-bold">50+</p>
              </div>
              <p className="text-base opacity-90">Destinasi Tersedia</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <p className="text-4xl font-bold">98%</p>
              </div>
              <p className="text-base opacity-90">Rating Kepuasan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
