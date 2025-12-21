import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  containerClassName?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, startIcon, endIcon, className, containerClassName, ...props }, ref) => {
    return (
      <div className={`flex flex-col gap-2 w-full ${containerClassName}`}>
        {label && (
          <label className="text-[#364153] text-sm font-normal font-['Inter'] leading-tight">
            {label}
          </label>
        )}
        <div className="relative w-full">
          {startIcon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center pointer-events-none">
              {startIcon}
            </div>
          )}
          <input
            ref={ref}
            className={`w-full bg-white border-2 border-[#e5e7eb] rounded-[16.4px] py-3 ${
              startIcon ? 'pl-12' : 'pl-4'
            } ${endIcon ? 'pr-12' : 'pr-4'} text-base text-[#0a0a0a] placeholder:text-[#0a0a0a]/50 focus:outline-none focus:border-[#00bc7d] transition-colors ${className}`}
            {...props}
          />
          {endIcon && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center">
              {endIcon}
            </div>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = 'Input';
