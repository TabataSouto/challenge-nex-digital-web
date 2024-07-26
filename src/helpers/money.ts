export const removeMaskMoney = (value: string) => {
  if (value) {
    return parseFloat(
      value.replace(/\./g, "").replace(",", ".").replace("R$", "")
    );
  } else {
    return 0;
  }
};

export const currentValueMask = (value: string) => {
  return parseFloat(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
