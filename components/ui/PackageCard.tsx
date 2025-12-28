import Image from "next/image";
import Link from "next/link";

interface PackageCardProps {
  id: string;
  title: string;
  location: string;
  duration: string;
  price: string;
  category: "Premium" | "Ekonomis";
  highlights: string[];
  image: string;
}

export default function PackageCard({
  id,
  title,
  location,
  duration,
  price,
  category,
  highlights,
  image,
}: PackageCardProps) {
  return (
    <div className="bg-white flex flex-col overflow-hidden rounded-2xl shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] w-full">
      {/* Image */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] via-[rgba(0,0,0,0)] to-[rgba(0,0,0,0)]" />
        
        {/* Category Badge */}
        <div
          className={`absolute top-4 right-4 px-3 py-1 rounded-full border ${
            category === "Premium"
              ? "bg-[rgba(254,154,0,0.2)] border-[rgba(255,185,0,0.3)] text-[#fef3c6]"
              : "bg-[rgba(16,185,129,0.2)] border-[rgba(16,185,129,0.3)] text-[#d1fae5]"
          } text-xs`}
        >
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4">
        {/* Title */}
        <h3 className="text-2xl font-semibold text-[#101828] leading-[34px]">
          {title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-[#4a5565]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-sm text-[#4a5565]">{location}</span>
        </div>

        {/* Duration */}
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-[#4a5565]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm text-[#4a5565]">{duration}</span>
        </div>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2">
          {highlights.slice(0, 3).map((highlight, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-[#f3f4f6] text-[#4a5565] text-xs rounded"
            >
              {highlight}
            </span>
          ))}
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-[#e5e7eb]">
          <div className="flex flex-col">
            <span className="text-xs text-[#6a7282]">Mulai dari</span>
            <span className="text-base text-[#096] font-normal">{price}</span>
          </div>
          
          <Link
            href={`/paket-tour/${id}`}
            className="px-4 py-2 bg-gradient-to-r from-[#00bc7d] to-[#009966] text-white rounded-[10px] text-base flex items-center gap-2 hover:shadow-lg transition-shadow"
          >
            Lihat Detail
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
