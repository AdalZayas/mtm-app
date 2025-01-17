"use client";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color?: "primary" | "secondary" | "danger";
  size?: "md" | "sm" | "lg";
  full?: boolean;
}

const Buttton: React.FC<ButtonProps> = ({
  text,
  color = "primary",
  size = "md",
  ...props
}) => {
  let buttonClasses = `button`;

  const colorClasses = {
    primary: "button--primary",
    secondary: "button--secondary",
    danger: "button--danger",
  };

  const sizeClasses = {
    md: "button--size-md",
    sm: "button--size-sm",
    lg: "button--size-lg",
  };

  if (colorClasses[color]) {
    buttonClasses += ` ${colorClasses[color]}`;
  }

  if (sizeClasses[size]) {
    buttonClasses += ` ${sizeClasses[size]}`;
  }

  if (props.full) {
    buttonClasses += ` button--full`;
  }

  return (
    <button
      className={buttonClasses}
      onClick={props.onClick}
      disabled={props.disabled}
      type={props.type}
    >
      {text}
    </button>
  );
};

export default Buttton;
