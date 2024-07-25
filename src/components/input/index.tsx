import { ComponentProps } from "react";

interface IInputProps extends ComponentProps<"input"> {
  label?: string;
}

const Input = ({ label, ...props }: IInputProps) => {
  return (
    <div>
      {label && (
        <label className="label" htmlFor={label}>
          {label}
        </label>
      )}
      <input
        className="label"
        id={label}
        autoComplete="current-password"
        {...props}
      />
    </div>
  );
};

export default Input;
