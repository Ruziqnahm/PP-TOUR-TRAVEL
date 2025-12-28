interface AdminLogoProps {
  logoImage: string;
  title?: string;
}

export function AdminLogo({ logoImage, title = "PP TOUR TRAVEL" }: AdminLogoProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      {/* Logo Image */}
      <div className="h-[113.806px] w-[84px] relative overflow-hidden">
        <img
          src={logoImage}
          alt="PP Tour Travel Logo"
          className="absolute h-[146.06%] left-[-17.76%] top-[-22.74%] w-[139.45%]"
        />
      </div>
      
      {/* Company Name */}
      <p className="font-['Poppins'] font-extrabold text-[24.012px] text-black leading-[1.5] whitespace-nowrap">
        {title}
      </p>
    </div>
  );
}
