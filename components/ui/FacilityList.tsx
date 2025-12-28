interface FacilityListProps {
  facilities: string[];
}

export default function FacilityList({ facilities }: FacilityListProps) {
  return (
    <div className="bg-white rounded-lg p-8">
      <h3 className="text-2xl font-semibold text-[#364153] mb-6">
        Fasilitas Didapat
      </h3>
      <div className="flex flex-col gap-3">
        {facilities.map((facility, index) => (
          <div key={index} className="flex items-start gap-3">
            <svg
              className="w-4 h-4 text-[#00bc7d] shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm text-[#364153]">{facility}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
