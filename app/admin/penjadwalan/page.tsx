"use client";

import { useState } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import ScheduleStatusBadge from "@/components/admin/ScheduleStatusBadge";
import Pagination from "@/components/admin/Pagination";

const imgIcon5 = "https://www.figma.com/api/mcp/asset/14990796-5198-4a2a-9a12-76d750c3b9c6";
const imgIcon6 = "https://www.figma.com/api/mcp/asset/dd26fa05-6b05-404a-b7b7-41297860f3bc";
const imgIcon7 = "https://www.figma.com/api/mcp/asset/b2c79717-70c6-49dd-b8cc-ed5d06fbfa71";
const imgIcon8 = "https://www.figma.com/api/mcp/asset/259c1bf8-c151-4e9c-a7a6-4b99fa6db093";
const imgIcon9 = "https://www.figma.com/api/mcp/asset/bb19f670-ed05-40e4-8da1-a8d7d121b61c";
const imgIcon10 = "https://www.figma.com/api/mcp/asset/ba9520b2-4f3b-49da-a6b2-1ea86e79e5b2";
const imgIcon11 = "https://www.figma.com/api/mcp/asset/c4e1e098-c543-4933-ab60-51558f63d209";
const imgIcon12 = "https://www.figma.com/api/mcp/asset/16d1f73c-b032-47a9-8ef8-86381ba1eb48";

interface Schedule {
  id: string;
  instalasi: string;
  paket: string;
  kode: string;
  tanggal: string;
  status: "active" | "inactive";
}

