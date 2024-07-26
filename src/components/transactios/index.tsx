import { Dispatch } from "react";
import Filter from "../filter";
import { IFilters, ITransactions } from "../../interfaces";
import styles from "./Transactions.module.css";

interface ITransactionsProps {
  data: ITransactions[];
  role: string;
  setFilters: Dispatch<React.SetStateAction<IFilters>>;
}

const Transactios = ({ data, role, setFilters }: ITransactionsProps) => {
  return (
    <div>
      <Filter setFilters={setFilters} role={role} />
      <hr className={styles.divider} />
      <div className={styles.container}>
        {data?.length ? (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>CPF</th>
                <th>Produto</th>
                <th>Valor</th>
                <th>Data Transação</th>
                <th>Status</th>
              </tr>
            </thead>
            {data?.map((transaction: ITransactions) => (
              <tbody key={transaction.id} style={{ textAlign: "center" }}>
                <tr>
                  <td>{transaction.cpf}</td>
                  <td>{transaction.product}</td>
                  <td>{transaction.amountValue}</td>
                  <td>{transaction.transactionDate}</td>
                  <td>{transaction.status}</td>
                </tr>
              </tbody>
            ))}
          </table>
        ) : (
          <h1>Não existem transações no momento!</h1>
        )}
      </div>
    </div>
  );
};

export default Transactios;
