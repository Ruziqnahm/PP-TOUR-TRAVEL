import React from 'react';

interface AuthBackgroundProps {
  children: React.ReactNode;
  logoSrc?: string;
}

export const AuthBackground: React.FC<AuthBackgroundProps> = ({ children, logoSrc }) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white font-sans">
       {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(146.99744882865932deg, rgba(236, 253, 245, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(239, 246, 255, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)" }}>
         {/* Decorative Blobs */}
         <div className="absolute bg-[#00d492] blur-3xl filter left-[-80px] opacity-50 rounded-full size-[347px] top-[-43px]" />
         <div className="absolute bg-[#51a2ff] blur-3xl filter right-[-80px] opacity-50 rounded-full size-[381px] top-[-11px]" />
         <div className="absolute bg-[#c27aff] blur-3xl filter left-[90px] opacity-50 rounded-full size-[421px] bottom-[-100px]" />
         
         <div className="absolute bg-[#46ecd5] blur-2xl filter opacity-40 rounded-full size-[411px] left-[-57px] top-[-150px]" />
         <div className="absolute bg-[#fda5d5] blur-2xl filter opacity-40 rounded-full size-[432px] left-[483px] top-[264px]" />
         <div className="absolute bg-[#a3b3ff] blur-2xl filter opacity-40 rounded-full size-[321px] left-[532px] top-[406px]" />
         
         <div className="absolute bg-[#5ee9b5] blur-xl filter left-[580px] opacity-30 rounded-full size-[245px] top-[327px]" />
         <div className="absolute bg-[#53eafd] blur-xl filter left-[835px] opacity-30 rounded-full size-[214px] top-[496px]" />
         <div className="absolute bg-[#c4b4ff] blur-xl filter left-[416px] opacity-30 rounded-full size-[230px] top-[641px]" />
         <div className="absolute bg-[#a4f4cf] blur-xl filter left-[937px] opacity-[0.35] rounded-full size-[198px] top-[22px]" />
         <div className="absolute bg-[#bedbff] blur-xl filter left-[641px] opacity-[0.35] rounded-full size-[215px] top-[677px]" />
         <div className="absolute bg-[#e9d4ff] blur-xl filter left-[51px] opacity-[0.35] rounded-full size-[182px] top-[454px]" />
         
         <div className="absolute bg-[#00d5be] blur-lg filter left-[418px] opacity-[0.417] rounded-full size-[129px] top-[79px]" />
         <div className="absolute bg-[#7c86ff] blur-lg filter right-[50px] opacity-[0.564] rounded-full size-[173px] top-[308px]" />
         <div className="absolute bg-[#fb64b6] blur-lg filter left-[552px] opacity-[0.583] rounded-full size-[157px] top-[557px]" />
         <div className="absolute bg-[#00d3f3] blur-lg filter right-[250px] opacity-[0.436] rounded-full size-[130px] bottom-[100px]" />
      </div>

      {/* Logo (Top Left) */}
      {logoSrc && (
        <div className="absolute top-[41px] left-[51px] w-[149px] h-[206px] pointer-events-none hidden md:block z-20">
          <img src={logoSrc} alt="Logo" className="w-full h-full object-cover opacity-80" />
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
