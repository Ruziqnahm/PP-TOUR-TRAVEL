import React from 'react';

interface TotalPaymentCardProps {
  amount: number;
}

export default function TotalPaymentCard({ amount }: TotalPaymentCardProps) {
  const formattedAmount = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);

  return (
    <div className="bg-gradient-to-r from-[#eff6ff] to-[rgba(219,234,254,0.5)] border border-[#bedbff] rounded-[16.4px] px-[17px] py-[17px] flex items-center justify-between">
      <p className="text-sm text-[#4a5565]">Total Pembayaran</p>
      <p className="text-2xl text-[#155dfc]">{formattedAmount}</p>
    </div>
  );
}
