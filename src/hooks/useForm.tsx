import { ChangeEvent, useState } from "react";
import { types } from "../helpers/validatedFields";

type TypeKeys = keyof typeof types;

const useForm = (type?: TypeKeys) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  const validateValue = (value: string) => {
    // if (!value) {
    //   setError(!type ? "O campo deve ser preenchido" : `O campo ${type} deve ser preenchido`);
    // }

    if (type?.length) {
      const typeInfo = types[type];

      if ("regex" in typeInfo && !typeInfo.regex.test(value)) {
        setError(typeInfo.message);
      } else if ("minLength" in typeInfo && value.length < typeInfo.minLength) {
        setError(typeInfo.message);
      } else {
        setError(null);
      }
    }
  };

  const onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    // enquanto exisiter o erro, ele chama a função de validação
    if (error) validateValue(value);
    setValue(value);
  };

  return {
    value,
    error,
    onChange,
    onBlur: () => validateValue(value),
  };
};

export default useForm;
