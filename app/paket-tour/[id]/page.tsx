import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import PackageDetailHero from "@/components/ui/PackageDetailHero";
import DestinationList from "@/components/ui/DestinationList";
import FacilityList from "@/components/ui/FacilityList";
import GalleryPreview from "@/components/ui/GalleryPreview";
import BookingForm from "@/components/ui/BookingForm";
import PosterSection from "@/components/ui/PosterSection";

// Sample package data (in real app, this would come from API/database)
const packagesData = {
  "1": {
    id: "1",
    title: "Paket Premium Bali",
    location: "Bali",
    duration: "4 Hari 2 Malam",
    price: "Rp 1.450.000",
    pricePerPax: "/ Pax (Min. 50 Pax)",
    category: "Premium" as const,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop",
    destinations: [
      "Pantai Melasti",
      "GWK Cultural Park",
      "Kecak Dance GWK",
      "Uluwatu Temple",
      "Tanah Lot",
      "Ubud Monkey Forest",
    ],
    facilities: [
      "Transportasi Big Bus Pariwisata Terbaru",
      "Kapal Ferry (Ketapang - Gilimanuk PP)",
      "Makan Prasmanan 7x",
      "Hotel Bintang 4 ****",
      "Snack Box 2x & Air Mineral",
      "Dokumentasi Premium & Drone",
      "Tour Leader Profesional",
      "Tour Guide HPI Bali",
      "Tiket Wisata & Retribusi",
      "Biaya Tol, Parkir & Tips Crew",
      "Banner Kegiatan",
      "Doorprize Menarik",
      "Bonus Spesial untuk Panitia",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=400&h=300&fit=crop",
    ],
    posterImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=800&fit=crop",
  },
  "2": {
    id: "2",
    title: "Paket Ekonomis Bali",
    location: "Bali",
    duration: "3 Hari 1 Malam",
    price: "Rp 1.100.000",
    pricePerPax: "/ Pax (Min. 50 Pax)",
    category: "Ekonomis" as const,
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
    destinations: [
      "Barong Dance",
      "Pantai Melasti",
      "Lovina Dolphin",
      "Bedugul",
      "Joger Bali",
      "Krisna Blangsinga",
    ],
    facilities: [
      "Transportasi Big Bus Pariwisata Terbaru",
      "Kapal Ferry (Ketapang - Gilimanuk PP)",
      "Makan Prasmanan 5x",
      "Hotel Bintang 3 ***",
      "Snack Box 1x & Air Mineral",
      "Dokumentasi Premium",
      "Tour Leader",
      "Tour Guide HPI Bali",
      "Tiket Wisata & Retribusi",
      "Biaya Tol, Parkir & Tips Crew",
      "Banner Kegiatan",
      "Doorprize Menarik",
      "Bonus Spesial untuk Panitia",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=400&h=300&fit=crop",
    ],
    posterImage: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=800&fit=crop",
  },
  "3": {
    id: "3",
    title: "Paket Premium Yogyakarta",
    location: "Yogyakarta",
    duration: "2 Hari 1 Malam",
    price: "Rp 750.000",
    pricePerPax: "/ Pax (Min. 45 Pax)",
    category: "Premium" as const,
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&h=600&fit=crop",
    destinations: [
      "Pantai Parangtritis",
      "Jeep Lava Tour Merapi",
      "Studio Alam Gamplong",
      "Candi Borobudur",
      "Candi Prambanan",
      "Malioboro",
    ],
    facilities: [
      "Transportasi Bus Pariwisata AC",
      "Makan Prasmanan 4x",
      "Hotel Bintang 3 ***",
      "Snack Box & Air Mineral",
      "Dokumentasi Premium",
      "Tour Leader",
      "Tour Guide Lokal",
      "Tiket Wisata & Retribusi",
      "Biaya Parkir & Tips Crew",
      "Banner Kegiatan",
      "Doorprize",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1555331391-a371f2122468?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?w=400&h=300&fit=crop",
    ],
    posterImage: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&h=800&fit=crop",
  },
  "4": {
    id: "4",
    title: "Paket Ekonomis Yogyakarta",
    location: "Yogyakarta",
    duration: "2 Hari 1 Malam",
    price: "Rp 690.000",
    pricePerPax: "/ Pax (Min. 45 Pax)",
    category: "Ekonomis" as const,
    image: "https://images.unsplash.com/photo-1555331391-a371f2122468?w=800&h=600&fit=crop&q=80",
    destinations: [
      "Heha Skyview",
      "Goa Pindul",
      "Pantai Indrayanti",
      "Malioboro",
      "Alun-alun Kidul",
      "Keraton Yogyakarta",
    ],
    facilities: [
      "Transportasi Bus AC",
      "Makan Prasmanan 3x",
      "Hotel Bintang 2 **",
      "Air Mineral",
      "Dokumentasi",
      "Tour Leader",
      "Tour Guide Lokal",
      "Tiket Wisata",
      "Biaya Parkir",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1555331391-a371f2122468?w=400&h=300&fit=crop&q=80",
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?w=400&h=300&fit=crop",
    ],
    posterImage: "https://images.unsplash.com/photo-1555331391-a371f2122468?w=600&h=800&fit=crop&q=80",
  },
  "5": {
    id: "5",
    title: "Paket Premium Malang Batu",
    location: "Malang - Batu",
    duration: "2 Hari 1 Malam",
    price: "Rp 550.000",
    pricePerPax: "/ Pax (Min. 40 Pax)",
    category: "Premium" as const,
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&h=600&fit=crop",
    destinations: [
      "Jawa Timur Park 1",
      "Batu Night Spectacular (BNS)",
      "Alun-Alun Kota Batu",
      "Museum Angkut",
      "Coban Rondo",
      "Selecta",
    ],
    facilities: [
      "Transportasi Bus Pariwisata",
      "Makan Prasmanan 4x",
      "Hotel Bintang 3 ***",
      "Snack & Air Mineral",
      "Dokumentasi",
      "Tour Leader",
      "Tour Guide",
      "Tiket Wisata",
      "Parkir & Tips",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1600788907416-456578634209?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    ],
    posterImage: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&h=800&fit=crop",
  },
  "6": {
    id: "6",
    title: "Paket Ekonomis Malang Batu",
    location: "Malang - Batu",
    duration: "1 Hari",
    price: "Rp 300.000",
    pricePerPax: "/ Pax (Min. 40 Pax)",
    category: "Ekonomis" as const,
    image: "https://images.unsplash.com/photo-1600788907416-456578634209?w=800&h=600&fit=crop",
    destinations: [
      "Jawa Timur Park 1",
      "Batu Night Spectacular (BNS)",
      "Masjid ChengHoo",
      "Alun-alun Malang",
    ],
    facilities: [
      "Transportasi Bus AC",
      "Makan 2x",
      "Snack & Air Mineral",
      "Tour Leader",
      "Tiket Wisata",
      "Parkir",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600788907416-456578634209?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    ],
    posterImage: "https://images.unsplash.com/photo-1600788907416-456578634209?w=600&h=800&fit=crop",
  },
  "7": {
    id: "7",
    title: "Paket Premium Semarang",
    location: "Semarang",
    duration: "2 Hari Inap 1 Malam",
    price: "Rp 900.000",
    pricePerPax: "/ Pax (Min. 45 Pax)",
    category: "Premium" as const,
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&h=600&fit=crop&q=80",
    destinations: [
      "Lawang Sewu",
      "Dusun Semilir",
      "Wisata Belanja Kampoeng Semarang",
      "Kota Lama",
      "Sam Poo Kong",
      "Masjid Agung Jawa Tengah",
    ],
    facilities: [
      "Transportasi Bus Pariwisata",
      "Makan Prasmanan 4x",
      "Hotel Bintang 3 ***",
      "Snack & Air Mineral",
      "Dokumentasi",
      "Tour Leader",
      "Tour Guide",
      "Tiket Wisata",
      "Parkir & Tips",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=400&h=300&fit=crop&q=80",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1600788907416-456578634209?w=400&h=300&fit=crop",
    ],
    posterImage: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&h=800&fit=crop&q=80",
  },
  "8": {
    id: "8",
    title: "Paket Ekonomis Semarang",
    location: "Semarang",
    duration: "2 Hari Tanpa Inap",
    price: "Rp 400.000",
    pricePerPax: "/ Pax (Min. 45 Pax)",
    category: "Ekonomis" as const,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    destinations: [
      "Lawang Sewu",
      "Dusun Semilir",
      "Wisata Belanja Kampoeng Semarang",
      "Kota Lama",
    ],
    facilities: [
      "Transportasi Bus AC",
      "Makan 2x",
      "Snack & Air Mineral",
      "Tour Leader",
      "Tiket Wisata",
      "Parkir",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1600788907416-456578634209?w=400&h=300&fit=crop",
    ],
    posterImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=800&fit=crop",
  },
  "9": {
    id: "9",
    title: "Paket Premium Bandung",
    location: "Bandung",
    duration: "4 Hari Inap 2 Malam",
    price: "Rp 1.490.000",
    pricePerPax: "/ Pax (Min. 45 Pax)",
    category: "Premium" as const,
    image: "https://images.unsplash.com/photo-1598948485421-33a1655d3c18?w=800&h=600&fit=crop",
    destinations: [
      "Kawah Putih Ciwidey",
      "Tangkuban Perahu",
      "Asia Afrika",
      "Floating Market",
      "Trans Studio Bandung",
      "Factory Outlet",
    ],
    facilities: [
      "Transportasi Big Bus",
      "Makan Prasmanan 7x",
      "Hotel Bintang 4 ****",
      "Snack Box & Air Mineral",
      "Dokumentasi Premium",
      "Tour Leader",
      "Tour Guide",
      "Tiket Wisata",
      "Parkir & Tips",
      "Doorprize",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1598948485421-33a1655d3c18?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=400&h=300&fit=crop",
    ],
    posterImage: "https://images.unsplash.com/photo-1598948485421-33a1655d3c18?w=600&h=800&fit=crop",
  },
  "10": {
    id: "10",
    title: "Paket Ekonomis Bandung",
    location: "Bandung",
    duration: "3 Hari Inap 1 Malam",
    price: "Rp 990.000",
    pricePerPax: "/ Pax (Min. 45 Pax)",
    category: "Ekonomis" as const,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
    destinations: [
      "Tangkupan Perahu",
      "Asia Afrika",
      "Floating Market",
      "Factory Outlet",
      "Farmhouse Lembang",
      "Cihampelas Walk",
    ],
    facilities: [
      "Transportasi Bus AC",
      "Makan Prasmanan 5x",
      "Hotel Bintang 3 ***",
      "Snack & Air Mineral",
      "Dokumentasi",
      "Tour Leader",
      "Tour Guide",
      "Tiket Wisata",
      "Parkir",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1598948485421-33a1655d3c18?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=400&h=300&fit=crop",
    ],
    posterImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=800&fit=crop",
  },
};

