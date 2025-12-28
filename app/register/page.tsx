'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { AuthBackground } from '@/components/ui/AuthBackground';
import { AuthCard } from '@/components/ui/AuthCard';

// Assets from Figma
const imgUserIcon = "https://www.figma.com/api/mcp/asset/16ff6e04-0aec-40f6-ad0a-38b748c0f682";
const imgEmailIcon = "https://www.figma.com/api/mcp/asset/556bcfb1-d5e6-47a3-9c10-fc05ecf8480d";
const imgPhoneIcon = "https://www.figma.com/api/mcp/asset/2fd95364-16f7-45c0-babe-bb45a6c88eef";
const imgLockIcon = "https://www.figma.com/api/mcp/asset/d3157140-3887-4d7b-93d2-c680962d5a30";
const imgEyeIcon = "https://www.figma.com/api/mcp/asset/fd8097f9-fb76-4f15-8ec1-b5c3079182e1";
const imgArrowIcon = "https://www.figma.com/api/mcp/asset/f30f7a23-f49d-4780-b7a8-2d68fc65ccfb";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <AuthBackground>
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        
        {/* Header Text */}
        <div className="text-center mb-8">
          <h1 className="font-bold text-[#101828] text-[40px] leading-[48px] mb-2">
            Daftar Akun Baru
          </h1>
          <p className="font-normal text-[#4a5565] text-[16px] leading-[25.6px]">
            Mulai petualangan Anda bersama kami
          </p>
        </div>

        {/* Register Card */}
        <AuthCard className="flex flex-col gap-8">
          
          <form className="flex flex-col gap-4 w-full" onSubmit={(e) => e.preventDefault()}>
            <Input
              label="Nama Lengkap"
              placeholder="Masukkan nama lengkap"
              type="text"
              startIcon={<img src={imgUserIcon} alt="User" className="w-5 h-5" />}
            />

            <Input
              label="Email"
              placeholder="nama@email.com"
              type="email"
              startIcon={<img src={imgEmailIcon} alt="Email" className="w-5 h-5" />}
            />

            <Input
              label="Nomor Telepon"
              placeholder="08123456789"
              type="tel"
              startIcon={<img src={imgPhoneIcon} alt="Phone" className="w-5 h-5" />}
            />
            
            <Input
              label="Password"
              placeholder="Minimal 6 karakter"
              type={showPassword ? "text" : "password"}
              startIcon={<img src={imgLockIcon} alt="Password" className="w-5 h-5" />}
              endIcon={
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="focus:outline-none cursor-pointer"
                >
                  <img src={imgEyeIcon} alt="Toggle Password" className="w-5 h-5" />
                </button>
              }
            />

            <Input
              label="Konfirmasi Password"
              placeholder="Ketik ulang password"
              type={showConfirmPassword ? "text" : "password"}
              startIcon={<img src={imgLockIcon} alt="Password" className="w-5 h-5" />}
              endIcon={
                <button 
                  type="button" 
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="focus:outline-none cursor-pointer"
                >
                  <img src={imgEyeIcon} alt="Toggle Password" className="w-5 h-5" />
                </button>
              }
            />

            <Button 
              fullWidth 
              startIcon={<img src={imgArrowIcon} alt="" className="w-5 h-5" />}
              className="mt-4"
            >
              Daftar Sekarang
            </Button>
          </form>

          <div className="text-center">
            <p className="text-[#4a5565] text-base font-normal inline">
              Sudah punya akun?{' '}
            </p>
            <Link href="/login" className="text-[#009966] text-base font-normal hover:underline">
              Login di sini
            </Link>
          </div>

        </AuthCard>

        {/* Back Link */}
        <Link href="/" className="mt-8 text-[#4a5565] text-sm font-normal hover:text-[#101828] transition-colors">
          ← Kembali ke Beranda
        </Link>

      </div>
    </AuthBackground>
  );
}
