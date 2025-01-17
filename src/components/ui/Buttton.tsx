"use client";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color?: "primary" | "secondary" | "danger";
  size?: "default" | "sm" | "lg" | "icon" | "defaultFull" | "smFull" | "lgFull";
}

const Buttton: React.FC<ButtonProps> = ({
  text,
  color = "primary",
  size = "md",
  ...props
}) => {
  const buttonClasses = [
    "button",
    `button--${color}`,
    `button--size-${size}`,
    props.className,
    size?.includes("Full") ? "button--full" : "",
  ]
    .filter(Boolean)
    .join(" ");

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
