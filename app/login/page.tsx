'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Checkbox } from '@/components/ui/Checkbox';

const imgGeminiGeneratedImage229Xz3229Xz3229X1 = "https://www.figma.com/api/mcp/asset/f3b1769e-b2cf-4e12-939f-fa13189193e7";
const imgIcon = "https://www.figma.com/api/mcp/asset/4d10b3c6-0eae-4265-991a-0c6b5e8f7fb0"; // Email icon
const imgIcon1 = "https://www.figma.com/api/mcp/asset/11daabb1-85e8-49b5-bd46-361591179f67"; // Password icon
const imgIcon2 = "https://www.figma.com/api/mcp/asset/f83108fd-9b24-44ab-819e-d7638b1614a0"; // Eye icon
const imgIcon3 = "https://www.figma.com/api/mcp/asset/f70232ff-5697-4ece-b036-05b762a45e05"; // Login button icon

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

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
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        
        {/* Header Text */}
        <div className="text-center mb-8">
          <h1 className="font-bold text-[#101828] text-[40px] leading-[48px] mb-2">
            Selamat Datang Kembali
          </h1>
          <p className="font-normal text-[#4a5565] text-[16px] leading-[25.6px]">
            Login untuk melanjutkan perjalanan Anda
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white/80 backdrop-blur-sm border-2 border-white/50 rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] p-8 w-full max-w-[448px] flex flex-col gap-8">
          
          <form className="flex flex-col gap-6 w-full" onSubmit={(e) => e.preventDefault()}>
            <Input
              label="Email"
              placeholder="nama@email.com"
              type="email"
              startIcon={<img src={imgIcon} alt="Email" className="w-5 h-5" />}
            />
            
            <Input
              label="Password"
              placeholder="Masukkan password"
              type={showPassword ? "text" : "password"}
              startIcon={<img src={imgIcon1} alt="Password" className="w-5 h-5" />}
              endIcon={
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="focus:outline-none cursor-pointer"
                >
                  <img src={imgIcon2} alt="Toggle Password" className="w-5 h-5" />
                </button>
              }
            />

            <div className="flex items-center justify-between">
              <Checkbox label="Ingat saya" />
              <Link href="/forgot-password" className="text-[#009966] text-sm font-normal hover:underline">
                Lupa password?
              </Link>
            </div>

            <Button 
              fullWidth 
              startIcon={<img src={imgIcon3} alt="" className="w-5 h-5" />}
            >
              Login
            </Button>
          </form>

          <div className="text-center">
            <p className="text-[#4a5565] text-base font-normal inline">
              Belum punya akun?{' '}
            </p>
            <Link href="/register" className="text-[#009966] text-base font-normal hover:underline">
              Daftar sekarang
            </Link>
          </div>

        </div>

        {/* Back Link */}
        <Link href="/" className="mt-8 text-[#4a5565] text-sm font-normal hover:text-[#101828] transition-colors">
          ← Kembali ke Beranda
        </Link>

      </div>
      
      {/* Top Left Image from design */}
      <div className="absolute top-[41px] left-[51px] w-[149px] h-[206px] pointer-events-none hidden md:block">
         <img src={imgGeminiGeneratedImage229Xz3229Xz3229X1} alt="" className="w-full h-full object-cover opacity-80" />
      </div>

    </div>
  );
}
