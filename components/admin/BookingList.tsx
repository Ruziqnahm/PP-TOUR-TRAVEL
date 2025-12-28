interface BookingItemProps {
  name: string;
  packageName: string;
  persons: number;
  time: string;
  bookingId: string;
  status: 'pending' | 'confirmed';
}

export function BookingItem({
  name,
  packageName,
  persons,
  time,
  bookingId,
  status,
}: BookingItemProps) {
  const iconBg = status === 'pending' ? 'bg-[#fef3c6]' : 'bg-[#d0fae5]';
  const icon =
    status === 'pending'
      ? 'https://www.figma.com/api/mcp/asset/b7bb73f5-a2b3-4295-91c4-6323a025f1a0'
      : 'https://www.figma.com/api/mcp/asset/584a2456-5ea9-45af-9b93-617d15e5702f';

  return (
    <div className="border border-[#e5e7eb] rounded-[16.4px] px-[17px] py-[17px] flex items-center justify-between">
      {/* Left Content */}
      <div className="flex items-center gap-[16px]">
        {/* Icon */}
        <div className={`${iconBg} w-[48px] h-[48px] rounded-[16.4px] flex items-center justify-center shrink-0`}>
          <img src={icon} alt="" className="w-[24px] h-[24px]" />
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <div className="flex items-center gap-[8px]">
            <p className="text-[16px] leading-[25.6px] text-[#101828]">{name}</p>
            {status === 'pending' && (
              <div className="bg-[#fef3c6] rounded-[4px] px-[8px] py-[2px]">
                <p className="text-[12px] leading-[16px] text-[#bb4d00]">
                  Menunggu Verifikasi
                </p>
              </div>
            )}
          </div>
          <p className="text-[16px] leading-[25.6px] text-[#6a7282]">
            {packageName} • {persons} orang
          </p>
          <p className="text-[16px] leading-[25.6px] text-[#99a1af]">{time}</p>
        </div>
      </div>

      {/* Booking ID */}
      <p className="text-[14px] leading-[20px] text-[#99a1af]">{bookingId}</p>
    </div>
  );
}

interface BookingListProps {
  bookings: BookingItemProps[];
}

export function BookingList({ bookings }: BookingListProps) {
  return (
    <div className="bg-white border border-[#f3f4f6] rounded-[16px] p-[25px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
      {/* Header */}
      <div className="flex items-center justify-between mb-[24px]">
        <h3 className="text-[20px] leading-[28px] font-semibold text-[#101828]">
          Booking Terbaru
        </h3>
        <button className="text-[14px] leading-[20px] text-[#009966] hover:underline">
          Lihat Semua →
        </button>
      </div>

      {/* Booking Items */}
      <div className="flex flex-col gap-[12px]">
        {bookings.map((booking, index) => (
          <BookingItem key={index} {...booking} />
        ))}
      </div>
    </div>
  );
}
