'use client';

import React, { useState, useRef } from 'react';
import toast from 'react-hot-toast';

interface ImageUploadWithPreviewProps {
  onImageSelect: (file: File) => void;
  currentImageUrl?: string;
  maxSizeMB?: number;
  acceptedFormats?: string[];
}

export default function ImageUploadWithPreview({
  onImageSelect,
  currentImageUrl,
  maxSizeMB = 5,
  acceptedFormats = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp']
}: ImageUploadWithPreviewProps) {
  const [preview, setPreview] = useState<string | null>(currentImageUrl || null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File): boolean => {
    // Check file type
    if (!acceptedFormats.includes(file.type)) {
      toast.error(`Format file tidak didukung. Gunakan: ${acceptedFormats.map(f => f.split('/')[1]).join(', ')}`);
      return false;
    }

    // Check file size
    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > maxSizeMB) {
      toast.error(`Ukuran file maksimal ${maxSizeMB}MB. File Anda: ${fileSizeMB.toFixed(2)}MB`);
      return false;
    }

    return true;
  };

  const simulateUpload = (file: File) => {
    setIsUploading(true);
    setUploadProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
      onImageSelect(file);
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && validateFile(file)) {
      simulateUpload(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && validateFile(file)) {
      simulateUpload(file);
    }
  };

  const handleRemove = () => {
    setPreview(null);
    setUploadProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-4">
      {/* Upload Area */}
      <div
        className={`relative border-2 border-dashed rounded-xl transition-all ${
          isDragging
            ? 'border-[#009966] bg-green-50'
            : 'border-gray-300 hover:border-gray-400'
        } ${preview ? 'p-0' : 'p-8'}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {preview ? (
          /* Image Preview */
          <div className="relative group">
            <img
              src={preview}
              alt="Preview"
              className="w-full h-64 object-cover rounded-xl"
            />
            
            {/* Overlay with actions */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all rounded-xl flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="px-4 py-2 bg-white text-gray-900 rounded-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-100"
              >
                Ganti
              </button>
              <button
                type="button"
                onClick={handleRemove}
                className="px-4 py-2 bg-red-600 text-white rounded-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-700"
              >
                Hapus
              </button>
            </div>

            {/* Upload Progress Bar */}
            {isUploading && (
              <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-3 rounded-b-xl">
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#009966] transition-all duration-300"
                        style={{ width: `${uploadProgress}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {uploadProgress}%
                  </span>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Upload Placeholder */
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>

            <div>
              <p className="text-base font-medium text-gray-900">
                Drop gambar di sini atau{' '}
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="text-[#009966] hover:text-[#007a52] font-semibold"
                >
                  pilih file
                </button>
              </p>
              <p className="text-sm text-gray-500 mt-1">
                PNG, JPG, WEBP hingga {maxSizeMB}MB
              </p>
            </div>
          </div>
        )}

        {/* Hidden File Input */}
        <input
          ref={fileInputRef}
          type="file"
          accept={acceptedFormats.join(',')}
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {/* File Info */}
      {preview && !isUploading && (
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <svg
            className="w-5 h-5 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>Gambar berhasil dipilih</span>
        </div>
      )}
    </div>
  );
}
