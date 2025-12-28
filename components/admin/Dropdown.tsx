interface DropdownProps {
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  name?: string;
}

export function Dropdown({ 
  options, 
  value, 
  onChange, 
  placeholder = "Pilih opsi",
  name 
}: DropdownProps) {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="border border-[#e5e7eb] rounded-[10px] h-[43px] w-full px-[16px] text-[14px] text-[#0a0a0a] bg-white focus:outline-none focus:border-[#009966] transition-colors appearance-none cursor-pointer"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23364153' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 16px center',
        paddingRight: '40px'
      }}
    >
      <option value="" disabled>{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
