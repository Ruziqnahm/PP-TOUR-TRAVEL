interface ImagePreviewProps {
  images: string[];
  onRemove?: (index: number) => void;
}

export function ImagePreview({ images, onRemove }: ImagePreviewProps) {
  if (images.length === 0) return null;

  return (
    <div className="flex gap-[5px] items-center flex-wrap">
      {images.map((image, index) => (
        <div key={index} className="relative h-[71px] w-[106px] rounded-[8px] overflow-hidden group">
          <img 
            src={image} 
            alt={`Preview ${index + 1}`} 
            className="w-full h-full object-cover"
          />
          {onRemove && (
            <button
              type="button"
              onClick={() => onRemove(index)}
              className="absolute top-1 right-1 w-[20px] h-[20px] bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-xs"
            >
              ×
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
