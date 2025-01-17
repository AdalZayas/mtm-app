import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const CheckBox = ({ label, ...props }: InputProps) => {
  return (
    <div className="flex space-x-4 space-y-4 items-baseline">
      <input {...props} id={props.id} name={props.id} className="form__input" />
      <label htmlFor={props.id} className="form__label">
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
