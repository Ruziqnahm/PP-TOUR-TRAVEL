'use client';

import React, { useState } from 'react';
import Modal from './Modal';
import FormInput from './FormInput';
import FormDropdown from './FormDropdown';
import { FileUploadInput } from './FileUploadInput';

interface PackageData {
  id: string;
  name: string;
  duration: string;
  type: 'Premium' | 'Ekonomis';
  price: string;
  location: string;
  image: string;
  image2: string;
  minPax: string;
  facilities: string;
}

interface EditPackageModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageData: PackageData;
  onSave: (data: PackageData) => void;
}

export default function EditPackageModal({ 
  isOpen, 
  onClose, 
  packageData,
  onSave 
}: EditPackageModalProps) {
  const [formData, setFormData] = useState<PackageData>(packageData);

  const handleInputChange = (field: keyof PackageData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileChange = (field: 'image' | 'image2', file: File | null) => {
    if (file) {
      setFormData(prev => ({
        ...prev,
        [field]: file.name
      }));
    }
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  const packageTypeOptions = [
    { value: 'Premium', label: 'Premium' },
    { value: 'Ekonomis', label: 'Ekonomis' }
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      {/* Header */}
      <div className="border-b border-[#e5e7eb] px-6 py-5 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-[#101828] tracking-tight font-['Segoe_UI']">
          Edit Paket
        </h2>
        <button
          onClick={onClose}
          className="w-9 h-9 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors"
        >
          <svg className="w-5 h-5 text-gray-600" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Form */}
      <div className="px-6 py-6 max-h-[calc(90vh-180px)] overflow-y-auto">
        <div className="flex flex-col gap-4">
          {/* Row 1: Nama Paket & Durasi Wisata */}
          <div className="grid grid-cols-2 gap-4">
            <FormInput
              label="Nama Paket"
              value={formData.name}
              onChange={(value) => handleInputChange('name', value)}
              placeholder="Paket Bali Premium"
              required
            />
            <FormInput
              label="Durasi Wisata"
              value={formData.duration}
              onChange={(value) => handleInputChange('duration', value)}
              placeholder="4 Hari 2 Malam"
              required
            />
          </div>

          {/* Row 2: Tipe Paket & Nominal Harga */}
          <div className="grid grid-cols-2 gap-4">
            <FormDropdown
              label="Tipe Paket"
              value={formData.type}
              onChange={(value) => handleInputChange('type', value as 'Premium' | 'Ekonomis')}
              options={packageTypeOptions}
              required
            />
            <FormInput
              label="Nominal Harga"
              value={formData.price}
              onChange={(value) => handleInputChange('price', value)}
              placeholder="1450000"
              type="number"
              required
            />
          </div>

          {/* Row 3: Nama Daerah & Upload Gambar */}
          <div className="grid grid-cols-2 gap-4">
            <FormInput
              label="Nama Daerah"
              value={formData.location}
              onChange={(value) => handleInputChange('location', value)}
              placeholder="Bali, Indonesia"
              required
            />
            <FileUploadInput
              label="Upload gambar Destinasi"
              fileName={formData.image}
              onFileChange={(file) => handleFileChange('image', file)}
              accept="image/*"
            />
          </div>

          {/* Row 4: Upload Gambar 2 & Minimal Pax */}
          <div className="grid grid-cols-2 gap-4">
            <FileUploadInput
              label="Upload gambar Destinasi"
              fileName={formData.image2}
              onFileChange={(file) => handleFileChange('image2', file)}
              accept="image/*"
            />
            <FormInput
              label="Minimal Pax"
              value={formData.minPax}
              onChange={(value) => handleInputChange('minPax', value)}
              placeholder="50"
              type="number"
              required
            />
          </div>

          {/* Deskripsi Fasilitas */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-[#364153] font-['Segoe_UI']">
              Deskripsi Fasilitas Tour
            </label>
            <textarea
              value={formData.facilities}
              onChange={(e) => handleInputChange('facilities', e.target.value)}
              rows={5}
              className="border border-[#e5e7eb] rounded-lg px-4 py-2.5 text-sm text-[#4a5565] font-['Segoe_UI'] focus:outline-none focus:ring-2 focus:ring-[#009966] focus:border-transparent resize-none"
              placeholder="1. Transportasi Big Bus Pariwisata Terbaru&#10;2. Makan Prasmanan 8x&#10;3. Hotel Bintang 3x, Snack Box 1x & Air Mineral, etc"
            />
          </div>
        </div>
      </div>

      {/* Footer dengan Button */}
      <div className="px-6 pb-6">
        <button
          onClick={handleSave}
          className="w-full bg-[#009966] text-white py-3 rounded-lg font-['Segoe_UI'] text-base hover:bg-[#007a55] transition-colors"
        >
          Di Simpan
        </button>
      </div>
    </Modal>
  );
}
