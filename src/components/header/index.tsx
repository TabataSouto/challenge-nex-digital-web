import { getAccess, logout } from "../../helpers/account";
import styles from "./Header.module.css";

interface IHeaderProps {
  role?: string;
}

const Header = ({ role }: IHeaderProps) => {
  const {
    data: { name },
  } = getAccess();

  console.log(role);

  return (
    <header className={styles.header}>
      <div>
        <h1>{name}</h1>
        {/* { role === "user" && (

        )} */}
      </div>
      <button className={styles.button} onClick={() => logout()}>Sair</button>
    </header>
  );
};

export default Header;
