'use client';

import Image from "next/image";

interface PosterSectionProps {
  posterImage: string;
  packageTitle: string;
}

export default function PosterSection({
  posterImage,
  packageTitle,
}: PosterSectionProps) {
  const handleDownload = () => {
    // TODO: Implement download functionality
    alert("Download poster akan dimulai...");
  };

  return (
    <div className="bg-white rounded-lg p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-xl font-semibold text-[#364153]">
          Detail Paket Lengkap
        </h4>
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-4 py-2 text-sm text-[#00bc7d] hover:bg-[#f3f4f6] rounded-lg transition-colors"
        >
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Poster Info
        </button>
      </div>

      <p className="text-sm text-[#6a7282] mb-6">
        Lihat informasi lengkap mengenai fasilitas, destinasi, dan harga paket
        dalam bentuk poster
      </p>

      {/* Poster Preview with Download Overlay */}
      <div className="relative rounded-lg overflow-hidden bg-gray-100 group">
        <div className="relative w-full aspect-[478/676]">
          <Image
            src={posterImage}
            alt={`Poster ${packageTitle}`}
            fill
            className="object-cover"
          />
        </div>

        {/* Download Overlay */}
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handleDownload}
            className="flex flex-col items-center gap-3 text-white"
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <span className="text-sm font-medium">
              Klik tombol di bawah untuk download
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
