import { ChangeEvent, useState } from "react";
import { types } from "../helpers/validatedFields";

type TypeKeys = keyof typeof types;

const useForm = (type?: TypeKeys) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  const validateValue = (value: string): boolean => {
    if (!type) return false;

    if (type?.length) {
      const typeInfo = types[type];

      if ("regex" in typeInfo && !typeInfo.regex.test(value)) {
        setError(typeInfo.message);
        return false;
      } else if ("minLength" in typeInfo && value.length < typeInfo.minLength) {
        setError(typeInfo.message);
        return false;
      } else {
        setError(null);
        return true;
      }
    }
    return true;
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
    validationValue: () => validateValue(value),
    onBlur: () => validateValue(value),
  };
};

export default useForm;
