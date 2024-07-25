import { ComponentProps } from "react";

interface IInputProps extends ComponentProps<"input"> {
  label?: string;
  error?: string | null;
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
        required
        {...props}
      />
      {props?.error && <p style={{ color: "red" }}>{props?.error}</p>}
    </div>
  );
};

export default Input;
