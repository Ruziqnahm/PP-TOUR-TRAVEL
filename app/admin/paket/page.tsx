'use client';

import AdminSidebar from '@/components/admin/AdminSidebar';
import { useState } from 'react';
import TambahPaketModal from '@/components/admin/TambahPaketModal';
import EditPackageModal from '@/components/admin/EditPackageModal';
import DeleteConfirmationModal from '@/components/admin/DeleteConfirmationModal';
import { EmptySearch, EmptyData } from '@/components/ui/EmptyState';

export default function AdminPaketPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('Semua Tipe');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [packageToDelete, setPackageToDelete] = useState<string | null>(null);
  const [filteredPackages, setFilteredPackages] = useState<typeof packagesData>([]);

  // Sample stats data from Figma
  const statsData = [
    {
      icon: 'https://www.figma.com/api/mcp/asset/bba4bc65-cac2-49ea-987a-3b7203db6811',
      label: 'Total Paket',
      value: '5',
      bgColor: '#d0fae5',
    },
    {
      icon: 'https://www.figma.com/api/mcp/asset/12fe3c92-b74c-480c-a396-4b110e009320',
      label: 'Avg. Harga',
      value: 'Rp 976K',
      bgColor: '#dbeafe',
    },
    {
      icon: 'https://www.figma.com/api/mcp/asset/8cd6167b-999f-43e8-b2a7-840a7304fc1d',
      label: 'Premium',
      value: '2',
      bgColor: '#f3e8ff',
    },
    {
      icon: 'https://www.figma.com/api/mcp/asset/c6a09679-6ac9-4812-b5d5-d35801f13821',
      label: 'Ekonomis',
      value: '3',
      bgColor: '#ffedd4',
    },
  ];

  // Sample packages data from Figma
  const packagesData = [
    {
      id: '1',
      image: 'https://www.figma.com/api/mcp/asset/c57a4334-eb9f-44f2-9bf7-762fc0ff2264',
      title: 'Paket Bali Premium',
      location: 'Bali, Indonesia',
      duration: '4 Hari 2 Malam',
      minPerson: 'Min. 50 orang',
      price: 'Rp 1.450.000',
      type: 'Premium' as const,
    },
    {
      id: '2',
      image: 'https://www.figma.com/api/mcp/asset/d91a0b19-3223-420d-9675-0c7b0661819f',
      title: 'Paket Bali Ekonomis',
      location: 'Bali, Indonesia',
      duration: '3 Hari 1 Malam',
      minPerson: 'Min. 30 orang',
      price: 'Rp 1.000.000',
      type: 'Ekonomis' as const,
    },
    {
      id: '3',
      image: 'https://www.figma.com/api/mcp/asset/aa68f7e3-4210-4c0a-9397-9f474766678b',
      title: 'Paket Yogyakarta Premium',
      location: 'Yogyakarta, Indonesia',
      duration: '2 Hari 1 Malam',
      minPerson: 'Min. 40 orang',
      price: 'Rp 750.000',
      type: 'Premium' as const,
    },
    {
      id: '4',
      image: 'https://www.figma.com/api/mcp/asset/b76d4b50-f416-46e3-b4ac-aa676d82cc64',
      title: 'Paket Yogyakarta Ekonomis',
      location: 'Yogyakarta, Indonesia',
      duration: '2 Hari 1 Malam',
      minPerson: 'Min. 25 orang',
      price: 'Rp 690.000',
      type: 'Ekonomis' as const,
    },
    {
      id: '5',
      image: 'https://www.figma.com/api/mcp/asset/029fea83-2f5a-443d-b035-fac664ad5493',
      title: 'Paket Bandung Ekonomis',
      location: 'Bandung, Indonesia',
      duration: '3 Hari 1 Malam',
      minPerson: 'Min. 35 orang',
      price: 'Rp 990.000',
      type: 'Ekonomis' as const,
    },
  ];

  const handleEdit = (id: string) => {
    const pkg = packagesData.find(p => p.id === id);
    if (pkg) {
      setSelectedPackage({
        id: pkg.id,
        name: pkg.title,
        duration: pkg.duration,
        type: pkg.type,
        price: pkg.price.replace(/[^0-9]/g, ''),
        location: pkg.location,
        image: 'bali.jpg',
        image2: 'kecak.jpg',
        minPax: pkg.minPerson.replace(/[^0-9]/g, ''),
        facilities: '1. Transportasi Big Bus Pariwisata Terbaru, Kapal Ferry (Ketapang - Gilimanuk PP)\n2. Makan Prasmanan 8x\n3. Hotel Bintang 3x, Snack Box 1x & Air Mineral, etc'
      });
      setIsEditModalOpen(true);
    }
  };

  const handleDelete = (id: string) => {
    setPackageToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (packageToDelete) {
      console.log('Deleting package:', packageToDelete);
      // TODO: Implement API call to delete package
      // After successful deletion, update the packages list
      setPackageToDelete(null);
    }
  };

  const handleAddPackage = () => {
    setIsModalOpen(true);
  };

  // Filter logic
  const getFilteredPackages = () => {
    let filtered = packagesData;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(pkg => 
        pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by type
    if (filterType !== 'Semua Tipe') {
      filtered = filtered.filter(pkg => pkg.type === filterType);
    }

    return filtered;
  };

  const displayedPackages = getFilteredPackages();

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6]">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="ml-[256px] flex-1 p-[21px] pt-[32px] overflow-y-auto max-w-[1256px]">
        {/* Header */}
        <div className="flex items-center justify-between mb-[24px]">
          <div>
            <h1 className="text-[36px] leading-[40px] font-['Segoe_UI'] font-bold text-[#101828] tracking-[-0.72px]">
              Kelola Paket Tour Travel
            </h1>
            <p className="text-[16px] leading-[25.6px] font-['Segoe_UI'] text-[#6a7282] mt-[4px]">
              Manage semua paket wisata Anda
            </p>
          </div>

          {/* Add Package Button */}
          <button
            onClick={handleAddPackage}
            className="bg-gradient-to-r from-[#009966] to-[#00bc7d] h-[48px] px-[24px] rounded-[16.4px] flex items-center gap-[8px] text-white hover:opacity-90 transition-opacity"
          >
            <img
              src="https://www.figma.com/api/mcp/asset/7d656c9d-1658-49b3-a664-586014d8d923"
              alt=""
              className="w-[20px] h-[20px]"
            />
            <span className="text-[16px] leading-[24px] font-['Segoe_UI']">Tambah Paket</span>
          </button>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white border border-[#f3f4f6] rounded-[16px] p-[25px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] mb-[24px]">
          <div className="flex items-center gap-[12px]">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <img
                src="https://www.figma.com/api/mcp/asset/7d103ffd-9fe2-4575-962a-51db599b2bd7"
                alt="Search"
                className="absolute left-[16px] top-1/2 -translate-y-1/2 w-[20px] h-[20px]"
              />
              <input
                type="text"
                placeholder="Cari paket tour berdasarkan nama atau destinasi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-[50px] pl-[48px] pr-[16px] border border-[#e5e7eb] rounded-[16.4px] text-[16px] font-['Segoe_UI'] text-[#0a0a0a] placeholder:text-[rgba(10,10,10,0.5)] focus:border-[#009966] focus:outline-none transition-colors"
              />
            </div>

            {/* Filter Dropdown */}
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="border border-[#e5e7eb] h-[50px] px-[17px] rounded-[16.4px] text-[16px] font-['Segoe_UI'] text-[#0a0a0a] outline-none cursor-pointer hover:border-[#009966] transition-colors min-w-[150px] appearance-none bg-white"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%23364153' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 17px center',
              }}
            >
              <option>Semua Tipe</option>
              <option>Premium</option>
              <option>Ekonomis</option>
            </select>

            {/* Filter Button */}
            <button className="border border-[#e5e7eb] h-[50px] px-[17px] rounded-[16.4px] flex items-center gap-[8px] hover:border-[#009966] transition-colors">
              <img
                src="https://www.figma.com/api/mcp/asset/03073de3-fcb3-424f-b3dc-7009c2a030ee"
                alt="Filter"
                className="w-[20px] h-[20px]"
              />
              <span className="text-[16px] leading-[24px] font-['Segoe_UI'] text-[#364153]">Filter</span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-[16px] mb-[24px]">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="bg-white border border-[#f3f4f6] rounded-[16.4px] p-[17px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]"
            >
              <div className="flex items-center gap-[12px]">
                <div
                  className="w-[40px] h-[40px] rounded-[10px] flex items-center justify-center"
                  style={{ backgroundColor: stat.bgColor }}
                >
                  <img src={stat.icon} alt="" className="w-[20px] h-[20px]" />
                </div>
                <div>
                  <p className="text-[16px] leading-[25.6px] font-['Segoe_UI'] text-[#6a7282]">
                    {stat.label}
                  </p>
                  <p className="text-[16px] leading-[25.6px] font-['Segoe_UI'] text-[#101828]">
                    {stat.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Package Cards Grid */}
        {displayedPackages.length > 0 ? (
          <div className="grid grid-cols-3 gap-[24px]">
            {displayedPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white border border-[#f3f4f6] rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] overflow-hidden"
              >
                {/* Package Image */}
                <div className="relative h-[192px] overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Type Badge */}
                  <div
                    className={`absolute top-[10px] right-[14px] px-[13px] py-[7px] rounded-full border text-white text-[12px] leading-[16px] font-['Segoe_UI'] ${
                      pkg.type === 'Premium'
                        ? 'bg-[rgba(254,154,0,0.9)] border-[#ffb900]'
                        : 'bg-[rgba(43,127,255,0.9)] border-[#51a2ff]'
                    }`}
                  >
                    {pkg.type}
                  </div>
                </div>

                {/* Package Info */}
                <div className="p-[20px]">
                  <div className="mb-[16px]">
                    <h3 className="text-[20px] leading-[28px] font-['Segoe_UI'] font-semibold text-[#101828] mb-[8px]">
                      {pkg.title}
                    </h3>
                    <div className="flex items-center gap-[8px]">
                      <img
                        src="https://www.figma.com/api/mcp/asset/ff3a1cbe-cc61-40db-9188-c1ba01f8167a"
                        alt="Location"
                        className="w-[16px] h-[16px]"
                      />
                      <span className="text-[14px] leading-[20px] font-['Segoe_UI'] text-[#6a7282]">
                        {pkg.location}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-[12px] mb-[16px]">
                    <div className="flex items-center gap-[8px]">
                      <img
                        src="https://www.figma.com/api/mcp/asset/e4a09c1a-6781-4c65-b4bb-456b458fded4"
                        alt="Duration"
                        className="w-[16px] h-[16px]"
                      />
                      <span className="text-[14px] leading-[20px] font-['Segoe_UI'] text-[#4a5565]">
                        {pkg.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-[8px]">
                      <img
                        src="https://www.figma.com/api/mcp/asset/e9c8f0b8-4316-4f0f-adcb-e01223dad6f5"
                        alt="Minimum Person"
                        className="w-[16px] h-[16px]"
                      />
                      <span className="text-[14px] leading-[20px] font-['Segoe_UI'] text-[#4a5565]">
                        {pkg.minPerson}
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-[#f3f4f6] pt-[16px] flex items-center justify-between">
                    <div>
                      <p className="text-[16px] leading-[25.6px] font-['Segoe_UI'] text-[#6a7282]">
                        Mulai dari
                      </p>
                      <p className="text-[16px] leading-[25.6px] font-['Segoe_UI'] text-[#009966]">
                        {pkg.price}
                      </p>
                    </div>
                    <div className="flex items-center gap-[8px]">
                      {/* Edit Button */}
                      <button
                        onClick={() => handleEdit(pkg.id)}
                        className="w-[36px] h-[36px] rounded-[16.4px] bg-[#ecfdf5] flex items-center justify-center hover:bg-[#d0fae5] transition-colors"
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.3333 2.00004C11.5083 1.82494 11.7163 1.68605 11.9451 1.59129C12.1738 1.49653 12.4187 1.44775 12.6666 1.44775C12.9146 1.44775 13.1595 1.49653 13.3882 1.59129C13.617 1.68605 13.825 1.82494 14 2.00004C14.1751 2.17513 14.314 2.38316 14.4088 2.61192C14.5035 2.84069 14.5523 3.08558 14.5523 3.33337C14.5523 3.58117 14.5035 3.82606 14.4088 4.05483C14.314 4.28359 14.1751 4.49162 14 4.66671L5.00001 13.6667L1.33334 14.6667L2.33334 11L11.3333 2.00004Z" stroke="#009966" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      {/* Delete Button */}
                      <button
                        onClick={() => handleDelete(pkg.id)}
                        className="w-[36px] h-[36px] rounded-[16.4px] bg-[#fef2f2] flex items-center justify-center hover:bg-[#fee2e2] transition-colors"
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 4H3.33333H14" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12.6667 4V13.3333C12.6667 13.687 12.5262 14.0261 12.2761 14.2761C12.0261 14.5262 11.687 14.6667 11.3333 14.6667H4.66667C4.31304 14.6667 3.97391 14.5262 3.72386 14.2761C3.47381 14.0261 3.33333 13.687 3.33333 13.3333V4M5.33333 4V2.66667C5.33333 2.31304 5.47381 1.97391 5.72386 1.72386C5.97391 1.47381 6.31304 1.33333 6.66667 1.33333H9.33333C9.68696 1.33333 10.0261 1.47381 10.2761 1.72386C10.5262 1.97391 10.6667 2.31304 10.6667 2.66667V4" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M6.66667 7.33337V12" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M9.33333 7.33337V12" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-16">
            {searchQuery || filterType !== 'Semua Tipe' ? (
              <EmptySearch 
                message="Tidak ada paket yang cocok dengan pencarian Anda"
                actionLabel="Reset Filter"
                onAction={() => {
                  setSearchQuery('');
                  setFilterType('Semua Tipe');
                }}
              />
            ) : (
              <EmptyData 
                message="Belum ada paket tour"
                actionLabel="Tambah Paket"
                onAction={handleAddPackage}
              />
            )}
          </div>
        )}
      </div>

      {/* Tambah Paket Modal */}
      {isModalOpen && (
        <TambahPaketModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      {/* Edit Paket Modal */}
      {isEditModalOpen && selectedPackage && (
        <EditPackageModal
          isOpen={isEditModalOpen}
          onClose={() => {
            setIsEditModalOpen(false);
            setSelectedPackage(null);
          }}
          packageData={selectedPackage}
          onSave={(data) => {
            console.log('Saved package data:', data);
            // TODO: Implement API call to save data
          }}
        />
      )}

      {/* Delete Confirmation Modal */}
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setPackageToDelete(null);
        }}
        onConfirm={confirmDelete}
        message="Apakah Anda yakin ingin menghapus paket ini?"
      />
    </div>
  );
}
