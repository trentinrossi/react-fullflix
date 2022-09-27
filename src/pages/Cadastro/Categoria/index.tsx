import React, { useState } from "react";
import PageTemplate from "../../../components/PageTemplate";
import { Link } from "react-router-dom";

function CadastroCategoria() {
  const initialValues = {
    nome: "",
    descricao: "",
    cor: "",
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(key: any, value: any) {
    setValues({ ...values, [key]: value });
  }

  function handleChange(event: any) {
    setValue(event.target.getAttribute("name"), event.target.value);
  }

  return (
    <PageTemplate>
      <h1>Cadastro Categoria</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setCategorias([...categorias, values]);
          setValues(initialValues);
        }}
      >
        <div>
          <label id="name">Nome:</label>
          <input
            type="text"
            name="nome"
            id="nome"
            value={values.nome}
            onChange={handleChange}
          ></input>
        </div>

        <div>
          <label id="descricao">Descrição:</label>
          <input
            type="text"
            name="descricao"
            id="descricao"
            value={values.descricao}
            onChange={handleChange}
          ></input>
        </div>

        <div>
          <label id="cor">Cor:</label>
          <input
            type="color"
            name="cor"
            id="cor"
            value={values.cor}
            onChange={handleChange}
          ></input>
        </div>

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