export default function PenjadwalanPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSchedules, setSelectedSchedules] = useState<string[]>([]);

  const schedules: Schedule[] = [
    {
      id: "1",
      instalasi: "PT. Amerta J",
      paket: "Paket Bali Premium",
      kode: "PRE17B",
      tanggal: "17 Juni 2025",
      status: "inactive",
    },
    {
      id: "2",
      instalasi: "PT. Amerta J",
      paket: "Paket Bali Ekonomis",
      kode: "EKS15B",
      tanggal: "15 Agustus 2025",
      status: "active",
    },
    {
      id: "3",
      instalasi: "CV. Maju Bersama",
      paket: "Paket Yogyakarta Premium",
      kode: "YOG23C",
      tanggal: "23 Juli 2025",
      status: "active",
    },
    {
      id: "4",
      instalasi: "PT. Sukses Makmur",
      paket: "Paket Bandung Ekonomis",
      kode: "BDG10D",
      tanggal: "10 September 2025",
      status: "inactive",
    },
    {
      id: "5",
      instalasi: "CV. Berkah Jaya",
      paket: "Paket Lombok Premium",
      kode: "LMB05E",
      tanggal: "5 Oktober 2025",
      status: "active",
    },
  ];

  const totalSchedules = schedules.length;
  const activeSchedules = schedules.filter((s) => s.status === "active").length;
  const inactiveSchedules = schedules.filter((s) => s.status === "inactive").length;

  const toggleSelectAll = () => {
    if (selectedSchedules.length === schedules.length) {
      setSelectedSchedules([]);
    } else {
      setSelectedSchedules(schedules.map((s) => s.id));
    }
  };

  const toggleSelectSchedule = (id: string) => {
    if (selectedSchedules.includes(id)) {
      setSelectedSchedules(selectedSchedules.filter((sid) => sid !== id));
    } else {
      setSelectedSchedules([...selectedSchedules, id]);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6]">
      <AdminSidebar activePage="penjadwalan" />

      <div className="flex-1 ml-64 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="font-['Segoe_UI',sans-serif] font-bold leading-[40px] text-[#101828] text-[36px] tracking-[-0.72px]">
              Kelola Penjadwalan
            </h1>
            <p className="font-['Segoe_UI',sans-serif] font-normal leading-[25.6px] text-[#6a7282] text-[16px]">
              Kelola jadwal keberangkatan paket tour
            </p>
          </div>

          <div className="flex gap-3">
            <button className="bg-white border border-[#e5e7eb] h-[46px] px-[21px] rounded-[16.4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] flex items-center gap-2 hover:bg-gray-50">
              <img alt="" className="w-5 h-5" src={imgIcon5} />
              <span className="font-['Segoe_UI',sans-serif] font-normal leading-6 text-[#364153] text-[16px]">
                Export
              </span>
            </button>

            <button className="bg-gradient-to-r from-[#009966] to-[#00bc7d] h-[46px] px-5 rounded-[16.4px] flex items-center gap-2 hover:opacity-90">
              <img alt="" className="w-5 h-5" src={imgIcon6} />
              <span className="font-['Segoe_UI',sans-serif] font-normal leading-6 text-white text-[16px]">
                Kelola Jadwal
              </span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="bg-white border border-[#f3f4f6] rounded-[16.4px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] p-[21px]">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-['Segoe_UI',sans-serif] font-normal leading-[25.6px] text-[#6a7282] text-[16px] mb-1">
                  Total Jadwal
                </p>
                <p className="font-['Segoe_UI',sans-serif] font-normal leading-[25.6px] text-[#101828] text-[16px]">
                  {totalSchedules}
                </p>
              </div>
              <div className="bg-[#dbeafe] w-12 h-12 rounded-[16.4px] flex items-center justify-center">
                <img alt="" className="w-6 h-6" src={imgIcon7} />
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#f3f4f6] rounded-[16.4px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] p-[21px]">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-['Segoe_UI',sans-serif] font-normal leading-[25.6px] text-[#6a7282] text-[16px] mb-1">
                  Jadwal Aktif
                </p>
                <p className="font-['Segoe_UI',sans-serif] font-normal leading-[25.6px] text-[#009966] text-[16px]">
                  {activeSchedules}
                </p>
              </div>
              <div className="bg-[#d0fae5] w-12 h-12 rounded-[16.4px] flex items-center justify-center">
                <img alt="" className="w-6 h-6" src={imgIcon8} />
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#f3f4f6] rounded-[16.4px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] p-[21px]">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-['Segoe_UI',sans-serif] font-normal leading-[25.6px] text-[#6a7282] text-[16px] mb-1">
                  Tidak Aktif
                </p>
                <p className="font-['Segoe_UI',sans-serif] font-normal leading-[25.6px] text-[#e7000b] text-[16px]">
                  {inactiveSchedules}
                </p>
              </div>
              <div className="bg-[#ffe2e2] w-12 h-12 rounded-[16.4px] flex items-center justify-center">
                <img alt="" className="w-6 h-6" src={imgIcon9} />
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white border border-[#f3f4f6] rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] p-[25px] mb-4">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <img
                alt=""
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
                src={imgIcon11}
              />
              <input
                type="text"
                placeholder="Cari berdasarkan instalasi, paket, atau kode..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-[50px] pl-12 pr-4 border border-[#e5e7eb] rounded-[16.4px] font-['Segoe_UI',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#009966]"
              />
            </div>
            <button className="border border-[#e5e7eb] h-[50px] px-[25px] rounded-[16.4px] flex items-center gap-2 hover:bg-gray-50">
              <img alt="" className="w-5 h-5" src={imgIcon10} />
              <span className="font-['Segoe_UI',sans-serif] font-normal leading-6 text-[#364153] text-[16px]">
                Filter Lanjutan
              </span>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white border border-[#f3f4f6] rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-[#f9fafb] to-[#f3f4f6] border-b border-[#e5e7eb]">
                <tr>
                  <th className="px-6 py-4 text-left w-20">
                    <button
                      onClick={toggleSelectAll}
                      className="w-[22px] h-[22px] border border-[#c2c2c2] rounded-md flex items-center justify-center hover:bg-gray-100"
                    >
                      {selectedSchedules.length === schedules.length && (
                        <div className="w-3 h-3 bg-[#009966] rounded-sm" />
                      )}
                    </button>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <p className="font-['Segoe_UI',sans-serif] font-bold leading-4 text-[#4a5565] text-xs tracking-[0.6px] uppercase">
                      Instalasi
                    </p>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <p className="font-['Segoe_UI',sans-serif] font-bold leading-4 text-[#4a5565] text-xs tracking-[0.6px] uppercase">
                      Paket Tour
                    </p>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <p className="font-['Segoe_UI',sans-serif] font-bold leading-4 text-[#4a5565] text-xs tracking-[0.6px] uppercase">
                      Kode
                    </p>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <p className="font-['Segoe_UI',sans-serif] font-bold leading-4 text-[#4a5565] text-xs tracking-[0.6px] uppercase">
                      Keberangkatan
                    </p>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <p className="font-['Segoe_UI',sans-serif] font-bold leading-4 text-[#4a5565] text-xs tracking-[0.6px] uppercase">
                      Status Layanan
                    </p>
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white">
                {schedules.map((schedule, index) => (
                  <tr
                    key={schedule.id}
                    className={index !== schedules.length - 1 ? "border-b border-[#f3f4f6]" : ""}
                  >
                    <td className="px-6 py-6">
                      <button
                        onClick={() => toggleSelectSchedule(schedule.id)}
                        className="w-[22px] h-[22px] border border-[#c2c2c2] rounded-md flex items-center justify-center hover:bg-gray-100"
                      >
                        {selectedSchedules.includes(schedule.id) && (
                          <div className="w-3 h-3 bg-[#009966] rounded-sm" />
                        )}
                      </button>
                    </td>
                    <td className="px-6 py-6">
                      <p className="font-['Segoe_UI',sans-serif] font-normal leading-[25.6px] text-[#101828] text-[16px]">
                        {schedule.instalasi}
                      </p>
                    </td>
                    <td className="px-6 py-6">
                      <p className="font-['Segoe_UI',sans-serif] font-normal leading-[25.6px] text-[#101828] text-[16px]">
                        {schedule.paket}
                      </p>
                    </td>
                    <td className="px-6 py-6">
                      <div className="bg-[#f3f4f6] inline-flex items-center px-3 py-1.5 rounded-[10px]">
                        <p className="font-['Consolas',monospace] font-normal leading-5 text-[#101828] text-[14px]">
                          {schedule.kode}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <div className="flex items-center gap-2">
                        <img alt="" className="w-4 h-4" src={imgIcon12} />
                        <p className="font-['Segoe_UI',sans-serif] font-normal leading-[25.6px] text-[#101828] text-[16px]">
                          {schedule.tanggal}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <ScheduleStatusBadge status={schedule.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={2}
            totalItems={schedules.length}
            itemsPerPage={5}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}
