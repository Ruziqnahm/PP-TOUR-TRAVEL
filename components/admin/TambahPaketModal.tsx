'use client';

import { useState, useEffect } from 'react';
import { FormLabel } from './FormLabel';
import { TextInput } from './TextInput';
import { Dropdown } from './Dropdown';
import { FileUploadInput } from './FileUploadInput';
import { ImagePreview } from './ImagePreview';
import { ModalHeader } from './ModalHeader';
import toast from 'react-hot-toast';

// Sample image URLs
const sampleGallery1 = "https://www.figma.com/api/mcp/asset/f95c0f4d-fba5-4831-8aeb-9ddc70df079e";
const sampleGallery2 = "https://www.figma.com/api/mcp/asset/e976e556-fe80-4115-a650-4f532f2ca239";

interface TambahPaketModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface PackageFormData {
  namaPaket: string;
  durasiWisata: string;
  tipePaket: string;
  nominalHarga: string;
  namaDaerah: string;
  gambarDestinasi: string;
  gambarPoster: string;
  minimalPax: string;
  galleryFoto: string[];
}

export default function TambahPaketModal({ isOpen, onClose }: TambahPaketModalProps) {
  const [formData, setFormData] = useState<PackageFormData>({
    namaPaket: '',
    durasiWisata: '',
    tipePaket: '',
    nominalHarga: '',
    namaDaerah: '',
    gambarDestinasi: '',
    gambarPoster: '',
    minimalPax: '',
    galleryFoto: [sampleGallery1, sampleGallery2]
  });

  const tipePaketOptions = [
    { value: 'reguler', label: 'Reguler' },
    { value: 'premium', label: 'Premium' },
    { value: 'vip', label: 'VIP' },
    { value: 'backpacker', label: 'Backpacker' }
  ];

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          [fieldName]: file.name
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGalleryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages: string[] = [];
      Array.from(files).slice(0, 5 - formData.galleryFoto.length).forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          newImages.push(reader.result as string);
          if (newImages.length === Math.min(files.length, 5 - formData.galleryFoto.length)) {
            setFormData(prev => ({
              ...prev,
              galleryFoto: [...prev.galleryFoto, ...newImages].slice(0, 5)
            }));
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleRemoveGalleryImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      galleryFoto: prev.galleryFoto.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast.success('Paket berhasil disimpan!');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-[456px] max-h-[90vh] overflow-hidden">
        <ModalHeader title="Tambah Paket" onClose={onClose} />
        
        <form onSubmit={handleSubmit} className="overflow-y-auto max-h-[calc(90vh-85px)]">
          <div className="p-[24px] flex flex-col gap-[16px]">
            {/* Row 1: Nama Paket & Durasi Wisata */}
            <div className="grid grid-cols-2 gap-[16px]">
              <div className="flex flex-col gap-[8px]">
                <FormLabel required>Nama Paket</FormLabel>
                <TextInput
                  name="namaPaket"
                  placeholder="Tambahkan nama paket"
                  value={formData.namaPaket}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <FormLabel required>Durasi Wisata</FormLabel>
                <TextInput
                  name="durasiWisata"
                  type="number"
                  placeholder="Berapa hari"
                  value={formData.durasiWisata}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Row 2: Tipe Paket & Nominal Harga */}
            <div className="grid grid-cols-2 gap-[16px]">
              <div className="flex flex-col gap-[8px]">
                <FormLabel required>Tipe Paket</FormLabel>
                <Dropdown
                  name="tipePaket"
                  options={tipePaketOptions}
                  value={formData.tipePaket}
                  onChange={handleInputChange}
                  placeholder="Pilih tipe paket"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <FormLabel required>Nominal Harga</FormLabel>
                <TextInput
                  name="nominalHarga"
                  type="number"
                  placeholder="tentukan harga/PAX"
                  value={formData.nominalHarga}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Row 3: Nama Daerah & Upload Gambar Destinasi */}
            <div className="grid grid-cols-2 gap-[16px]">
              <div className="flex flex-col gap-[8px]">
                <FormLabel required>Nama Daerah</FormLabel>
                <TextInput
                  name="namaDaerah"
                  placeholder="Tambahkan nama daerah"
                  value={formData.namaDaerah}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <FormLabel>Upload Gambar Destinasi</FormLabel>
                <FileUploadInput
                  onChange={(e) => handleFileChange(e, 'gambarDestinasi')}
                  placeholder="Pilih gambar"
                  fileName={formData.gambarDestinasi}
                />
              </div>
            </div>

            {/* Row 4: Upload Gambar Poster & Minimal Pax */}
            <div className="grid grid-cols-2 gap-[19px]">
              <div className="flex flex-col gap-[8px]">
                <FormLabel>Upload Gambar Poster</FormLabel>
                <FileUploadInput
                  onChange={(e) => handleFileChange(e, 'gambarPoster')}
                  placeholder="Pilih Gambar"
                  fileName={formData.gambarPoster}
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <FormLabel required>Minimal Pax</FormLabel>
                <TextInput
                  name="minimalPax"
                  type="number"
                  placeholder="Tentukan minimal PAX"
                  value={formData.minimalPax}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Gallery Foto Section */}
            <div className="flex flex-col gap-[8px]">
              <FormLabel>Galery Foto</FormLabel>
              <p className="text-[11px] leading-[20px] text-[#364153] opacity-50">
                Upload foto dokumentasi atau brosur (Max 5)
              </p>
              <FileUploadInput
                onChange={handleGalleryChange}
                placeholder="Pilih Gambar"
                multiple
                accept="image/*"
              />
              <ImagePreview 
                images={formData.galleryFoto} 
                onRemove={handleRemoveGalleryImage}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#009966] text-white text-[16px] leading-[24px] h-[48px] rounded-[10px] font-['Segoe_UI'] hover:bg-[#007a55] transition-colors"
            >
              Di Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
