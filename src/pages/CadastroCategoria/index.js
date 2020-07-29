import React, { useState } from "react";
import PageDefault from "../../components/PageDefault";
import { Link } from "react-router-dom";

import FormField from "../../components/FormField";

function CadastroCategoria() {
  const initia_values = {
    titulo: "",
    descricao: "",
    cor: "",
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(initia_values);

  const handleSubmit = (event) => {
    event.preventDefault();
    setCategorias([...categorias, values]);
    setValues(initia_values);
  };

  const setValue = (chave, valor) => {
    // chave: nome, descricao, bla, bli
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  };

  const handleChange = (event) => {
    setValue(event.target.getAttribute("name"), event.target.value);
  };

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.titulo}</h1>

      <form onSubmit={(event) => handleSubmit(event)}>
        <FormField
          label="Nome da Categoria"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="text"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <button type="submit"> Cadastrar </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria.titulo}${indice}`}>
            <h4 style={{ background: categoria.cor }}>{categoria.titulo}</h4>
            <span>{categoria.descricao}</span>
          </li>
        ))}
      </ul>

      <Link to="/cadastro/video">Video</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
