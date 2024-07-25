import { ComponentProps, useState } from "react";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";

interface IPassword extends ComponentProps<"input"> {
  label?: string;
  error?: string | null;
}

const Password = ({ label, ...props }: IPassword) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
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
          // className={styles.visible}
          size={20}
          onClick={() => setShowPassword(!showPassword)}
        />
      ) : (
        <MdOutlineVisibility
          // className={styles.visible}
          size={20}
          onClick={() => setShowPassword(!showPassword)}
        />
      )}
      {props?.error && <p style={{ color: "red" }}>{props?.error}</p>}
    </div>
  );
};

export default Password;
