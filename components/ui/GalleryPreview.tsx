import Image from "next/image";

interface GalleryPreviewProps {
  images: string[];
}

export default function GalleryPreview({ images }: GalleryPreviewProps) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {images.slice(0, 3).map((image, index) => (
        <div
          key={index}
          className="relative h-24 rounded-lg overflow-hidden bg-gray-100"
        >
          <Image
            src={image}
            alt={`Gallery ${index + 1}`}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
