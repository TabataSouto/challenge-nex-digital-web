export const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preencha um e-mail válido",
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*\-+?]{8,}$/,
    message: `A senha precisa ter:\n1 caracter maíusculo\n1 caracter minúsculo\n1 dígito\nMínimo de 8 caracteres`,
  },
  name: {
    minLength: 6,
    message: "O nome precisa ter pelo menos 6 letras",
  },
  cpf: {
    minLength: 14,
    message: "Por favor, digite um CPF válido",
  },
};
