interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
}: PaginationProps) {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="bg-[#f9fafb] border-t border-[#e5e7eb] flex items-center justify-between px-6 py-4 h-[75px]">
      <div className="flex items-center gap-1">
        <p className="font-['Segoe_UI',sans-serif] font-normal leading-[25.6px] text-[#4a5565] text-[16px]">
          Menampilkan
        </p>
        <p className="font-['Segoe_UI',sans-serif] font-semibold leading-[25.6px] text-[#4a5565] text-[16px]">
          {startItem}-{endItem}
        </p>
        <p className="font-['Segoe_UI',sans-serif] font-normal leading-[25.6px] text-[#4a5565] text-[16px]">
          dari
        </p>
        <p className="font-['Segoe_UI',sans-serif] font-semibold leading-[25.6px] text-[#4a5565] text-[16px]">
          {totalItems}
        </p>
        <p className="font-['Segoe_UI',sans-serif] font-normal leading-[25.6px] text-[#4a5565] text-[16px]">
          jadwal
        </p>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-white border border-[#e5e7eb] rounded-[10px] px-4 h-[42px] hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <p className="font-['Segoe_UI',sans-serif] font-normal leading-6 text-[#364153] text-[16px]">
            Previous
          </p>
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`rounded-[10px] px-4 h-[42px] min-w-[42px] ${
              currentPage === page
                ? "bg-[#009966] text-white"
                : "bg-white border border-[#e5e7eb] text-[#364153] hover:bg-gray-50"
            }`}
          >
            <p className="font-['Segoe_UI',sans-serif] font-normal leading-6 text-[16px]">
              {page}
            </p>
          </button>
        ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="bg-white border border-[#e5e7eb] rounded-[10px] px-4 h-[42px] hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <p className="font-['Segoe_UI',sans-serif] font-normal leading-6 text-[#364153] text-[16px]">
            Next
          </p>
        </button>
      </div>
    </div>
  );
}
