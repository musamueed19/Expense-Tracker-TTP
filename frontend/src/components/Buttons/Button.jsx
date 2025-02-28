import React from "react";

const Button = ({ type, children, onClick, className = "", variant }) => {
  // const  classes = `button ${className} ${variant}`.trim().split(' ').join(' ');
  const variantClass =
    variant === "primary"
      ? "border-primary text-primary hover:bg-primary hover:text-white active:bg-violet-700 active:ring-2 active:ring-primary/40 border-2"
      : variant === "alternate"
      ? "border-primary text-white bg-primary hover:text-primary hover:bg-transparent active:ring-2 active:ring-primary/40 border-2"
      : "";

  return (
    <button
      onClick={(e) => onClick(e)}
      className={`mt-2 w-full text-[15px] px-4 py-3 text-center cursor-pointer font-semibold outline-none rounded-xl transition-all duration-150 ${variantClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
