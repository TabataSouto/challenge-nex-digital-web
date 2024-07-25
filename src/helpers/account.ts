import { IGetAccess } from "../interfaces";

const KEY_AUTH = "access_token";

export const saveAuth = (token: string) => {
  localStorage.setItem(KEY_AUTH, token);
};

export const getAuth = () => {
  const token = localStorage.getItem(KEY_AUTH);
  return token ? token : null;
};

export const logout = () => {
  localStorage.removeItem(KEY_AUTH);
};

export const getAccess = (): IGetAccess => {
  const toParse = getAuth()?.split(".")[1];
  let result: string | null = null;

  if (toParse) {
    try {
      // Decodifica a string Base64
      const binaryStr = atob(toParse);
      // Converte a string binária em um array de bytes (Uint8Array)
      const bytes = Uint8Array.from(binaryStr, (char) => char.charCodeAt(0));
      // Usa TextDecoder para decodificar o array de bytes em UTF-8
      result = new TextDecoder("utf-8").decode(bytes);
    } catch (error) {
      console.error("Erro ao decodificar o token:", error);
    }
  }

  // Garante que `result` seja uma string antes de chamar `JSON.parse`
  if (result) {
    return JSON.parse(result) as IGetAccess;
  }
  
  // Retorna um valor padrão se a decodificação falhar
  return {} as IGetAccess;
};
