import { Dispatch, SetStateAction } from "react";
import { IFilters } from "../../interfaces";
import useForm from "../../hooks/useForm";
import Input from "../input";
import Select from "../select";
import styles from "./Filter.module.css";

interface IFilter {
  setFilters: Dispatch<SetStateAction<IFilters>>;
  role: string;
}

const Filter = ({ setFilters, role }: IFilter) => {
  const status = useForm();
  const product = useForm();
  const cpf = useForm();
  const startDate = useForm();
  const endDate = useForm();
  const minValue = useForm();
  const maxValue = useForm();

  const handleFilter = () => {
    setFilters({
      status: status.value || "",
      product: product.value || "",
      cpf: cpf.value || "",
      startDate: startDate.value || "",
      endDate: endDate.value || "",
      minValue: minValue.value || "",
      maxValue: maxValue.value || "",
    });
  };
  console.log(role);
  return (
    <form className={styles.form}>
      <div className={styles.fields}>
        <Select
          label="Status"
          options={["Aprovado", "Reprovado", "	Em avaliação"]}
          {...status}
        />
        {role === "admin" && (
          <Input
            label="CPF"
            type="number"
            placeholder="apenas números"
            {...cpf}
          />
        )}
        {role === "admin" && <Input label="Produto" type="text" {...product} />}
      </div>
      {role === "admin" && (
        <div className={styles.fields}>
          <Input
            label="Valor mínimo"
            type="number"
            placeholder="apenas números"
            {...minValue}
          />
          <Input
            label="Valor máximo"
            type="number"
            placeholder="apenas números"
            {...maxValue}
          />
        </div>
      )}
      <div className={styles.fields}>
        <Input label="A partir do dia" type="date" {...startDate} />
        <Input label="Atpe o dia" type="date" {...endDate} />
      </div>
      <div className={`${styles.fields} ${styles.button}`}>
        <button type="button" onClick={handleFilter}>
          Filtrar
        </button>
        <button type="button" onClick={() => window.location.reload()}>
          Limpar Filtro
        </button>
      </div>
    </form>
  );
};

export default Filter;
