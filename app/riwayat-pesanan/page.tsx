'use client';

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";

// Sample order data
const sampleOrders: Array<{
  id: string;
  bookingCode: string;
  packageName: string;
  departureDate: string;
  pax: number;
  customerName: string;
  institution: string;
  contact: string;
  status: OrderStatus;
}> = [
  {
    id: "1",
    bookingCode: "BKGXX8MWZ3",
    packageName: "Paket Ekonomis Bali",
    departureDate: "9 Desember 2025",
    pax: 50,
    customerName: "Sigit",
    institution: "PT BUANA",
    contact: "08521641118",
    status: "paid",
  },
];

type FilterTab = "semua" | "menunggu" | "terkonfirmasi";
type OrderStatus = "pending" | "paid";

export default function RiwayatPesananPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterTab>("semua");
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);

  const filteredOrders = sampleOrders.filter((order) => {
    const matchesSearch =
      order.packageName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.bookingCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customerName.toLowerCase().includes(searchQuery.toLowerCase());

    if (activeFilter === "semua") return matchesSearch;
    if (activeFilter === "menunggu") return matchesSearch && order.status === "pending";
    if (activeFilter === "terkonfirmasi") return matchesSearch && order.status === "paid";
    return matchesSearch;
  });

  const stats = {
    total: sampleOrders.length,
    menunggu: sampleOrders.filter((o) => o.status === "pending").length,
    terkonfirmasi: sampleOrders.filter((o) => o.status === "paid").length,
  };

  const toggleSelectOrder = (id: string) => {
    setSelectedOrders((prev) =>
      prev.includes(id) ? prev.filter((orderId) => orderId !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedOrders.length === filteredOrders.length) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(filteredOrders.map((o) => o.id));
    }
  };

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      <Navbar isLoggedIn={true} />

      <div className="max-w-[1280px] mx-auto px-8 py-8">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#364153] hover:text-[#00bc7d] mb-6 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Kembali ke Beranda
        </Link>

        {/* Header */}
        <div className="flex items-start gap-4 mb-8">
          <div className="w-14 h-14 bg-gradient-to-r from-[#00bc7d] to-[#009966] rounded-xl flex items-center justify-center shrink-0">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div>
            <h1 className="text-4xl font-bold text-[#364153] mb-2">
              Riwayat Pemesanan
            </h1>
            <p className="text-sm text-[#6a7282]">
              Kelola dan lacak semua pesanan Anda
            </p>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="bg-white rounded-xl p-6 mb-6 flex items-center justify-between gap-4">
          <div className="flex-1 relative">
            <svg className="w-5 h-5 text-[#6a7282] absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari berdasarkan paket, kode booking, atau nama pemesan..."
              className="w-full h-[50px] pl-12 pr-4 border border-[#e5e7eb] rounded-lg focus:outline-none focus:border-[#00bc7d] focus:ring-1 focus:ring-[#00bc7d] text-sm"
            />
          </div>
          <div className="flex gap-2">
            {(["semua", "menunggu", "terkonfirmasi"] as FilterTab[]).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? "bg-[#00bc7d] text-white"
                    : "bg-[#f3f4f6] text-[#6a7282] hover:bg-[#e5e7eb]"
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-gradient-to-r from-[#00bc7d] to-[#009966] rounded-xl p-6 text-white">
            <div className="text-4xl font-bold mb-2 text-center">{stats.total}</div>
            <div className="text-sm text-center text-white/90">Total Pesanan</div>
          </div>
          <div className="bg-gradient-to-r from-[#00bc7d] to-[#009966] rounded-xl p-6 text-white">
            <div className="text-4xl font-bold mb-2 text-center">{stats.menunggu}</div>
            <div className="text-sm text-center text-white/90">Menunggu Konfirmasi</div>
          </div>
          <div className="bg-gradient-to-r from-[#00bc7d] to-[#009966] rounded-xl p-6 text-white">
            <div className="text-4xl font-bold mb-2 text-center">{stats.terkonfirmasi}</div>
            <div className="text-sm text-center text-white/90">Terkonfirmasi</div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white border border-[#f3f4f6] rounded-2xl overflow-hidden shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
          {/* Action Bar */}
          {selectedOrders.length > 0 && (
            <div className="bg-gradient-to-r from-[#f9fafb] to-[rgba(243,244,246,0.5)] border-b border-[#e5e7eb] px-6 py-4 flex items-center justify-between">
              <div className="text-sm text-[#007a55] bg-[#d0fae5] px-3 py-1.5 rounded-full">
                {selectedOrders.length} pesanan dipilih
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 px-4 py-2.5 text-sm text-white bg-[#2b7fff] rounded-[10px] hover:bg-[#1a6eef] transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Edit
                </button>
                <button className="flex items-center gap-2 px-4 py-2.5 text-sm text-white bg-[#fb2c36] rounded-[10px] hover:bg-[#e01b25] transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Hapus
                </button>
                <button className="flex items-center gap-2 px-4 py-2.5 text-sm text-white bg-[#00bc7d] rounded-[10px] hover:bg-[#00a56e] transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  Bayar
                </button>
                <button className="flex items-center gap-2 px-4 py-2.5 text-sm text-white bg-[#ad46ff] rounded-[10px] hover:bg-[#9c35ef] transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  Cetak
                </button>
              </div>
            </div>
          )}

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-[#ecfdf5] to-[rgba(208,250,229,0.5)] border-b border-[#a4f4cf]">
                <tr>
                  <th className="px-6 py-5 text-left w-16">
                    <input
                      type="checkbox"
                      checked={selectedOrders.length === filteredOrders.length && filteredOrders.length > 0}
                      onChange={toggleSelectAll}
                      className="w-4 h-4 rounded border-[#d1d5db] text-[#00bc7d] focus:ring-[#00bc7d]"
                    />
                  </th>
                  <th className="px-6 py-5 text-left">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#364153]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs font-bold text-[#364153] uppercase tracking-wider">Paket Tour</span>
                    </div>
                  </th>
                  <th className="px-6 py-5 text-left">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#364153]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs font-bold text-[#364153] uppercase tracking-wider">Keberangkatan</span>
                    </div>
                  </th>
                  <th className="px-6 py-5 text-left">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#364153]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                      <span className="text-xs font-bold text-[#364153] uppercase tracking-wider">Jumlah PAX</span>
                    </div>
                  </th>
                  <th className="px-6 py-5 text-left">
                    <span className="text-xs font-bold text-[#364153] uppercase tracking-wider">Nama Pemesan</span>
                  </th>
                  <th className="px-6 py-5 text-left">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#364153]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs font-bold text-[#364153] uppercase tracking-wider">Instansi</span>
                    </div>
                  </th>
                  <th className="px-6 py-5 text-left">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#364153]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <span className="text-xs font-bold text-[#364153] uppercase tracking-wider">Kontak</span>
                    </div>
                  </th>
                  <th className="px-6 py-5 text-left">
                    <span className="text-xs font-bold text-[#364153] uppercase tracking-wider">Status Bayar</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f3f4f6] bg-white">
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-[#f9fafb] transition-colors">
                    <td className="px-6 py-6">
                      <input
                        type="checkbox"
                        checked={selectedOrders.includes(order.id)}
                        onChange={() => toggleSelectOrder(order.id)}
                        className="w-4 h-4 rounded border-[#d1d5db] text-[#00bc7d] focus:ring-[#00bc7d]"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-normal text-[#101828] text-sm leading-5">{order.packageName}</div>
                      <div className="text-xs text-[#6a7282] mt-1 leading-4">Kode: {order.bookingCode}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#364153] leading-5">{order.departureDate}</td>
                    <td className="px-6 py-4">
                      <div className="inline-flex items-center justify-center px-3 py-1 bg-[#d0fae5] rounded-full text-sm text-[#007a55]">
                        {order.pax}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#101828] leading-5">{order.customerName}</td>
                    <td className="px-6 py-4 text-sm text-[#364153] leading-5">{order.institution}</td>
                    <td className="px-6 py-4 text-sm text-[#364153] leading-5">{order.contact}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[rgba(0,212,146,0.3)] text-[#007a55] text-xs leading-4 rounded-full">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Sudah dibayar
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {filteredOrders.length === 0 && (
            <div className="py-20 text-center">
              <svg className="w-16 h-16 mx-auto text-[#d1d5db] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-xl font-semibold text-[#364153] mb-2">
                Tidak ada pesanan ditemukan
              </h3>
              <p className="text-[#6a7282]">Coba ubah filter atau kata kunci pencarian</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
