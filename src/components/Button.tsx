import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: "small" | "medium" | "large";
  empty?: boolean;
  fullWidth?: boolean;
}

const Button = ({
  children,
  size = "small",
  empty = false,
  fullWidth = false,
  ...rest
}: ButtonProps) => {
  const SizeClass = {
    small: "px-[23px] h-[36px]",
    medium: "px-[46.5px] h-[50px]",
    large: "px-[65px] h-[50px]",
  };

  return (
    <button
      className={`disabled:bg-gray100 rounded-[37px] text-15pt font-semibold ${SizeClass[size]} ${empty ? "border-[2px] border-blue bg-background text-blue" : "bg-blue text-white"} ${fullWidth ? "w-full" : "w-fit"}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
