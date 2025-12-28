'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { AuthBackground } from '@/components/ui/AuthBackground';
import { AuthCard } from '@/components/ui/AuthCard';

// Assets from Figma
const imgLogo = "https://www.figma.com/api/mcp/asset/f3551fc6-7971-43dc-aba5-7b89d72d9a48";
const imgLockIcon = "https://www.figma.com/api/mcp/asset/af0cb87f-1180-4b83-8393-05104000321a";

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <AuthBackground logoSrc={imgLogo}>
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        
        {/* Header Text */}
        <div className="text-center mb-8">
          <h1 className="font-bold text-[#101828] text-[40px] leading-[48px] mb-4">
            Reset Password
          </h1>
          <p className="font-normal text-[#4a5565] text-[16px] leading-[25.6px]">
            Masukkan kata sandi baru Anda
          </p>
        </div>

        {/* Reset Password Card */}
        <AuthCard className="flex flex-col gap-6">
          
          <form className="flex flex-col gap-4 w-full" onSubmit={(e) => e.preventDefault()}>
            <Input
              label="PASSWORD BARU"
              placeholder="Silakan masukkan kata sandi baru Anda"
              type={showPassword ? "text" : "password"}
              startIcon={<img src={imgLockIcon} alt="Password" className="w-5 h-5" />}
              containerClassName="w-full"
            />
            
            <Input
              label="KONFIRMASI PASSWORD BARU"
              placeholder="Silakan konfirmasi kata sandi baru Anda"
              type={showConfirmPassword ? "text" : "password"}
              startIcon={<img src={imgLockIcon} alt="Password" className="w-5 h-5" />}
              containerClassName="w-full"
            />

            <Input
              label="MASUKKAN RESET CODE"
              placeholder="Silakan masukkan kode yang di peroleh pada email"
              type="text"
              startIcon={<img src={imgLockIcon} alt="Code" className="w-5 h-5" />}
              containerClassName="w-full"
            />

            <Button fullWidth className="mt-2">
              Reset Password
            </Button>
          </form>

        </AuthCard>

        {/* Back Link */}
        <Link href="/" className="mt-8 text-[#4a5565] text-sm font-normal hover:text-[#101828] transition-colors">
          ← Kembali ke Beranda
        </Link>

      </div>
    </AuthBackground>
  );
}
