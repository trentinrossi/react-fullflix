import React, { useState } from "react";
import PageTemplate from "../../../components/PageTemplate";
import { Link } from "react-router-dom";
import FormField from "../../../components/Form/Field";

interface ICategoria {
  nome: string;
  descricao: string;
  cor: string;
}

function CadastroCategoria() {
  const initialValues: ICategoria = {
    nome: "",
    descricao: "",
    cor: "",
  };

  const [categorias, setCategorias] = useState<ICategoria[]>([]);
  const [values, setValues] = useState(initialValues);

  function setValue(key: any, value: any) {
    setValues({ ...values, [key]: value });
  }

  function handleChange(event: any) {
    setValue(event.target.getAttribute("name"), event.target.value);
  }

  return (
    <PageTemplate>
      <h1>Cadastro de Categorias</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setCategorias([...categorias, values]);
          setValues(initialValues);
        }}
      >
        <FormField
          type="text"
          name="nome"
          label="Nome:"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          type="textarea"
          name="descricao"
          label="Descrição"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          type="color"
          name="cor"
          label="Cor:"
          value={values.cor}
          onChange={handleChange}
        />

        <button>Salvar</button>
      </form>

      <ul>
        {categorias.map((categoria, index) => {
          return (
            <li key={index}>
              {categoria.nome} - {categoria.descricao}
            </li>
          );
        })}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageTemplate>
  );
}

export default CadastroCategoria;
