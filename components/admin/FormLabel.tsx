interface FormLabelProps {
  children: React.ReactNode;
  required?: boolean;
}

export function FormLabel({ children, required }: FormLabelProps) {
  return (
    <label className="flex items-start h-[20px] w-full">
      <span className="flex-1 font-['Segoe_UI'] text-[14px] leading-[20px] text-[#364153]">
        {children}
        {required && <span className="text-red-500 ml-1">*</span>}
      </span>
    </label>
  );
}
