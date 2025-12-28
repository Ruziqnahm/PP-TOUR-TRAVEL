'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface NavbarProps {
  isLoggedIn?: boolean;
}

export default function Navbar({ isLoggedIn = false }: NavbarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] w-full">
      <div className="max-w-[1512px] mx-auto px-[100px]">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-[#00bc7d] to-[#009966] flex items-center justify-center">
              <svg className="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </div>
            <span className="text-[#101828] text-xl font-semibold">
              PP Tour Travel
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-24">
            <Link
              href={isLoggedIn ? "/dashboard" : "/"}
              className="text-sm font-medium text-[#101828] relative pb-6"
            >
              Beranda
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00bc7d]" />
            </Link>
            <Link
              href="/tours"
              className="text-sm text-[#4a5565] hover:text-[#101828]"
            >
              Paket Tour
            </Link>
            <Link
              href="/orders"
              className="text-sm text-[#4a5565] hover:text-[#101828]"
            >
              Riwayat Pesanan
            </Link>
            <Link
              href="/about"
              className="text-sm text-[#4a5565] hover:text-[#101828]"
            >
              Tentang Kami
            </Link>
          </div>

          {/* Auth Buttons or User Profile */}
          {!isLoggedIn ? (
            <div className="flex items-center gap-4">
              <Link
                href="/login"
                className="px-4 py-2 text-sm font-medium text-[#096] hover:text-[#007a55]"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-5 py-2.5 bg-[#096] text-white text-sm font-medium rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] hover:bg-[#007a55]"
              >
                Sign Up
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              {/* Notification */}
              <button className="relative w-9 h-9 rounded-[10px] flex items-center justify-center hover:bg-gray-50">
                <svg className="w-5 h-5 text-[#4a5565]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <div className="absolute top-1 right-1 w-2 h-2 bg-[#fb2c36] rounded-full"></div>
              </button>

              {/* User Profile Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2.5 px-3 py-0 rounded-[10px] hover:bg-gray-50"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00bc7d] to-[#009966] flex items-center justify-center shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
                    <span className="text-white text-sm font-normal">BS</span>
                  </div>
                  <span className="text-sm text-[#364153]">Budi Santoso</span>
                  <svg className="w-4 h-4 text-[#4a5565]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-[#364153] hover:bg-gray-50"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Profile
                    </Link>
                    <Link
                      href="/settings"
                      className="block px-4 py-2 text-sm text-[#364153] hover:bg-gray-50"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Settings
                    </Link>
                    <button
                      onClick={() => {
                        setIsDropdownOpen(false);
                        // Handle logout
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
