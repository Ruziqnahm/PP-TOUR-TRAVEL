import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#101828] text-white">
      <div className="max-w-[1512px] mx-auto px-8 pt-16 pb-0">
        <div className="grid grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-[#00bc7d] to-[#009966] flex items-center justify-center">
                <svg className="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </div>
              <span className="text-base">PP Tour Travel</span>
            </div>
            <p className="text-base leading-[25.6px] text-[#99a1af] max-w-[240px]">
              Wujudkan liburan impian Anda bersama kami. Kami menyediakan paket
              tour terbaik dengan harga terjangkau.
            </p>
            <div className="flex gap-3">
              <Link
                href="https://facebook.com"
                className="w-10 h-10 bg-[#1e2939] rounded-[10px] flex items-center justify-center hover:bg-[#2a3547]"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>
              <Link
                href="https://instagram.com"
                className="w-10 h-10 bg-[#1e2939] rounded-[10px] flex items-center justify-center hover:bg-[#2a3547]"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-[#d1d5dc] hover:text-white">
                Beranda
              </Link>
              <Link href="/tours" className="text-[#d1d5dc] hover:text-white">
                Paket Tour
              </Link>
              <Link href="/orders" className="text-[#d1d5dc] hover:text-white">
                Riwayat Pesanan
              </Link>
              <Link href="/about" className="text-[#d1d5dc] hover:text-white">
                Tentang Kami
              </Link>
            </nav>
          </div>

          {/* Popular Destinations */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">Destinasi Populer</h3>
            <nav className="flex flex-col gap-3">
              <p className="text-[#d1d5dc]">Bali</p>
              <p className="text-[#d1d5dc]">Yogyakarta</p>
              <p className="text-[#d1d5dc]">Bandung</p>
              <p className="text-[#d1d5dc]">Lombok</p>
              <p className="text-[#d1d5dc]">Raja Ampat</p>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">Hubungi Kami</h3>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-start">
                <svg className="w-5 h-5 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div className="text-sm leading-5 text-[#d1d5dc]">
                  <p>Jl. Gatot Subroto No. 123</p>
                  <p>Jakarta Selatan, 12950</p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <Link href="tel:+628123456789" className="text-sm text-[#d1d5dc] hover:text-white">
                  +62 812-3456-7890
                </Link>
              </div>
              <div className="flex gap-3 items-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <Link href="mailto:info@exploretravel.com" className="text-sm text-[#d1d5dc] hover:text-white">
                  info@exploretravel.com
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1e2939] pt-px pb-0 flex items-center justify-between h-[58.594px]">
          <p className="text-base text-[#6a7282]">
            © 2025 PP Tour Travel. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-[#d1d5dc] hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-[#d1d5dc] hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
