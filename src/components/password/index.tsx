import { ComponentProps, useState } from "react";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import styles from "./Password.module.css";

interface IPassword extends ComponentProps<"input"> {
  label?: string;
  error?: string | null;
}

const Password = ({ label, ...props }: IPassword) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.password}>
      {label && <label htmlFor={label}>{label}</label>}
      <input
        type={showPassword ? "text" : "password"}
        id={label}
        autoComplete="current-password"
        required
        {...props}
      />
      {showPassword ? (
        <MdOutlineVisibilityOff
          className={styles.visible}
          size={20}
          onClick={() => setShowPassword(!showPassword)}
        />
      ) : (
        <MdOutlineVisibility
          className={styles.visible}
          size={20}
          onClick={() => setShowPassword(!showPassword)}
        />
      )}
      {props?.error && <p className="message">{props?.error}</p>}
    </div>
  );
};

export default Password;
