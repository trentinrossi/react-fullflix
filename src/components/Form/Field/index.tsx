import React from "react";

interface IProps {
  type: string;
  value: string;
  onChange: (event: any) => void;
  name: string;
  label: string;
}

function FormField({ type, value, onChange, name, label }: IProps) {
  return (
    <div>
      <label id={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
}

export default FormField;
