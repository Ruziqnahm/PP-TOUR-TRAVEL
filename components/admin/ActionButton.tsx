import Image from 'next/image';

interface ActionButtonProps {
  variant: 'promote' | 'demote' | 'ban';
  onClick?: () => void;
}

export function ActionButton({ variant, onClick }: ActionButtonProps) {
  const variants = {
    promote: {
      bg: 'bg-[#ecfdf5]',
      border: 'border-[#a4f4cf]',
      text: 'text-[#009966]',
      label: 'Jadikan Admin',
      icon: 'https://www.figma.com/api/mcp/asset/4443e2b0-9b54-43e0-99dc-aaa82a226e1c',
    },
    demote: {
      bg: 'bg-[#fff7ed]',
      border: 'border-[#ffd6a7]',
      text: 'text-[#f54900]',
      label: 'Cabut Admin',
      icon: 'https://www.figma.com/api/mcp/asset/98f62c53-88e1-428e-9a17-998ad657f207',
    },
    ban: {
      bg: 'bg-[#fef2f2]',
      border: 'border-[#ffc9c9]',
      text: 'text-[#e7000b]',
      label: 'Ban User',
      icon: 'https://www.figma.com/api/mcp/asset/1796c67d-5965-45f6-b07c-67728bbfa9a6',
    },
  };

  const config = variants[variant];

  return (
    <button
      onClick={onClick}
      className={`${config.bg} border ${config.border} ${config.text} h-[30px] px-3 py-1.5 rounded-[10px] text-xs font-normal flex items-center gap-2 hover:opacity-80 transition-opacity`}
    >
      <Image src={config.icon} alt="" width={14} height={14} />
      {config.label}
    </button>
  );
}
