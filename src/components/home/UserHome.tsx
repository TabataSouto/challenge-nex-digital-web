import { useEffect, useState } from "react";
import { GET_TRANSACTIONS } from "../../server/api";
import { IFilters, ITransactions } from "../../interfaces";
import Transactios from "../transactios";
import { getAccess } from "../../helpers/account";
import { currentValueMask, removeMaskMoney } from "../../helpers/money";
import styles from "./Home.module.css";

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
      const newResponse = response.filter((user) => user.cpf === cpf);
      setData(newResponse);
    })();
  }, [cpf, filters]);
  console.log(data.map((n) => removeMaskMoney(n.amountValue)));

  const totalAprovado = data.reduce((acc: number, value: ITransactions) => {
    if (value.status === "Aprovado") {
      return acc + removeMaskMoney(value.amountValue);
    }
    return acc;
  }, 0);

  return (
    <section>
      <Transactios data={data} setFilters={setFilters} role={role} />
      <div>
        {role === "user" && (
          <p className={styles.total}>
            Total de saldo aprovado:{" "}
            <span>{currentValueMask(totalAprovado.toString())}</span>
          </p>
        )}
      </div>
    </section>
  );
};

export default UserHome;
