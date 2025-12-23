import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: "primary" | "outline" | "ghost" | "secondary" | "dark";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  textColor?: string;
  className?: string;
  responsiveText?: boolean; 
  size?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant = "primary",
  icon,
  iconPosition = "left",
  textColor,
  className = "",
  responsiveText = false, 
  size = "sm",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-md px-4 py-1 text-sm outline-none font-semibold cursor-pointer";

  const variants = {
    primary: "bg-gradient-to-r from-blue-500 to-purple-600 text-white",
    outline: "border border-blue-500 text-blue-500 hover:bg-blue-50",
    ghost: "text-blue-600 hover:bg-blue-100",
    secondary: "border border-gray-300 text-black hover:bg-gray-50",
    dark: "text-white bg-black hover:bg-gray-800",
  };

  const customTextColor = textColor ? `text-[${textColor}]` : "";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${customTextColor} ${className}`}
      {...props}
    >
      {icon && iconPosition === "left" && icon}

      <span className={responsiveText ? "hidden sm:inline" : ""}>{text}</span>

      {icon && iconPosition === "right" && icon}

      
    </button>
  );
};

export default Button;
