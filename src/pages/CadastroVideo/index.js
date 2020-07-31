import React, { useState } from "react";
import PageDefault from "../../components/PageDefault";
import { Link } from "react-router-dom";

import FormField from "../../components/FormField";
import Button from '../../components/Button';

function CadastroVideo() {
  const initia_values = {
    titulo: "",
    descricao: "",
    cor: "",
  };

  const [videos, setVideos] = useState([]);
  const [values, setValues] = useState(initia_values);

  const handleSubmit = (event) => {
    event.preventDefault();
    setVideos([...videos, values]);
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
      <h1>Cadastro do Video:</h1>

      <form onSubmit={(event) => handleSubmit(event)}>
        <FormField
          label="Nome do Video"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
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

        <Button type="submit"> Cadastrar </Button>
      </form>

      <ul>
        {videos.map((video, indice) => (
          <li key={`${video.titulo}${indice}`}>
            <h4 style={{ background: video.cor }}>{video.titulo}</h4>
            <span>{video.descricao}</span>
          </li>
        ))}
      </ul>

      <Link to="/cadastro/categoria">Categoria</Link>
    </PageDefault>
  );
}

export default CadastroVideo;
