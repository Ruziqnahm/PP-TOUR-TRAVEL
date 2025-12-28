'use client';

import { useState } from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import PackageCard from "@/components/ui/PackageCard";
import SearchFilter from "@/components/ui/SearchFilter";

// Sample data
const packages = [
  {
    id: "1",
    title: "Paket Premium Bali",
    location: "Bali",
    duration: "4 Hari 2 Malam",
    price: "Rp 1.450.000",
    category: "Premium" as const,
    highlights: ["Pantai Melasti", "GWK", "Kecak Dance GWK"],
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop",
  },
  {
    id: "2",
    title: "Paket Ekonomis Bali",
    location: "Bali",
    duration: "3 Hari 1 Malam",
    price: "Rp 1.100.000",
    category: "Ekonomis" as const,
    highlights: ["Barong Dance", "Pantai Melasti", "Lovina Dolphin"],
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
  },
  {
    id: "3",
    title: "Paket Premium Yogyakarta",
    location: "Yogyakarta",
    duration: "2 Hari 1 Malam",
    price: "Rp 750.000",
    category: "Premium" as const,
    highlights: ["Pantai Parangtritis", "Jeep Lava Tour Merapi", "Studio Alam Gamplong"],
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&h=600&fit=crop",
  },
  {
    id: "4",
    title: "Paket Ekonomis Yogyakarta",
    location: "Yogyakarta",
    duration: "2 Hari 1 Malam",
    price: "Rp 690.000",
    category: "Ekonomis" as const,
    highlights: ["Heha Skyview", "Goa Pindul", "Pantai Indrayanti"],
    image: "https://images.unsplash.com/photo-1555331391-a371f2122468?w=800&h=600&fit=crop&q=80",
  },
  {
    id: "5",
    title: "Paket Premium Malang Batu",
    location: "Malang - Batu",
    duration: "2 Hari 1 Malam",
    price: "Rp 550.000",
    category: "Premium" as const,
    highlights: ["Jawa Timur Park 1", "Batu Night Spectacular (BNS)", "Alun-Alun Kota Batu"],
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&h=600&fit=crop",
  },
  {
    id: "6",
    title: "Paket Ekonomis Malang Batu",
    location: "Malang - Batu",
    duration: "1 Hari",
    price: "Rp 300.000",
    category: "Ekonomis" as const,
    highlights: ["Jawa Timur Park 1", "Batu Night Spectacular (BNS)", "Masjid ChengHoo"],
    image: "https://images.unsplash.com/photo-1600788907416-456578634209?w=800&h=600&fit=crop",
  },
  {
    id: "7",
    title: "Paket Premium Semarang",
    location: "Semarang",
    duration: "2 Hari Inap 1 Malam",
    price: "Rp 900.000",
    category: "Premium" as const,
    highlights: ["Lawang Sewu", "Dusun Semilir", "Wisata Belanja Kampoeng Semarang"],
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&h=600&fit=crop&q=80",
  },
  {
    id: "8",
    title: "Paket Ekonomis Semarang",
    location: "Semarang",
    duration: "2 Hari Tanpa Inap",
    price: "Rp 400.000",
    category: "Ekonomis" as const,
    highlights: ["Lawang Sewu", "Dusun Semilir", "Wisata Belanja Kampoeng Semarang"],
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
  },
  {
    id: "9",
    title: "Paket Premium Bandung",
    location: "Bandung",
    duration: "4 Hari Inap 2 Malam",
    price: "Rp 1.490.000",
    category: "Premium" as const,
    highlights: ["Kawah Putih Ciwidey", "Tangkuban Perahu", "Asia Afrika"],
    image: "https://images.unsplash.com/photo-1598948485421-33a1655d3c18?w=800&h=600&fit=crop",
  },
  {
    id: "10",
    title: "Paket Ekonomis Bandung",
    location: "Bandung",
    duration: "3 Hari Inap 1 Malam",
    price: "Rp 990.000",
    category: "Ekonomis" as const,
    highlights: ["Tangkupan Perahu", "Asia Afrika", "Floating Market"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
  },
];

export default function PaketTourPage() {
  const [filteredPackages, setFilteredPackages] = useState(packages);

  const handleSearch = (searchTerm: string) => {
    const filtered = packages.filter(
      (pkg) =>
        pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pkg.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPackages(filtered);
  };

  const handleDestinationChange = (destination: string) => {
    if (destination === "all") {
      setFilteredPackages(packages);
    } else {
      const filtered = packages.filter((pkg) =>
        pkg.location.toLowerCase().includes(destination.toLowerCase())
      );
      setFilteredPackages(filtered);
    }
  };

  const handleDurationChange = (duration: string) => {
    if (duration === "all") {
      setFilteredPackages(packages);
    } else {
      const filtered = packages.filter((pkg) =>
        pkg.duration.includes(`${duration} Hari`)
      );
      setFilteredPackages(filtered);
    }
  };

  const handleBudgetChange = (budget: string) => {
    if (budget === "all") {
      setFilteredPackages(packages);
      return;
    }

    const [min, max] = budget.split("-").map((v) => parseInt(v));
    const filtered = packages.filter((pkg) => {
      const price = parseInt(pkg.price.replace(/\D/g, ""));
      return price >= min && price <= max;
    });
    setFilteredPackages(filtered);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar isLoggedIn={true} />

      {/* Header */}
      <div className="bg-gradient-to-r from-[#00bc7d] to-[#009966] py-20 px-4">
        <div className="max-w-[1280px] mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            Katalog Paket Tour
          </h1>
          <p className="text-lg text-white/90">
            Temukan paket tour impian Anda dari berbagai destinasi menarik di Indonesia
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1280px] mx-auto px-8 py-16">
        {/* Search Filter */}
        <div className="mb-12">
          <SearchFilter
            onSearch={handleSearch}
            onDestinationChange={handleDestinationChange}
            onDurationChange={handleDurationChange}
            onBudgetChange={handleBudgetChange}
            totalResults={filteredPackages.length}
          />
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <PackageCard key={pkg.id} {...pkg} />
          ))}
        </div>

        {/* No Results */}
        {filteredPackages.length === 0 && (
          <div className="text-center py-20">
            <svg
              className="w-20 h-20 mx-auto text-gray-300 mb-4"
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
            <h3 className="text-2xl font-semibold text-[#364153] mb-2">
              Tidak ada paket yang ditemukan
            </h3>
            <p className="text-[#6a7282]">
              Coba ubah filter pencarian Anda
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
