import Image from "next/image";
import Link from "next/link";

const baliHighlights = [
  "Uluwatu Temple & Sunset",
  "Pantai Nusa Dua",
  "Ubud Rice Terrace",
  "Tanah Lot Temple",
];

export default function TopDestinations() {
  return (
    <section className="relative py-20 overflow-hidden" style={{
      background: "linear-gradient(136.81deg, #f9fafb 0%, #ffffff 50%, #ecfdf5 100%)"
    }}>
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-[100px] w-96 h-96 bg-[rgba(164,244,207,0.2)] rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[rgba(255,240,133,0.2)] rounded-full blur-3xl" />
      
      <div className="relative max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] rounded-full shadow-lg mb-6">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
            </svg>
          </div>
          <h2 className="text-[32px] font-bold text-[#101828] mb-4">
            <span className="inline-flex items-center gap-2">
              <svg className="w-8 h-8 text-[#fbbf24]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              </svg>
              Top 3 Destinasi Terfavorit
            </span>
          </h2>
          <p className="text-base text-[#4a5565] max-w-2xl mx-auto">
            Destinasi pilihan wisatawan yang paling banyak dikunjungi dan mendapat rating tertinggi
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Bali - Large Card */}
          <div className="group relative bg-white rounded-3xl shadow-lg overflow-hidden border-2 border-[#f3f4f6] hover:border-[#00bc7d] transition-all duration-300">
            {/* Rank Badge */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-[#fdc700] to-[#d08700] rounded-full shadow-lg">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              </svg>
              <span className="text-white font-bold text-sm">Top 1</span>
            </div>

            {/* Discount Badge */}
            <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-3 py-1.5 bg-[#00bc7d] rounded-full shadow-lg">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
              </svg>
              <span className="text-white font-bold text-sm">+29%</span>
            </div>

            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop&q=80"
                alt="Bali"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              {/* Location Info Overlay */}
              <div className="absolute bottom-6 left-6 z-10">
                <h3 className="text-2xl font-bold text-white mb-1">Bali</h3>
                <p className="text-sm text-white/90">Pulau Dewata dengan pantai eksotis dan budaya yang memukau</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              {/* Highlights */}
              <div className="bg-[#f0f9ff] border border-[#bae6fd] rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-[#0284c7]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
                  </svg>
                  <span className="text-sm font-semibold text-[#0284c7]">Highlight Destinasi</span>
                </div>
                <ul className="space-y-2">
                  {baliHighlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-[#0c4a6e]">
                      <svg className="w-4 h-4 text-[#0284c7]" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trending Badge */}
              <div className="flex items-center justify-center py-2 px-4 bg-gradient-to-r from-[#ec4899] to-[#f472b6] rounded-full">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                  </svg>
                  <span className="text-white font-semibold text-sm">5 Trending #1</span>
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2 px-4 py-2 bg-[#d0fae5] rounded-full">
                  <svg className="w-5 h-5 text-[#007a55]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                  <span className="text-sm font-semibold text-[#007a55]">1,234 Wisatawan</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-[#fef3c7] rounded-full">
                  <svg className="w-5 h-5 text-[#f59e0b]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                  </svg>
                  <span className="text-sm font-semibold text-[#f59e0b]">4.9 Rating</span>
                </div>
              </div>

              {/* Button */}
              <Link 
                href="/tours/bali"
                className="block w-full py-3 bg-gradient-to-r from-[#00bc7d] to-[#009966] text-white text-center font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Lihat Paket Bali →
              </Link>
            </div>
          </div>

          {/* Yogyakarta & Bandung - Stacked Cards */}
          <div className="space-y-8">
            {/* Yogyakarta - Top 2 */}
            <div className="group relative bg-white rounded-3xl shadow-lg overflow-hidden border-2 border-[#f3f4f6] hover:border-[#00bc7d] transition-all duration-300">
              {/* Rank Badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-[#a8a8a8] to-[#7a7a7a] rounded-full shadow-lg">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
                <span className="text-white font-bold text-sm">Top 2</span>
              </div>

              {/* Discount Badge */}
              <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-3 py-1.5 bg-[#00bc7d] rounded-full shadow-lg">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
                <span className="text-white font-bold text-sm">+2%</span>
              </div>

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&h=600&fit=crop&q=80"
                  alt="Yogyakarta"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Location Info Overlay */}
                <div className="absolute bottom-4 left-4 z-10">
                  <h3 className="text-xl font-bold text-white mb-1">Yogyakarta</h3>
                  <p className="text-xs text-white/90">Kota istimewa dengan warisan budaya dan kuliner legendaris</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-3">
                {/* Stats */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-[#d0fae5] rounded-full">
                    <svg className="w-4 h-4 text-[#007a55]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                    <span className="text-xs font-semibold text-[#007a55]">987 Wisatawan</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-[#fef3c7] rounded-full">
                    <svg className="w-4 h-4 text-[#f59e0b]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                    <span className="text-xs font-semibold text-[#f59e0b]">4.8 Rating</span>
                  </div>
                </div>

                {/* Button */}
                <Link 
                  href="/tours/yogyakarta"
                  className="block w-full py-2.5 bg-gradient-to-r from-[#00bc7d] to-[#009966] text-white text-center text-sm font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  Lihat Paket Yogyakarta →
                </Link>
              </div>
            </div>

            {/* Bandung - Top 3 */}
            <div className="group relative bg-white rounded-3xl shadow-lg overflow-hidden border-2 border-[#f3f4f6] hover:border-[#00bc7d] transition-all duration-300">
              {/* Rank Badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-[#cd7f32] to-[#8b5a2b] rounded-full shadow-lg">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
                <span className="text-white font-bold text-sm">Top 3</span>
              </div>

              {/* Discount Badge */}
              <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-3 py-1.5 bg-[#00bc7d] rounded-full shadow-lg">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
                <span className="text-white font-bold text-sm">+18%</span>
              </div>

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&h=600&fit=crop&q=80"
                  alt="Bandung"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Location Info Overlay */}
                <div className="absolute bottom-4 left-4 z-10">
                  <h3 className="text-xl font-bold text-white mb-1">Bandung</h3>
                  <p className="text-xs text-white/90">Paris van Java dengan udara sejuk dan kuliner khas</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-3">
                {/* Stats */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-[#d0fae5] rounded-full">
                    <svg className="w-4 h-4 text-[#007a55]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                    <span className="text-xs font-semibold text-[#007a55]">856 Wisatawan</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-[#fef3c7] rounded-full">
                    <svg className="w-4 h-4 text-[#f59e0b]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                    <span className="text-xs font-semibold text-[#f59e0b]">4.7 Rating</span>
                  </div>
                </div>

                {/* Button */}
                <Link 
                  href="/tours/bandung"
                  className="block w-full py-2.5 bg-gradient-to-r from-[#00bc7d] to-[#009966] text-white text-center text-sm font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  Lihat Paket Bandung →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white border-2 border-[#e5e7eb] text-[#101828] rounded-xl hover:border-[#00bc7d] hover:text-[#00bc7d] transition-all duration-300"
          >
            Jelajahi Semua Destinasi
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
