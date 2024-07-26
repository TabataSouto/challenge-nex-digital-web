import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

import { USER_AUTH } from "../../server/api";
import { saveAuth } from "../../helpers/account";
import useForm from "../../hooks/useForm";
import Request from "../../server/request";

import Input from "../../components/input";
import Password from "../../components/password";
import Button from "../../components/button";
import { AiOutlineLoading } from "react-icons/ai";
import styles from "./Login.module.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const email = useForm();
  const password = useForm();

  const [loading, setLoading] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const { url, options } = USER_AUTH({
      email: email.value,
      password: password.value,
    });

    Request(url, options)
      .then(({ data }) => {
        saveAuth(data.token);
        navigate("/home");
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error.response?.data?.message);
        setLoading(false);
      });
  };

  return (
    <section className={styles.container}>
      <main className={styles.main}>
        <div className={styles.title}>
          <h1>Seja bem-vindo(a)</h1>
          <p>
            Ainda não tem conta? <Link to="/register">Cadastre-se</Link>
          </p>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input
            placeholder="Endereço de e-mail"
            name="email"
            type="email"
            {...email}
          />
          <Password
            placeholder="Senha de acesso"
            name="password"
            {...password}
          />
          <Button disabled={!email.value || !password.value || loading}>
            {loading ? <AiOutlineLoading /> : "Entrar"}
          </Button>
        </form>
      </main>
    </section>
  );
};

export default LoginPage;
