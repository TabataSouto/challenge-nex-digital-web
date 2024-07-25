import { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

import { USER_AUTH } from "../../server/api";
import { saveAuth } from "../../helpers/account";
import useForm from "../../hooks/useForm";
import Request from "../../server/request";

import Input from "../../components/input";
import Password from "../../components/password";
import Button from "../../components/button";

const LoginPage = () => {
  const navigate = useNavigate();
  const email = useForm();
  const password = useForm();

  const isDisabled = !email.value || !password.value;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { url, options } = USER_AUTH({
      email: email.value,
      password: password.value,
    });

    Request(url, options)
      .then(({ data }) => {
        saveAuth(data.token);
        navigate("/home");
      })
      .catch();
  };

  return (
    <section>
      <div>
        <h1>Seja bem-vindo(a) NOME</h1>
        <p>
          Ainda não tem conta? <Link to="/register">Cadastre-se</Link>
        </p>
        <form onSubmit={handleSubmit}>
          <Input placeholder="Endereço de e-mail" name="email" {...email} />
          <Password
            placeholder="Senha de acesso"
            name="password"
            {...password}
          />
          <Button disabled={isDisabled}>Entrar</Button>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
