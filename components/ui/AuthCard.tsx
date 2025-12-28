import React from 'react';

interface AuthCardProps {
  children: React.ReactNode;
  className?: string;
}

export const AuthCard: React.FC<AuthCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white/80 backdrop-blur-sm border-2 border-white/50 rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] p-8 w-full max-w-[448px] ${className}`}>
      {children}
    </div>
  );
};
