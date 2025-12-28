interface StatsCardProps {
  icon: string;
  title: string;
  value: string | number;
  trend?: string;
  trendType?: 'up' | 'down' | 'warning' | 'neutral';
  gradientFrom: string;
  gradientTo: string;
}

export function StatsCard({
  icon,
  title,
  value,
  trend,
  trendType = 'up',
  gradientFrom,
  gradientTo,
}: StatsCardProps) {
  const trendColors = {
    up: 'text-[#009966]',
    down: 'text-red-500',
    warning: 'text-[#e17100]',
    neutral: 'text-[#4a5565]',
  };

  const trendIcon = {
    up: 'https://www.figma.com/api/mcp/asset/60e188d5-aa63-4f85-8ba4-3c86c33d6674',
    down: 'https://www.figma.com/api/mcp/asset/60e188d5-aa63-4f85-8ba4-3c86c33d6674',
    warning: 'https://www.figma.com/api/mcp/asset/944f48a2-9659-4fd7-afcf-6404fd910bb5',
    neutral: '',
  };

  return (
    <div className="bg-white border border-[#f3f4f6] rounded-[16px] p-[25px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
      <div className="flex items-start justify-between h-[92px]">
        {/* Left Content */}
        <div className="flex flex-col gap-[8px] flex-1">
          {/* Title */}
          <div className="flex items-center gap-[8px] h-[20px]">
            <div className="w-[16px] h-[16px] shrink-0">
              <img src={icon} alt="" className="w-full h-full" />
            </div>
            <p className="text-[14px] leading-[20px] text-[#6a7282]">{title}</p>
          </div>

          {/* Value */}
          <h2 className="text-[30px] leading-[36px] font-bold text-[#101828] tracking-[-0.3px]">
            {value}
          </h2>

          {/* Trend */}
          {trend && (
            <div className="flex items-center gap-[8px] h-[20px]">
              {trendIcon[trendType] && (
                <div className="w-[16px] h-[16px] shrink-0">
                  <img src={trendIcon[trendType]} alt="" className="w-full h-full" />
                </div>
              )}
              <p className={`text-[14px] leading-[20px] ${trendColors[trendType]}`}>
                {trend}
              </p>
            </div>
          )}
        </div>

        {/* Icon Container with Gradient */}
        <div
          className="w-[48px] h-[48px] rounded-[16.4px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
          }}
        >
          <div className="w-[24px] h-[24px]">
            {/* This will be replaced with actual icons */}
            <div className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
