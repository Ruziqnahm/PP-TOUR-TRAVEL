interface TextInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'number';
  name?: string;
}

export function TextInput({ 
  placeholder, 
  value, 
  onChange, 
  type = 'text',
  name 
}: TextInputProps) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border border-[#e5e7eb] rounded-[10px] h-[42px] w-full px-[16px] py-[10px] text-[14px] text-[#0a0a0a] placeholder:text-[rgba(10,10,10,0.5)] focus:outline-none focus:border-[#009966] transition-colors"
    />
  );
}
