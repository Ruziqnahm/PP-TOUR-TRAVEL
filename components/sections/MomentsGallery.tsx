import Image from "next/image";
import Link from "next/link";

const moments = [
  {
    image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800&h=800&fit=crop",
    alt: "Wisata Pantai",
  },
  {
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=800&fit=crop",
    alt: "Wisata Gunung",
  },
  {
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&h=800&fit=crop",
    alt: "Wisata Budaya",
  },
  {
    image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800&h=800&fit=crop",
    alt: "Wisata Alam",
  },
  {
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=800&fit=crop",
    alt: "Road Trip",
  },
  {
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=800&h=800&fit=crop",
    alt: "City Tour",
  },
  {
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=800&fit=crop",
    alt: "Mountain View",
  },
  {
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=800&fit=crop",
    alt: "Sunset Beach",
  },
];

export default function MomentsGallery() {
  return (
    <section className="relative py-20 overflow-hidden" style={{
      background: "linear-gradient(140deg, #ffffff 0%, #f9fafb 50%, #ecfdf5 100%)"
    }}>
      {/* Decorative Blobs */}
      <div className="absolute top-32 left-20 w-64 h-64 bg-[rgba(164,244,207,0.25)] rounded-full blur-3xl" />
      <div className="absolute bottom-32 right-20 w-64 h-64 bg-[rgba(255,240,133,0.25)] rounded-full blur-3xl" />
      
      <div className="relative max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#d0fae5] to-[#a4f4cf] rounded-full mb-6">
            <svg className="w-4 h-4 text-[#007a55]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-[#007a55] font-medium">Galeri Momen</span>
          </div>
          <h2 className="text-4xl font-bold text-[#101828] mb-4">
            Momen-Momen Yang Diabadikan
          </h2>
          <p className="text-base text-[#4a5565] max-w-2xl mx-auto">
            Lihat kebahagiaan dan pengalaman tak terlupakan dari para peserta kami
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {moments.map((moment, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <Image
                src={moment.image}
                alt={moment.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-semibold text-lg">{moment.alt}</p>
                  <div className="flex items-center gap-2 mt-2 text-white/80 text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    <span>Peserta Tour</span>
                  </div>
                </div>
              </div>

              {/* Border Effect */}
              <div className="absolute inset-0 border-4 border-white/0 group-hover:border-white/30 rounded-2xl transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="bg-gradient-to-r from-[#833ab4] via-[#e1306c] to-[#fd1d1d] p-1 rounded-3xl shadow-2xl">
          <div className="bg-white rounded-[22px] p-10 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#833ab4] via-[#e1306c] to-[#fd1d1d] rounded-3xl mb-6">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-[#101828] mb-3">
              Bagikan Momen Anda di Instagram
            </h3>
            <p className="text-base text-[#4a5565] mb-6 max-w-xl mx-auto">
              Tag kami <span className="font-semibold text-[#e1306c]">@exploretravel</span> dan gunakan hashtag <span className="font-semibold text-[#e1306c]">#ExploreTravelID</span> untuk berbagi pengalaman perjalanan Anda
            </p>
            
            <Link
              href="https://instagram.com/exploretravel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#833ab4] via-[#e1306c] to-[#fd1d1d] text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Follow @exploretravel</span>
            </Link>

            {/* Social Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t-2 border-gray-100">
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-[#833ab4] to-[#e1306c] bg-clip-text text-transparent mb-1">
                  10K+
                </div>
                <p className="text-sm text-[#4a5565]">Followers</p>
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-[#833ab4] to-[#e1306c] bg-clip-text text-transparent mb-1">
                  2K+
                </div>
                <p className="text-sm text-[#4a5565]">Posts</p>
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-[#833ab4] to-[#e1306c] bg-clip-text text-transparent mb-1">
                  500+
                </div>
                <p className="text-sm text-[#4a5565]">Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
