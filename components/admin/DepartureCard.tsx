interface DepartureItemProps {
  packageName: string;
  date: string;
  time: string;
  persons: number;
  status: 'today' | 'upcoming';
}

function DepartureItem({ packageName, date, time, persons, status }: DepartureItemProps) {
  const iconBg = status === 'today' ? 'bg-[#d0fae5]' : 'bg-[#dbeafe]';
  const icon =
    status === 'today'
      ? 'https://www.figma.com/api/mcp/asset/ff126e32-6047-42e5-8b92-db057541635a'
      : 'https://www.figma.com/api/mcp/asset/175bf52a-8675-4888-ae89-847ce9c001be';

  return (
    <div className="border border-[#e5e7eb] rounded-[16.4px] px-[17px] py-[17px]">
      <div className="flex items-start gap-[12px]">
        {/* Icon */}
        <div className={`${iconBg} w-[40px] h-[40px] rounded-[10px] flex items-center justify-center shrink-0`}>
          <img src={icon} alt="" className="w-[20px] h-[20px]" />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-[4px] flex-1">
          <p className="text-[16px] leading-[25.6px] text-[#101828]">{packageName}</p>
          
          <div className="flex items-center gap-[4px]">
            <img
              src="https://www.figma.com/api/mcp/asset/62137edb-c7f5-44be-be69-c1ff34c89dd1"
              alt=""
              className="w-[12px] h-[12px]"
            />
            <p className="text-[12px] leading-[16px] text-[#6a7282]">
              {date}, {time}
            </p>
          </div>

          <div className="flex items-center gap-[4px]">
            <img
              src="https://www.figma.com/api/mcp/asset/41e62b83-4ce4-44a4-8cde-df663ea14bae"
              alt=""
              className="w-[12px] h-[12px]"
            />
            <p className="text-[12px] leading-[16px] text-[#6a7282]">{persons} orang</p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface DepartureCardProps {
  departures: DepartureItemProps[];
}

export function DepartureCard({ departures }: DepartureCardProps) {
  return (
    <div className="bg-white border border-[#f3f4f6] rounded-[16px] p-[25px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
      {/* Header */}
      <h3 className="text-[20px] leading-[28px] font-semibold text-[#101828] mb-[24px]">
        Keberangkatan Terdekat
      </h3>

      {/* Departure Items */}
      <div className="flex flex-col gap-[16px]">
        {departures.map((departure, index) => (
          <DepartureItem key={index} {...departure} />
        ))}
      </div>
    </div>
  );
}
