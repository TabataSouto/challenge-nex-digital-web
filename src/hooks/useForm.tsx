import { ChangeEvent, useState } from "react";

const useForm = (type?: string) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  const validateValue = (value: string) => {
    if (!value) {
      setError(`O campo ${type} deve ser preenchido`);
    }
  };

  const onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    // enquanto exisiter o erro, ele chama a função de validação
    if (error) validateValue(value);
    setValue(value);
  };

  return { value, error, onChange, onBlur: () => validateValue(value) };
};

export default useForm;
