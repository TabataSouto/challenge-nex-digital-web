import { GET_TRANSACTIONS } from "../../server/api";
import { IFilters, ITransactions } from "../../interfaces";
import Filter from "../filter";
import { useEffect, useState } from "react";

const initialState = {
  status: "",
  product: "",
  cpf: "",
  startDate: "",
  endDate: "",
  minValue: "",
  maxValue: "",
};

const Transactios = () => {
  const [filters, setFilters] = useState<IFilters>(initialState);

  const [data, setData] = useState<ITransactions[] | []>([]);

  useEffect(() => {
    (async () => {
      const response = await GET_TRANSACTIONS(filters);
      setData(response);
    })();
  }, [filters]);

  return (
    <div>
      <Filter setFilters={setFilters} />
      {data?.length ? (
        <table>
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
  );
};

export default Transactios;
