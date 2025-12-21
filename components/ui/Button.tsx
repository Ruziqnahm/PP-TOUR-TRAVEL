import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', fullWidth, startIcon, className, ...props }, ref) => {
    const baseStyles = "flex items-center justify-center gap-2 rounded-[16.4px] font-['Inter'] text-base font-normal transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";
    
    const variants = {
      primary: "bg-gradient-to-r from-[#00bc7d] to-[#009966] text-white hover:opacity-90 shadow-sm",
      outline: "border-2 border-[#00bc7d] text-[#00bc7d] bg-transparent hover:bg-[#00bc7d]/10",
      ghost: "bg-transparent text-[#00bc7d] hover:bg-gray-100",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className} h-12`}
        {...props}
      >
        {startIcon && <span className="w-5 h-5 flex items-center justify-center">{startIcon}</span>}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
