interface UserStatusBadgeProps {
  status: 'admin' | 'user';
}

export function UserStatusBadge({ status }: UserStatusBadgeProps) {
  const isAdmin = status === 'admin';
  
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-normal ${
        isAdmin
          ? 'bg-[#d0fae5] text-[#007a55]'
          : 'bg-[#dbeafe] text-[#1447e6]'
      }`}
    >
      {isAdmin ? 'Admin' : 'User'}
    </span>
  );
}
