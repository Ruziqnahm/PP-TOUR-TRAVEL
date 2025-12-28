'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const imgLogo = "https://www.figma.com/api/mcp/asset/e4d54c3b-4020-427a-a3b5-4abca2e17a75";

interface MenuItemProps {
  icon: string;
  label: string;
  href: string;
  active?: boolean;
}

function MenuItem({ icon, label, href, active }: MenuItemProps) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-[12px] h-[48px] px-[16px] rounded-[16.4px] cursor-pointer transition-all ${
        active
          ? 'bg-white shadow-[0px_10px_15px_-3px_rgba(0,79,59,0.2),0px_4px_6px_-4px_rgba(0,79,59,0.2)]'
          : 'hover:bg-white/10'
      }`}
    >
      <div className="w-[20px] h-[20px] shrink-0">
        <img src={icon} alt="" className="w-full h-full" />
      </div>
      <p
        className={`text-[16px] leading-[24px] font-semibold ${
          active ? 'text-[#007a55]' : 'text-[#ecfdf5]'
        }`}
      >
        {label}
      </p>
    </Link>
  );
}

interface AdminSidebarProps {
  activePage?: string;
}

export default function AdminSidebar({ activePage }: AdminSidebarProps) {
  const pathname = usePathname();

  const menuItems = [
    {
      icon: 'https://www.figma.com/api/mcp/asset/f4214e24-b97f-4d7d-af07-cf51b2c536a4',
      label: 'Dashboard',
      href: '/admin/dashboard',
      key: 'dashboard'
    },
    {
      icon: 'https://www.figma.com/api/mcp/asset/b2134318-5538-48e3-879a-219eb7df0c57',
      label: 'Paket',
      href: '/admin/paket',
      key: 'paket'
    },
    {
      icon: 'https://www.figma.com/api/mcp/asset/d7614f52-c99e-4d07-b9e4-348f5842103a',
      label: 'Pemesanan',
      href: '/admin/pemesanan',
      key: 'pemesanan'
    },
    {
      icon: 'https://www.figma.com/api/mcp/asset/70a4b252-1d0a-4947-a30f-b1cd61c6baf5',
      label: 'Pembayaran',
      href: '/admin/verifikasi-pembayaran',
      key: 'pembayaran'
    },
    {
      icon: 'https://www.figma.com/api/mcp/asset/d82ac62f-ed4d-43b5-bb2b-1ba4f280b9e8',
      label: 'Penjadwalan',
      href: '/admin/penjadwalan',
      key: 'penjadwalan'
    },
    {
      icon: 'https://www.figma.com/api/mcp/asset/86ac9ed5-669c-4b01-b4c9-0137e572e7f3',
      label: 'Pengaturan',
      href: '/admin/pengaturan',
      key: 'pengaturan'
    },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-[256px] bg-gradient-to-b from-[#009966] via-[#007a55] to-[#006045] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] flex flex-col">
      {/* Header Logo */}
      <div className="border-b border-[rgba(0,188,125,0.3)] px-[24px] pt-[32px] pb-[24px]">
        <div className="bg-gradient-to-b from-[#16a34a] to-[#15803d] rounded-[20px] p-[20px] shadow-lg">
          {/* Logo Container */}
          <div className="flex flex-col items-center gap-[8px]">
            {/* Logo Icon */}
            <div className="relative w-[70px] h-[70px]">
              <img
                src={imgLogo}
                alt="PP Tour Travel Logo"
                className="w-full h-full object-contain drop-shadow-md"
              />
            </div>
            
            {/* Company Name */}
            <div className="flex flex-col items-center gap-[4px]">
              <h1 className="font-['Poppins'] font-extrabold text-[18px] leading-tight text-white tracking-tight">
                PP TOUR TRAVEL
              </h1>
              <p className="text-[13px] leading-tight text-white/90 font-medium">
                Dashboard
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="flex-1 px-[16px] pt-[14.8px] overflow-y-auto">
        <div className="flex flex-col gap-[3.41px]">
          {menuItems.map((item) => (
            <MenuItem
              key={item.href}
              icon={item.icon}
              label={item.label}
              href={item.href}
              active={activePage ? activePage === item.key : pathname === item.href}
            />
          ))}
        </div>
      </div>

      {/* Logout Button */}
      <div className="h-[81px] border-t border-[rgba(0,188,125,0.3)] px-[16px] pt-[17px]">
        <button className="flex items-center gap-[12px] h-[48px] px-[16px] rounded-[16.4px] w-full hover:bg-white/10 transition-all">
          <div className="w-[20px] h-[20px] shrink-0">
            <img
              src="https://www.figma.com/api/mcp/asset/c95095f7-1d5b-438c-9042-fd055b80b80e"
              alt=""
              className="w-full h-full"
            />
          </div>
          <p className="text-[16px] leading-[24px] text-[#ecfdf5]">Keluar</p>
        </button>
      </div>
    </div>
  );
}
