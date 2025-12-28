interface AdminAuthBackgroundProps {
  children: React.ReactNode;
  backgroundImage: string;
}

export function AdminAuthBackground({ children, backgroundImage }: AdminAuthBackgroundProps) {
  return (
    <div className="relative min-h-screen w-full bg-[#cabdbd] overflow-hidden flex items-center justify-center">
      {/* Background Image - Fullscreen */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={backgroundImage}
          alt=""
          className="w-full h-full object-cover pointer-events-none"
        />
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 w-full h-full bg-black/24" />
      
      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
