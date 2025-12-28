import Image from 'next/image';
import { UserStatusBadge } from './UserStatusBadge';
import { ActionButton } from './ActionButton';

interface User {
  id: string;
  name: string;
  email: string;
  username: string;
  joinDate: string;
  role: 'admin' | 'user';
  avatar?: string;
  avatarColor: string;
  avatarInitials: string;
}

interface UserManagementTableProps {
  users: User[];
  onPromote?: (userId: string) => void;
  onDemote?: (userId: string) => void;
  onBan?: (userId: string) => void;
}

export function UserManagementTable({
  users,
  onPromote,
  onDemote,
  onBan,
}: UserManagementTableProps) {
  const userIcon = 'https://www.figma.com/api/mcp/asset/d8002a45-7f9d-4710-a671-100b05f9fb12';
  const usersCountIcon = 'https://www.figma.com/api/mcp/asset/1f580d7d-6c83-4420-b957-d21c774bf920';
  const infoIcon = 'https://www.figma.com/api/mcp/asset/7857c093-8c87-4f83-9530-5bb92c28e99b';

  return (
    <div className="bg-white border border-[#f3f4f6] rounded-2xl shadow-lg overflow-hidden">
      {/* Header dengan gradient orange */}
      <div className="bg-gradient-to-r from-[#ff6900] to-[#ff8904] px-6 pt-4 h-[93.594px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-[rgba(255,255,255,0.2)] rounded-[16.4px] w-10 h-10 flex items-center justify-center">
              <Image src={userIcon} alt="" width={20} height={20} />
            </div>
            <div>
              <h2 className="text-white text-[30px] font-bold leading-9 tracking-[-0.3px]">
                User Management
              </h2>
              <p className="text-[#ffedd4] text-base leading-[25.6px]">
                Kelola akun pengguna dan hak akses
              </p>
            </div>
          </div>
          <div className="bg-[rgba(255,255,255,0.2)] border border-[rgba(255,255,255,0.3)] h-[42px] px-[17px] rounded-[10px] flex items-center gap-2">
            <Image src={usersCountIcon} alt="" width={16} height={16} />
            <p className="text-white text-base">{users.length} Users</p>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="p-6">
        <div className="border border-[#e5e7eb] rounded-[16.4px] overflow-hidden">
          <table className="w-full">
            <thead className="bg-[#f9fafb] border-b border-[#e5e7eb]">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-bold text-[#4a5565]">
                  User
                </th>
                <th className="text-left px-6 py-3 text-xs font-bold text-[#4a5565]">
                  Email
                </th>
                <th className="text-left px-6 py-3 text-xs font-bold text-[#4a5565]">
                  Username
                </th>
                <th className="text-left px-6 py-3 text-xs font-bold text-[#4a5565]">
                  Tanggal Bergabung
                </th>
                <th className="text-left px-6 py-3 text-xs font-bold text-[#4a5565]">
                  Status
                </th>
                <th className="text-left px-6 py-3 text-xs font-bold text-[#4a5565]">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {users.map((user, index) => (
                <tr
                  key={user.id}
                  className={index !== users.length - 1 ? 'border-b border-[#e5e7eb]' : ''}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white text-base"
                        style={{ backgroundColor: user.avatarColor }}
                      >
                        {user.avatarInitials}
                      </div>
                      <p className="text-base text-[#101828] leading-[25.6px]">
                        {user.name}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-base text-[#4a5565] leading-[25.6px]">
                      {user.email}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-base text-[#101828] leading-[25.6px]">
                      {user.username}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-base text-[#4a5565] leading-[25.6px]">
                      {user.joinDate}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <UserStatusBadge status={user.role} />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {user.role === 'admin' ? (
                        <>
                          <ActionButton
                            variant="demote"
                            onClick={() => onDemote?.(user.id)}
                          />
                          <ActionButton
                            variant="ban"
                            onClick={() => onBan?.(user.id)}
                          />
                        </>
                      ) : (
                        <>
                          <ActionButton
                            variant="promote"
                            onClick={() => onPromote?.(user.id)}
                          />
                          <ActionButton
                            variant="ban"
                            onClick={() => onBan?.(user.id)}
                          />
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Info Box */}
        <div className="mt-6 bg-[#eff6ff] border border-[#bedbff] rounded-[16.4px] p-[17px]">
          <div className="flex gap-3">
            <Image src={infoIcon} alt="" width={20} height={20} className="shrink-0 mt-0.5" />
            <div>
              <p className="text-base text-[#101828] leading-[25.6px] mb-1">
                Informasi User Management
              </p>
              <ul className="space-y-1 text-xs text-[#4a5565] leading-4">
                <li>• Admin memiliki akses penuh ke semua fitur dashboard</li>
                <li>• User hanya dapat melakukan booking dan melihat riwayat pemesanan mereka</li>
                <li>• Anda dapat mengubah hak akses user kapan saja</li>
                <li>• User yang di-ban tidak akan bisa mengakses sistem</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
