import { ComponentProps } from "react";

interface IInputProps extends ComponentProps<"input"> {
  label?: string;
  error?: string | null;
}

const Input = ({ label, ...props }: IInputProps) => {
  return (
    <div>
      {label && (
        <label htmlFor={label}>
          {label}
        </label>
      )}
      <input
        id={label}
        autoComplete="current-password"
        required
        {...props}
      />
      {props?.error && <p className="message">{props?.error}</p>}
    </div>
  );
};

export default Input;
