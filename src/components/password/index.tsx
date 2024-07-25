import { ComponentProps, useState } from "react";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";

interface IPassword extends ComponentProps<"input"> {
  label: string;
}

const Password = ({ label, ...props }: IPassword) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        type={showPassword ? "text" : "password"}
        id={label}
        autoComplete="current-password"
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
    </div>
  );
};

export default Password;
