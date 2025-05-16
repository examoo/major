import { forwardRef } from "react";

const variantClasses = {
  default: "bg-black text-white hover:bg-gray-800",
  outline: "border border-black text-black hover:bg-gray-100",
};

const Button = (
  { className = "", variant = "default", type = "button", ...props },
  ref
) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2";
  const variantClass = variantClasses[variant] || "";
  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClass} ${className}`}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(Button);
