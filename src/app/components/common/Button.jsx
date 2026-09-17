"use client";

import React from "react";

const Button = ({
  children,
  type,
  variant = "primary",
  className = "",
  onClick,
  ...props
}) => {
  const baseStyle =
    "inline-flex rounded-xl px-6 py-4 text-sm transition-all duration-500";

  const styles = {
    primary: "text-xl text-#fff hover:bg-[rgba(0,0,0,0.1)]",
    secondary: "text-xl text-blue-400 hover:bg-blue-600",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