export default async function PackageDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const packageData = packagesData[id as keyof typeof packagesData];

  if (!packageData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      <Navbar isLoggedIn={true} />

      <div className="max-w-[1280px] mx-auto px-8 py-8">
        {/* Back Button */}
        <Link
          href="/paket-tour"
          className="inline-flex items-center gap-2 text-[#364153] hover:text-[#00bc7d] mb-8 transition-colors"
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Kembali ke Katalog
        </Link>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_592px] gap-8">
          {/* Left Column - Package Details */}
          <div className="space-y-8">
            {/* Hero Image */}
            <PackageDetailHero
              title={packageData.title}
              location={packageData.location}
              duration={packageData.duration}
              category={packageData.category}
              image={packageData.image}
            />

            {/* Destinasi Wisata */}
            <DestinationList destinations={packageData.destinations} />

            {/* Gallery Preview */}
            <GalleryPreview images={packageData.gallery} />

            {/* Fasilitas */}
            <FacilityList facilities={packageData.facilities} />

            {/* Price Info */}
            <div className="bg-white rounded-lg p-8">
              <div className="flex items-baseline gap-2">
                <span className="text-sm text-[#6a7282]">Harga:</span>
                <span className="text-2xl font-bold text-[#364153]">
                  {packageData.price}
                </span>
                <span className="text-sm text-[#6a7282]">
                  {packageData.pricePerPax}
                </span>
              </div>
            </div>

            {/* Contact & Address */}
            <div className="bg-white rounded-lg p-8">
              <h4 className="text-xl font-semibold text-[#364153] mb-6">
                Kontak & Alamat
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-4 h-4 text-[#00bc7d] shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm text-[#364153]">
                    Perumahan Citra Sari Regency SunFlowers Cluster F4
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-4 h-4 text-[#00bc7d] shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <p className="text-sm text-[#364153]">0856-6420-2185</p>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-4 h-4 text-[#00bc7d] shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <p className="text-sm text-[#364153]">
                    WhatsApp: 0856-6420-2185
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-4 h-4 text-[#00bc7d] shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm text-[#364153]">
                    Instagram: @tourtravel.pp
                  </p>
                </div>
              </div>
            </div>

            {/* Poster Section */}
            <PosterSection
              posterImage={packageData.posterImage}
              packageTitle={packageData.title}
            />
          </div>

          {/* Right Column - Booking Form */}
          <div>
            <BookingForm
              packagePrice={packageData.price}
              packageTitle={packageData.title}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
