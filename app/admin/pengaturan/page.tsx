'use client';

import AdminSidebar from '@/components/admin/AdminSidebar';
import { ProfileSection } from '@/components/admin/ProfileSection';
import { UserManagementTable } from '@/components/admin/UserManagementTable';

export default function PengaturanPage() {
  // Sample user data - akan diganti dengan data dari API
  const users = [
    {
      id: '1',
      name: 'Ruziqna Muhtarom',
      email: 'ruziqna.muhtarom23@student.usi.ac.id',
      username: 'ruziqna',
      joinDate: '08 Des 2025',
      role: 'admin' as const,
      avatarColor: '#ad46ff',
      avatarInitials: 'RM',
    },
    {
      id: '2',
      name: 'andri darmawan',
      email: 'jamansaribulan75@gmail.com',
      username: 'andri',
      joinDate: '07 Des 2025',
      role: 'admin' as const,
      avatarColor: '#6a7282',
      avatarInitials: 'AD',
    },
    {
      id: '3',
      name: 'Muhammad Fakhrudin',
      email: 'muhammad.fakhrudin23@student.usi.ac.id',
      username: 'fakhrudin',
      joinDate: '07 Des 2025',
      role: 'admin' as const,
      avatarColor: '#2b7fff',
      avatarInitials: 'MF',
    },
    {
      id: '4',
      name: 'test acc',
      email: 'ki3ws@comifythings.com',
      username: 'testacc1',
      joinDate: '06 Des 2025',
      role: 'user' as const,
      avatarColor: '#fe9a00',
      avatarInitials: 'TA',
    },
    {
      id: '5',
      name: 'Ragil Cahyadi',
      email: 'ragilcahyadi@gmail.com',
      username: 'ragilcahyadi',
      joinDate: '06 Des 2025',
      role: 'admin' as const,
      avatarColor: '#00bba7',
      avatarInitials: 'RC',
    },
  ];

  const handlePromote = (userId: string) => {
    console.log('Promote user:', userId);
    // Implementasi promosi user ke admin
  };

  const handleDemote = (userId: string) => {
    console.log('Demote admin:', userId);
    // Implementasi demosi admin ke user
  };

  const handleBan = (userId: string) => {
    console.log('Ban user:', userId);
    // Implementasi ban user
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6]">
      {/* Sidebar */}
      <AdminSidebar activePage="pengaturan" />

      {/* Main Content */}
      <div className="ml-[256px] flex-1 p-[21px] overflow-y-auto">
        {/* Header */}
        <div className="mb-[24px]">
          <h1 className="text-[36px] leading-[40px] font-bold text-[#101828] tracking-[-0.72px]">
            Pengaturan Profil
          </h1>
          <p className="text-[16px] leading-[25.6px] text-[#6a7282] mt-[4px]">
            Kelola profil, keamanan, dan preferensi akun Anda
          </p>
        </div>

        {/* Profile Section */}
        <div className="mb-[24px]">
          <ProfileSection />
        </div>

        {/* User Management Section */}
        <div>
          <UserManagementTable
            users={users}
            onPromote={handlePromote}
            onDemote={handleDemote}
            onBan={handleBan}
          />
        </div>
      </div>
    </div>
  );
}
