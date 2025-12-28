interface AdminAuthCardProps {
  children: React.ReactNode;
}

export function AdminAuthCard({ children }: AdminAuthCardProps) {
  return (
    <div className="relative">
      {/* Glass Card */}
      <div className="w-[531px] h-[615px] rounded-[28px] bg-white/30 backdrop-blur-[8.5px] relative">
        {/* Card Content */}
        {children}
      </div>
    </div>
  );
}
