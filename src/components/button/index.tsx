import { ComponentProps, ReactNode } from "react";
import styles from "./Button.module.css";

interface IButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
}

const Button = ({ children, ...props }: IButtonProps) => {
  return (
    <button className={styles.button} type="submit" {...props}>
      {children}
    </button>
  );
};

export default Button;
