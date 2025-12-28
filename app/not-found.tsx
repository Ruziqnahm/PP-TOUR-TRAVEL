import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9fafb] via-white to-[#ecfdf5] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        {/* 404 Illustration */}
        <div className="mb-8">
          <h1 className="text-[150px] font-bold bg-gradient-to-r from-[#00BC7D] to-[#009966] bg-clip-text text-transparent leading-none">
            404
          </h1>
        </div>

        {/* Error Icon */}
        <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-[#ecfdf5] to-[#d0fae5] rounded-full flex items-center justify-center">
          <svg
            className="w-12 h-12 text-[#00BC7D]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Message */}
        <h2 className="text-4xl font-bold text-[#101828] mb-4">
          Halaman Tidak Ditemukan
        </h2>
        <p className="text-lg text-[#4a5565] mb-8 max-w-md mx-auto">
          Maaf, halaman yang Anda cari tidak ditemukan atau mungkin telah dipindahkan.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#00BC7D] to-[#009966] text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Kembali ke Beranda
          </Link>
          <Link
            href="/paket-tour"
            className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-[#e5e7eb] text-[#101828] rounded-xl font-semibold hover:border-[#00BC7D] hover:text-[#00BC7D] transition-all flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            Lihat Paket Tour
          </Link>
        </div>

        {/* Additional Links */}
        <div className="mt-12 pt-8 border-t border-[#e5e7eb]">
          <p className="text-sm text-[#6a7282] mb-4">Butuh bantuan?</p>
          <div className="flex items-center justify-center gap-6">
            <Link
              href="/contact"
              className="text-sm text-[#00BC7D] hover:text-[#009966] font-medium"
            >
              Hubungi Kami
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/about"
              className="text-sm text-[#00BC7D] hover:text-[#009966] font-medium"
            >
              Tentang Kami
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/login"
              className="text-sm text-[#00BC7D] hover:text-[#009966] font-medium"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
