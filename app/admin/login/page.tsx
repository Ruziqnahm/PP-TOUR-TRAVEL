'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AdminAuthBackground } from '@/components/admin/AdminAuthBackground';
import { AdminAuthCard } from '@/components/admin/AdminAuthCard';
import { AdminFormInput } from '@/components/admin/AdminFormInput';
import { AdminButton } from '@/components/admin/AdminButton';
import { AdminLogo } from '@/components/admin/AdminLogo';

const imgBackground = "https://www.figma.com/api/mcp/asset/c5bf5c22-8840-44d0-849a-3838369f662a";
const imgLogo = "https://www.figma.com/api/mcp/asset/92cccf20-1d52-42eb-99a0-975196af0d38";

export default function AdminLoginPage() {
  const router = useRouter();
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

    try {
      // TODO: Implement admin authentication logic
      console.log('Admin Login:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect to admin dashboard after successful login
      // router.push('/admin/dashboard');
      
      alert('Login admin berhasil! (Fitur masih dalam pengembangan)');
    } catch (error) {
      console.error('Login error:', error);
      alert('Terjadi kesalahan saat login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AdminAuthBackground backgroundImage={imgBackground}>
      <AdminAuthCard>
        {/* Logo and Title - Centered at Top */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[46px] flex flex-col items-center">
          <AdminLogo logoImage={imgLogo} />
        </div>

        {/* Login Title - Centered */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[200px] font-extrabold text-[56.07px] text-black leading-normal whitespace-nowrap">
          Login
        </div>

        {/* Login Form - Centered */}
        <form onSubmit={handleSubmit} className="absolute left-1/2 -translate-x-1/2 top-[280px] w-[391.32px]">
          <div className="flex flex-col gap-[18.69px]">
            {/* Email Input */}
            <AdminFormInput
              label="Email"
              type="email"
              placeholder="Masukkan alamat E-mail anda"
              value={formData.email}
              onChange={(value) => setFormData({ ...formData, email: value })}
              error={errors.email}
            />

            {/* Password Input */}
            <AdminFormInput
              label="Password"
              type="password"
              placeholder="Masukkan Password anda"
              value={formData.password}
              onChange={(value) => setFormData({ ...formData, password: value })}
              error={errors.password}
              showPasswordToggle={true}
            />

            {/* Login Button */}
            <div className="mt-[30px]">
              <AdminButton type="submit" disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Login'}
              </AdminButton>
            </div>
          </div>
        </form>
      </AdminAuthCard>
    </AdminAuthBackground>
  );
}
