import React from 'react';
import Link from 'next/link';

interface ModalHeaderProps {
  title: string;
  subtitle?: string;
  onClose?: () => void;
  closeUrl?: string;
}

export default function ModalHeader({ title, subtitle, onClose, closeUrl = '/' }: ModalHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-[#2b7fff] to-[#155dfc] px-6 py-6 flex items-center justify-between rounded-t-2xl">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-[rgba(255,255,255,0.2)] rounded-[10px] flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <div>
          <h2 className="text-[32px] font-bold text-white leading-[42px]">{title}</h2>
          {subtitle && <p className="text-base text-[#dbeafe] leading-6">{subtitle}</p>}
        </div>
      </div>
      {closeUrl ? (
        <Link
          href={closeUrl}
          className="w-9 h-9 rounded-[10px] flex items-center justify-center hover:bg-[rgba(255,255,255,0.1)] transition-colors"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </Link>
      ) : (
        <button
          onClick={onClose}
          className="w-9 h-9 rounded-[10px] flex items-center justify-center hover:bg-[rgba(255,255,255,0.1)] transition-colors"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}
