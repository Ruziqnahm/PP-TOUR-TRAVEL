import Image from "next/image";

interface PackageDetailHeroProps {
  title: string;
  location: string;
  duration: string;
  category: "Premium" | "Ekonomis";
  image: string;
}

export default function PackageDetailHero({
  title,
  location,
  duration,
  category,
  image,
}: PackageDetailHeroProps) {
  return (
    <div className="relative w-full h-[288px] rounded-lg overflow-hidden">
      {/* Image */}
      <div className="absolute inset-0">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] via-transparent to-transparent" />

      {/* Category Badge */}
      <div
        className={`absolute top-4 left-4 px-6 py-2 rounded-full shadow-lg flex items-center gap-2 ${
          category === "Premium"
            ? "bg-gradient-to-r from-[#ffb900] to-[#fe9a00]"
            : "bg-gradient-to-r from-[#00bc7d] to-[#009966]"
        }`}
      >
        <svg
          className="w-4 h-4 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <span className="text-sm font-medium text-white">
          PAKET {category.toUpperCase()}
        </span>
      </div>

      {/* Package Info Overlay */}
      <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2">
        <h1 className="text-4xl font-bold text-white leading-tight">
          {title}
        </h1>
        <div className="flex items-center gap-4">
          {/* Location */}
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4 text-white/90"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-sm text-white/90">{location}</span>
          </div>

          {/* Duration */}
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4 text-white/90"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-sm text-white/90">{duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
