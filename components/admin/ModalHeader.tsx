interface ModalHeaderProps {
  title: string;
  onClose?: () => void;
}

export function ModalHeader({ title, onClose }: ModalHeaderProps) {
  return (
    <div className="border-b border-[#e5e7eb] flex h-[85px] items-center justify-between px-[24px] pb-px pt-0">
      <h2 className="font-['Segoe_UI'] font-bold text-[30px] leading-[36px] text-[#101828] tracking-[-0.3px]">
        {title}
      </h2>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="w-[36px] h-[36px] rounded-[10px] flex items-center justify-center hover:bg-gray-100 transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 5L5 15M5 5L15 15" stroke="#667085" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
    </div>
  );
}
