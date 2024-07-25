import { ComponentProps, ReactNode } from "react";

interface IButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
}

const Button = ({ children, ...props }: IButtonProps) => {
  return (
    <button type="submit" {...props}>
      {children}
    </button>
  );
};

export default Button;
