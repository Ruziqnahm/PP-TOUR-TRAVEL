'use client';

import AdminSidebar from '@/components/admin/AdminSidebar';
import { StatsCard } from '@/components/admin/StatsCard';
import { BookingList } from '@/components/admin/BookingList';
import { DepartureCard } from '@/components/admin/DepartureCard';

export default function AdminDashboardPage() {
  // Sample data - akan diganti dengan data dari API
  const statsData = [
    {
      icon: 'https://www.figma.com/api/mcp/asset/e16ec824-7b4d-40c1-9577-b1cebf4ab577',
      title: 'Booking Bulan Ini',
      value: '24',
      trend: '+15% dari bulan lalu',
      trendType: 'up' as const,
      gradientFrom: '#2b7fff',
      gradientTo: '#155dfc',
    },
    {
      icon: 'https://www.figma.com/api/mcp/asset/60e188d5-aa63-4f85-8ba4-3c86c33d6674',
      title: 'Pendapatan Bulan Ini',
      value: 'Rp 72,5 jt',
      trend: '+25% dari bulan lalu',
      trendType: 'up' as const,
      gradientFrom: '#00bc7d',
      gradientTo: '#009966',
    },
    {
      icon: 'https://www.figma.com/api/mcp/asset/1f580d7d-6c83-4420-b957-d21c774bf920',
      title: 'Menunggu Verifikasi',
      value: '3',
      trend: 'Perlu perhatian',
      trendType: 'warning' as const,
      gradientFrom: '#fe9a00',
      gradientTo: '#e17100',
    },
    {
      icon: 'https://www.figma.com/api/mcp/asset/4661533c-1111-49fc-8724-30d1f9457682',
      title: 'Keberangkatan Minggu Ini',
      value: '7',
      trend: '2 hari ini',
      trendType: 'neutral' as const,
      gradientFrom: '#ad46ff',
      gradientTo: '#9810fa',
    },
  ];

  const bookingsData = [
    {
      name: 'Sigit',
      packageName: 'Paket Bali Ekonomis',
      persons: 2,
      time: '10 menit lalu',
      bookingId: 'BHRS937',
      status: 'pending' as const,
    },
    {
      name: 'Dewi Kusuma',
      packageName: 'Paket Yogyakarta Premium',
      persons: 3,
      time: '1 jam lalu',
      bookingId: 'DEWK123',
      status: 'confirmed' as const,
    },
    {
      name: 'Bambang',
      packageName: 'Paket Bali Premium',
      persons: 4,
      time: '2 jam lalu',
      bookingId: 'BAMH760',
      status: 'confirmed' as const,
    },
  ];

  const departuresData = [
    {
      packageName: 'Bali 5D4N',
      date: 'Hari Ini',
      time: '08:00',
      persons: 10,
      status: 'today' as const,
    },
    {
      packageName: 'Bromo 3D2N',
      date: 'Besok',
      time: '05:00',
      persons: 8,
      status: 'today' as const,
    },
    {
      packageName: 'Yogyakarta 4D3N',
      date: '8 Des',
      time: '07:00',
      persons: 6,
      status: 'upcoming' as const,
    },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6]">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="ml-[256px] flex-1 p-[32px] overflow-y-auto">
        {/* Header */}
        <div className="mb-[24px]">
          <h1 className="text-[36px] leading-[40px] font-bold text-[#101828] tracking-[-0.72px]">
            Dashboard Overview
          </h1>
          <p className="text-[16px] leading-[25.6px] text-[#6a7282] mt-[4px]">
            Selamat datang kembali, Admin! 👋
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-[24px] mb-[24px]">
          {statsData.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-12 gap-[24px] mb-[24px]">
          {/* Trend Booking Chart */}
          <div className="col-span-8 bg-white border border-[#f3f4f6] rounded-[16px] p-[24px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
            <h3 className="text-[20px] leading-[28px] font-semibold text-[#101828] mb-[24px]">
              Trend Booking 7 Bulan Terakhir
            </h3>
            <div className="h-[300px] flex items-center justify-center text-[#6a7282]">
              {/* Placeholder untuk chart - akan diganti dengan library charting seperti Recharts */}
              <p>Chart akan ditampilkan di sini</p>
            </div>
          </div>

          {/* Status Pembayaran */}
          <div className="col-span-4 bg-white border border-[#f3f4f6] rounded-[16px] p-[25px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
            <h3 className="text-[20px] leading-[28px] font-semibold text-[#101828] mb-[24px]">
              Status Pembayaran
            </h3>
            <div className="h-[200px] flex items-center justify-center text-[#6a7282] mb-[16px]">
              {/* Placeholder untuk donut chart */}
              <p>Donut Chart</p>
            </div>
            <div className="flex flex-col gap-[8px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[8px]">
                  <div className="w-[12px] h-[12px] rounded-full bg-[#10b981]" />
                  <p className="text-[14px] leading-[20px] text-[#4a5565]">Sudah Dibayar</p>
                </div>
                <p className="text-[14px] leading-[20px] text-[#101828]">21</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[8px]">
                  <div className="w-[12px] h-[12px] rounded-full bg-[#f59e0b]" />
                  <p className="text-[14px] leading-[20px] text-[#4a5565]">Menunggu Verifikasi</p>
                </div>
                <p className="text-[14px] leading-[20px] text-[#101828]">3</p>
              </div>
            </div>
          </div>
        </div>

        {/* Paket Tour Terpopuler */}
        <div className="bg-white border border-[#f3f4f6] rounded-[16px] p-[25px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] mb-[24px]">
          <h3 className="text-[20px] leading-[28px] font-semibold text-[#101828] mb-[24px]">
            Paket Tour Terpopuler Bulan Ini
          </h3>
          <div className="h-[250px] flex items-center justify-center text-[#6a7282]">
            {/* Placeholder untuk horizontal bar chart */}
            <p>Horizontal Bar Chart akan ditampilkan di sini</p>
          </div>
        </div>

        {/* Bottom Section - Booking Terbaru & Keberangkatan */}
        <div className="grid grid-cols-12 gap-[24px]">
          {/* Booking Terbaru */}
          <div className="col-span-7">
            <BookingList bookings={bookingsData} />
          </div>

          {/* Keberangkatan Terdekat */}
          <div className="col-span-5">
            <DepartureCard departures={departuresData} />
          </div>
        </div>
      </div>
    </div>
  );
}
