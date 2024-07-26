import { logout } from "../../helpers/account";

const Header = () => {
  return (
    <header>
      <button onClick={() => logout()}>Sair</button>
    </header>
  );
};

export default Header;
