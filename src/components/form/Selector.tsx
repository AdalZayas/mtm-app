import React from "react";

interface SelectorProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: {
    value: string;
    label: string;
  }[];
}

const Selector = ({ label, options, ...props }: SelectorProps) => {
  return (
    <div className="form__group">
      <label htmlFor={props.id} className="form__label">
        {label}
      </label>
      <select
        className="form__select"
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
