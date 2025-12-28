'use client';

import React from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { AuthBackground } from '@/components/ui/AuthBackground';
import { AuthCard } from '@/components/ui/AuthCard';

// Assets from Figma
const imgLogo = "https://www.figma.com/api/mcp/asset/5d9ee646-ffce-41b4-b662-a1129b0e519b";
const imgEmailIcon = "https://www.figma.com/api/mcp/asset/f3ac9e41-06dd-434d-a871-8935018b354a";

export default function ForgotPasswordPage() {
  return (
    <AuthBackground logoSrc={imgLogo}>
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        
        {/* Header Text */}
        <div className="text-center mb-8">
          <h1 className="font-bold text-[#101828] text-[40px] leading-[48px] mb-4">
            Lupa Password
          </h1>
          <p className="font-normal text-[#4a5565] text-[16px] leading-[25.6px]">
            We'll send you a verification link
          </p>
        </div>

        {/* Forgot Password Card */}
        <AuthCard className="flex flex-col gap-6">
          
          <form className="flex flex-col gap-4 w-full" onSubmit={(e) => e.preventDefault()}>
            <Input
              label="EMAIL"
              placeholder="nama@email.com"
              type="email"
              startIcon={<img src={imgEmailIcon} alt="Email" className="w-5 h-5" />}
              containerClassName="w-full"
            />
            
            <p className="text-[#4a5565] text-base font-normal text-center">
              Masukkan Valid Email
            </p>

            <Button fullWidth className="mt-2">
              Send Link
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
