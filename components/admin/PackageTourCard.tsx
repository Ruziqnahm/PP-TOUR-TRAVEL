interface PackageTourCardProps {
  id: string;
  image: string;
  title: string;
  location: string;
  duration: string;
  minPerson: string;
  price: string;
  type: 'Premium' | 'Ekonomis';
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export function PackageTourCard({
  id,
  image,
  title,
  location,
  duration,
  minPerson,
  price,
  type,
  onEdit,
  onDelete,
}: PackageTourCardProps) {
  const typeBadge = {
    Premium: {
      bg: 'bg-[rgba(254,154,0,0.9)]',
      border: 'border-[#ffb900]',
    },
    Ekonomis: {
      bg: 'bg-[rgba(43,127,255,0.9)]',
      border: 'border-[#51a2ff]',
    },
  };

  return (
    <div className="bg-white border border-[#f3f4f6] rounded-[16px] overflow-hidden shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] transition-transform hover:scale-[1.02]">
      {/* Image Section */}
      <div className="relative h-[192px] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        
        {/* Type Badge */}
        <div
          className={`absolute top-[10px] right-[10px] ${typeBadge[type].bg} border ${typeBadge[type].border} px-[13px] py-[7px] rounded-full`}
        >
          <p className="text-[12px] leading-[16px] text-white">{type}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-[20px] flex flex-col gap-[16px]">
        {/* Title and Location */}
        <div className="flex flex-col gap-[8px]">
          <h3 className="text-[20px] leading-[28px] font-semibold text-[#101828]">{title}</h3>
          <div className="flex items-center gap-[8px]">
            <img
              src="https://www.figma.com/api/mcp/asset/f2f0ec18-9132-4bb3-a6a4-da59ea9b38b8"
              alt=""
              className="w-[16px] h-[16px]"
            />
            <p className="text-[14px] leading-[20px] text-[#6a7282]">{location}</p>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-[12px]">
          {/* Duration */}
          <div className="flex items-center gap-[8px]">
            <img
              src="https://www.figma.com/api/mcp/asset/2970e1fa-8b9f-4f3b-97e4-687ee5ef0f30"
              alt=""
              className="w-[16px] h-[16px]"
            />
            <p className="text-[14px] leading-[20px] text-[#4a5565]">{duration}</p>
          </div>

          {/* Min Person */}
          <div className="flex items-center gap-[8px]">
            <img
              src="https://www.figma.com/api/mcp/asset/4296d419-2e12-4122-80b4-61e2ce750875"
              alt=""
              className="w-[16px] h-[16px]"
            />
            <p className="text-[14px] leading-[20px] text-[#4a5565]">{minPerson}</p>
          </div>
        </div>

        {/* Footer with Price and Actions */}
        <div className="border-t border-[#f3f4f6] pt-[16px] flex items-center justify-between">
          {/* Price */}
          <div className="flex flex-col">
            <p className="text-[16px] leading-[25.6px] text-[#6a7282]">Mulai dari</p>
            <p className="text-[16px] leading-[25.6px] text-[#009966] font-semibold">{price}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-[8px]">
            {/* Edit Button */}
            <button
              onClick={() => onEdit?.(id)}
              className="bg-[#ecfdf5] w-[36px] h-[36px] rounded-[16.4px] flex items-center justify-center hover:bg-[#d0fae5] transition-colors"
            >
              <img
                src="https://www.figma.com/api/mcp/asset/42d09ffa-216b-46bd-8f57-84ff5a51d411"
                alt="Edit"
                className="w-[16px] h-[16px]"
              />
            </button>

            {/* Delete Button */}
            <button
              onClick={() => onDelete?.(id)}
              className="bg-[#fef2f2] w-[36px] h-[36px] rounded-[16.4px] flex items-center justify-center hover:bg-[#fee2e2] transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 4H14M5.33333 4V2.66667C5.33333 2.29848 5.63181 2 6 2H10C10.3682 2 10.6667 2.29848 10.6667 2.66667V4M12.6667 4V13.3333C12.6667 13.7015 12.3682 14 12 14H4C3.63181 14 3.33333 13.7015 3.33333 13.3333V4"
                  stroke="#DC2626"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
