interface AdminButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}

export function AdminButton({ 
  children, 
  onClick, 
  type = 'button',
  disabled = false,
  variant = 'primary'
}: AdminButtonProps) {
  const baseClasses = "w-full h-[37.38px] rounded-[10px] px-[18.69px] py-[18.69px] flex items-center justify-center font-bold text-[16.621px] transition-opacity";
  
  const variantClasses = {
    primary: "bg-[#f4a336] text-black hover:opacity-90",
    secondary: "bg-gray-500 text-white hover:opacity-90"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      <span className="leading-normal">{children}</span>
    </button>
  );
}
