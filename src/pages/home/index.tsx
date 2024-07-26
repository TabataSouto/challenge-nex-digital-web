import { getAccess } from "../../helpers/account";
import UserHome from "../../components/home/UserHome";
import AdminHome from "../../components/home/AdminHome";
import Header from "../../components/header";

const Home = () => {
  const {
    data: { role },
  } = getAccess();

  return (
    <section>
      <Header role={role} />
      {role === "user" ? <UserHome /> : <AdminHome />}
    </section>
  );
};

export default Home;
