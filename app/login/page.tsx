'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Checkbox } from '@/components/ui/Checkbox';

const imgLogo = "https://www.figma.com/api/mcp/asset/1e7302c5-b9b5-42ba-acf0-859b1e104713";
const imgEmailIcon = "https://www.figma.com/api/mcp/asset/a6a09067-cc3f-4186-97be-51246fa67b80";
const imgLockIcon = "https://www.figma.com/api/mcp/asset/3536e1be-3254-43b6-9587-e5be405bf7b0";
const imgEyeIcon = "https://www.figma.com/api/mcp/asset/7907b28d-d719-4723-b639-40bdfc9c52b0";
const imgLoginIcon = "https://www.figma.com/api/mcp/asset/eb121829-50af-40da-9112-a737abe2e693";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {
      email: '',
      password: '',
    };
    
    let isValid = true;

    if (!formData.email) {
      newErrors.email = 'Email wajib diisi';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password wajib diisi';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password minimal 6 karakter';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Login attempt:', { ...formData, rememberMe });
      router.push('/paket-tour');
      setIsLoading(false);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#ecfdf5] via-white to-[#eff6ff]">
      {/* Decorative background blurs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-20 -top-10 w-[347px] h-[347px] bg-[#00d492] rounded-full blur-3xl opacity-50" />
        <div className="absolute right-32 -top-3 w-[382px] h-[382px] bg-[#51a2ff] rounded-full blur-3xl opacity-50" />
        <div className="absolute left-24 bottom-96 w-[421px] h-[421px] bg-[#c27aff] rounded-full blur-3xl opacity-50" />
        <div className="absolute -left-14 -top-36 w-[556px] h-[556px] rotate-[152deg]">
          <div className="w-[412px] h-[412px] bg-[#46ecd5] rounded-full blur-2xl opacity-40" />
        </div>
        <div className="absolute left-[532px] top-[407px] w-[394px] h-[394px] rotate-[105deg]">
          <div className="w-[322px] h-[322px] bg-[#a3b3ff] rounded-full blur-2xl opacity-40" />
        </div>
        <div className="absolute left-[483px] top-[265px] w-[603px] h-[603px] rotate-[35deg]">
          <div className="w-[433px] h-[433px] bg-[#fda5d5] rounded-full blur-2xl opacity-40" />
        </div>
        <div className="absolute left-[580px] top-[327px] w-[245px] h-[245px] bg-[#5ee9b5] rounded-full blur-xl opacity-30" />
        <div className="absolute right-48 bottom-[486px] w-[215px] h-[215px] bg-[#53eafd] rounded-full blur-xl opacity-30" />
        <div className="absolute left-[417px] bottom-[340px] w-[230px] h-[230px] bg-[#c4b4ff] rounded-full blur-xl opacity-30" />
        <div className="absolute right-[575px] top-5 w-[199px] h-[199px] bg-[#a4f4cf] rounded-full blur-xl opacity-35" />
        <div className="absolute left-[641px] bottom-[304px] w-[216px] h-[216px] bg-[#bedbff] rounded-full blur-xl opacity-35" />
        <div className="absolute left-12 top-[454px] w-[182px] h-[182px] bg-[#e9d4ff] rounded-full blur-xl opacity-35" />
        <div className="absolute left-[419px] top-20 w-[129px] h-[129px] bg-[#00d5be] rounded-full blur-lg opacity-[0.417]" />
        <div className="absolute right-20 top-[308px] w-[173px] h-[173px] bg-[#7c86ff] rounded-full blur-lg opacity-[0.564]" />
        <div className="absolute left-[552px] bottom-[425px] w-[157px] h-[157px] bg-[#fb64b6] rounded-full blur-lg opacity-[0.583]" />
        <div className="absolute right-96 bottom-[247px] w-[130px] h-[130px] bg-[#00d3f3] rounded-full blur-lg opacity-[0.436]" />
      </div>

      {/* Logo */}
      <div className="absolute left-12 top-10 w-[149px] h-[206px] z-10">
        <img 
          src={imgLogo} 
          alt="PP Tour Travel" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-[448px]">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-[40px] font-bold text-[#101828] leading-[48px] mb-2">
              Selamat Datang Kembali
            </h1>
            <p className="text-[16px] text-[#4a5565] leading-[25.6px]">
              Login untuk melanjutkan perjalanan Anda
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white/80 backdrop-blur-sm border-2 border-white/50 rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div className="space-y-2">
                <label className="block text-sm text-[#364153]">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none">
                    <img src={imgEmailIcon} alt="" className="w-full h-full" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="nama@email.com"
                    className="w-full h-[52px] pl-12 pr-4 py-3 bg-white border-2 border-[#e5e7eb] rounded-[16.4px] text-[16px] text-[#0a0a0a] placeholder:text-[rgba(10,10,10,0.5)] focus:outline-none focus:border-[#00bc7d] transition-colors"
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <label className="block text-sm text-[#364153]">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none">
                    <img src={imgLockIcon} alt="" className="w-full h-full" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Masukkan password"
                    className="w-full h-[52px] pl-12 pr-12 py-3 bg-white border-2 border-[#e5e7eb] rounded-[16.4px] text-[16px] text-[#0a0a0a] placeholder:text-[rgba(10,10,10,0.5)] focus:outline-none focus:border-[#00bc7d] transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer"
                  >
                    <img src={imgEyeIcon} alt="Toggle password" className="w-full h-full" />
                  </button>
                </div>
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password}</p>
                )}
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <Checkbox
                  id="remember-me"
                  label="Ingat saya"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <Link 
                  href="/forgot-password"
                  className="text-sm text-[#009966] hover:text-[#00bc7d] transition-colors"
                >
                  Lupa password?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-gradient-to-r from-[#00bc7d] to-[#009966] rounded-[16.4px] text-white text-[16px] font-medium flex items-center justify-center gap-2 hover:from-[#00a970] hover:to-[#008857] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <img src={imgLoginIcon} alt="" className="w-5 h-5" />
                {isLoading ? 'Loading...' : 'Login'}
              </button>
            </form>

            {/* Sign Up Link */}
            <p className="text-center text-[16px] text-[#4a5565] mt-8">
              Belum punya akun?{' '}
              <Link 
                href="/register"
                className="text-[#009966] hover:text-[#00bc7d] transition-colors"
              >
                Daftar sekarang
              </Link>
            </p>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-6">
            <Link 
              href="/"
              className="text-sm text-[#4a5565] hover:text-[#364153] transition-colors inline-block"
            >
              ← Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
