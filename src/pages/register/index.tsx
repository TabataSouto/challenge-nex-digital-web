import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AiOutlineLoading } from "react-icons/ai";

import { USER_REGISTER } from "../../server/api";
import Request from "../../server/request";
import useForm from "../../hooks/useForm";
import Input from "../../components/input";
import Password from "../../components/password";
import Button from "../../components/button";
import styles from "./Register.module.css";

const RegisterPage = () => {
  const navigate = useNavigate();
  const name = useForm("name");
  const email = useForm("email");
  const password = useForm("password");
  const cpf = useForm("cpf");

  const [loading, setLoading] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { url, options } = USER_REGISTER({
      name: name.value,
      email: email.value,
      cpf: cpf.value,
      password: password.value,
    });

    Request(url, options)
      .then(({ data }) => {
        toast.success(data.message);
        setLoading(false);
        navigate("/login");
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
          <p>
            Já tem uma conta? Faça <Link to="/login">login</Link>
          </p>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input
            label="Nome"
            placeholder="nome Completo"
            name="name"
            type="text"
            {...name}
          />
          <Input
            label="E-mail"
            placeholder="email de acesso"
            name="email"
            type="email"
            {...email}
          />
          <Input
            label="CPF"
            placeholder="informe seu cpf separado por pontos e traço"
            name="cpf"
            type="text"
            {...cpf}
          />
          <Password
            label="Senha"
            placeholder="informe uma senha de acesso"
            name="password"
            {...password}
          />
          <Button disabled={!email.value || !password.value || loading}>
            {loading ? <AiOutlineLoading /> : "Cadastrar"}
          </Button>
        </form>
      </main>
    </section>
  );
};

export default RegisterPage;
