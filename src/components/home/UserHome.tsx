import { useEffect, useState } from "react";
import { GET_TRANSACTIONS } from "../../server/api";
import { IFilters, ITransactions } from "../../interfaces";
import Transactios from "../transactiosUser";
import { getAccess } from "../../helpers/account";

const UserHome = () => {
  const initialState = {
    status: "",
    product: "",
    cpf: "",
    startDate: "",
    endDate: "",
    minValue: "",
    maxValue: "",
  };

  const { cpf, role } = getAccess().data;
  const [filters, setFilters] = useState<IFilters>(initialState);
  const [data, setData] = useState<ITransactions[] | []>([]);

  useEffect(() => {
    (async () => {
      const response = (await GET_TRANSACTIONS(filters)) as ITransactions[];
      setData(response.filter((user) => user.cpf === cpf));
    })();
  }, [cpf, filters]);

  return (
    <section>
      <Transactios data={data} setFilters={setFilters} role={role} />
    </section>
  );
};

export default UserHome;
