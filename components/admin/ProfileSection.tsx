import Image from 'next/image';

interface ProfileSectionProps {
  name?: string;
  position?: string;
  institution?: string;
  email?: string;
  phone?: string;
  language?: string;
  timezone?: string;
}

export function ProfileSection({
  name = 'Endru Darmawan',
  position = 'Admin 1',
  institution = 'Indonesia',
  email = 'jamanbuntutan12@gmail.com',
  phone = '+628237842395',
  language = 'Bahasa Indonesia',
  timezone = 'GMT +7:00 (Jakarta)',
}: ProfileSectionProps) {
  const profileIcon = 'https://www.figma.com/api/mcp/asset/48e972c9-b8c6-4572-9148-1fe24ad03edf';
  const saveIcon = 'https://www.figma.com/api/mcp/asset/86684c35-bf82-4183-8844-22503b9d74f6';
  const profileImage = 'https://www.figma.com/api/mcp/asset/b1583a6b-0778-4c9d-8c77-220c84618d31';

  return (
    <div className="bg-white border border-[#f3f4f6] rounded-2xl shadow-lg overflow-hidden">
      {/* Header dengan gradient hijau */}
      <div className="bg-gradient-to-r from-[#009966] to-[#00bc7d] px-6 pt-4 h-[93.594px]">
        <div className="flex items-center gap-3">
          <div className="bg-[rgba(255,255,255,0.2)] rounded-[16.4px] w-10 h-10 flex items-center justify-center">
            <Image src={profileIcon} alt="" width={20} height={20} />
          </div>
          <div>
            <h2 className="text-white text-[30px] font-bold leading-9 tracking-[-0.3px]">
              Profil Admin
            </h2>
            <p className="text-[#d0fae5] text-base leading-[25.6px]">
              Informasi pribadi dan kontak
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex gap-6">
        {/* Left Column - Photo & Language/Time Settings */}
        <div className="w-[417px] border border-[#f3f4f6] rounded-[16.4px] bg-gradient-to-br from-[#f9fafb] to-white p-6">
          <p className="text-[#364153] text-sm mb-6">Foto Profil</p>
          
          {/* Profile Photo */}
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 rounded-full border-4 border-[#d0fae5] shadow-lg overflow-hidden p-1">
              <Image
                src={profileImage}
                alt="Profile"
                width={120}
                height={120}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Waktu dan Bahasa */}
          <div className="border-t border-[#e5e7eb] pt-6 space-y-4">
            <h3 className="text-[#364153] text-xl font-semibold">
              Waktu dan Bahasa
            </h3>
            
            {/* Pilih Bahasa */}
            <div>
              <label className="text-[#6a7282] text-xs block mb-2">
                Pilih Bahasa
              </label>
              <select 
                className="w-full h-[39px] bg-white border border-[#e5e7eb] rounded-[10px] px-4 text-sm text-[#101828]"
                defaultValue={language}
              >
                <option>Bahasa Indonesia</option>
                <option>English</option>
              </select>
            </div>

            {/* Zona Waktu */}
            <div>
              <label className="text-[#6a7282] text-xs block mb-2">
                Zona Waktu
              </label>
              <select 
                className="w-full h-[39px] bg-white border border-[#e5e7eb] rounded-[10px] px-4 text-sm text-[#101828]"
                defaultValue={timezone}
              >
                <option>GMT +7:00 (Jakarta)</option>
                <option>GMT +8:00 (Bali)</option>
                <option>GMT +9:00 (Jayapura)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Right Column - Information Form */}
        <div className="flex-1 border border-[#f3f4f6] rounded-[16.4px] bg-gradient-to-br from-[#f9fafb] to-white p-6">
          <h3 className="text-[#364153] text-xl font-semibold mb-6">
            Informasi Umum
          </h3>

          {/* Grid Form */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Nama */}
            <div>
              <label className="text-[#6a7282] text-xs block mb-2">Nama</label>
              <input
                type="text"
                defaultValue={name}
                className="w-full h-[46px] bg-white border border-[#e5e7eb] rounded-[10px] px-4 text-base text-[#101828]"
              />
            </div>

            {/* Jabatan */}
            <div>
              <label className="text-[#6a7282] text-xs block mb-2">
                Jabatan
              </label>
              <input
                type="text"
                defaultValue={position}
                className="w-full h-[46px] bg-[#f9fafb] border border-[#e5e7eb] rounded-[10px] px-4 text-base text-[#6a7282]"
                readOnly
              />
            </div>

            {/* Institusi */}
            <div>
              <label className="text-[#6a7282] text-xs block mb-2">
                Institusi
              </label>
              <input
                type="text"
                defaultValue={institution}
                className="w-full h-[46px] bg-white border border-[#e5e7eb] rounded-[10px] px-4 text-base text-[#101828]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-[#6a7282] text-xs block mb-2">Email</label>
              <input
                type="email"
                defaultValue={email}
                className="w-full h-[46px] bg-white border border-[#e5e7eb] rounded-[10px] px-4 text-base text-[#101828]"
              />
            </div>

            {/* No. Telp/Handphone */}
            <div className="col-span-1">
              <label className="text-[#6a7282] text-xs block mb-2">
                No. Telp/Handphone
              </label>
              <input
                type="tel"
                defaultValue={phone}
                className="w-full h-[46px] bg-white border border-[#e5e7eb] rounded-[10px] px-4 text-base text-[#101828]"
              />
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button className="bg-gradient-to-r from-[#009966] to-[#00bc7d] text-white h-11 px-6 rounded-[16.4px] flex items-center gap-2 hover:opacity-90 transition-opacity">
              <Image src={saveIcon} alt="" width={16} height={16} />
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
