import { useNavigate } from "react-router-dom";
import { logout } from "../../helpers/account";

const Home = () => {
  const navigate = useNavigate();

  const onClick = () => {
    logout();
    navigate("/login");
  };
  return (
    <section>
      <h1>Home</h1>
      <button type="button" onClick={onClick}>
        Sair
      </button>
    </section>
  );
};

export default Home;
