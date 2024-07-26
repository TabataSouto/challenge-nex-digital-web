import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";

import { SEND_UPLOAD } from "../../server/api";
import Request from "../../server/request";
import { AiOutlineLoading } from "react-icons/ai";
import Transactios from "../transactiosAdmin";

const AdminHome = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    target.files && setFile(target?.files[0]);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!file) toast.error("Nenhum documento enviado");
    else {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", file);

      const { url, options } = SEND_UPLOAD(formData);

      Request(url, options)
        .then(({ data }) => {
          toast.success(data.message);
          setLoading(false);
          setFile(null);
          window.location.reload();
        })
        .catch((error) => {
          toast.error(error.response?.data?.message);
          setLoading(false);
        });
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>Upload de Transações</label>
        <input type="file" accept=".xlsx, .xls" onChange={handleChange} />
        <button disabled={loading || !file}>
          {loading ? <AiOutlineLoading /> : "Enviar arquivo"}
        </button>
      </form>
      <Transactios />
    </section>
  );
};

export default AdminHome;
