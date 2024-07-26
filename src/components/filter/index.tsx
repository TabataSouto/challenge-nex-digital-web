import { Dispatch, SetStateAction } from "react";
import { IFilters } from "../../interfaces";
import useForm from "../../hooks/useForm";
import Input from "../input";
import Select from "../select";
// import Select from "../select";

interface IFilter {
  setFilters: Dispatch<SetStateAction<IFilters>>;
}

const Filter = ({ setFilters }: IFilter) => {
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

  return (
    <form>
      <Select
        label="Status"
        options={["Aprovado", "Reprovado", "	Em avaliação"]}
        {...status}
      />
      <Input label="CPF" type="number" placeholder="apenas números" {...cpf} />
      <Input label="Produto" type="text" {...product} />
      <div>
        <Input label="Data Inicio" type="date" {...startDate} />
        <Input label="Data Final" type="date" {...endDate} />
      </div>
      <div>
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
      <button type="button" onClick={handleFilter}>
        Filtrar
      </button>
      <button type="button" onClick={() => window.location.reload()}>
        Limpar Filtro
      </button>
    </form>
  );
};

export default Filter;
