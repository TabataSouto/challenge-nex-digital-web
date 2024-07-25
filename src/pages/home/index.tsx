import { getAccess } from "../../helpers/account";
import UserHome from "../../components/home/UserHome";
import AdminHome from "../../components/home/AdminHome";

const Home = () => {
  const {
    data: { role },
  } = getAccess();

  return <section>{role === "user" ? <UserHome /> : <AdminHome />}</section>;
};

export default Home;
