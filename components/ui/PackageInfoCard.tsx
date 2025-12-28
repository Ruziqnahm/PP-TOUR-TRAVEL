import React from 'react';

interface PackageInfoCardProps {
  packageName: string;
  location: string;
}

export default function PackageInfoCard({ packageName, location }: PackageInfoCardProps) {
  return (
    <div className="bg-gradient-to-r from-[#ecfdf5] to-[rgba(208,250,229,0.5)] border border-[#a4f4cf] rounded-[16.4px] px-[17px] py-[17px] flex flex-col gap-1">
      <p className="text-sm text-[#4a5565]">Paket Tour</p>
      <p className="text-lg text-[#101828] leading-7">{packageName}</p>
      <p className="text-sm text-[#096]">{location}</p>
    </div>
  );
}
