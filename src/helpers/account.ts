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

export const getAccess = () => {
  const toParse = getAuth()?.split(".")[1];
  let result: unknown;

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
  return result;
};
