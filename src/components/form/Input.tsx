import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = ({ label, ...props }: InputProps) => {
  return (
    <div className="form__group">
      <label htmlFor={props.id} className="form__label">
        {label}
      </label>
      <input
        {...props}
        id={props.id}
        name={props.id}
        className="form__input"
      />
    </div>
  );
};

export default Input;
