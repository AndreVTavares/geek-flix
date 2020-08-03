import React, { useState, useEffect } from "react";
import PageDefault from "../../components/PageDefault";
import { Link } from "react-router-dom";

import FormField from "../../components/FormField";
import Button from "../../components/Button";

import categoriasRepository from "../../repositories/categorias";
import useForm from "../../hooks/useForm";

function CadastroCategoria() {
  const initial_values = {
    titulo: "",
    descricao: "",
    cor: "",
  };

  const { handleChange, clearForm, values } = useForm(initial_values);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos().then((respostaCategorias) => {
      console.log(respostaCategorias);
      setCategorias([...respostaCategorias]);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setCategorias([...categorias, values]);
    clearForm();
  };

  return (
    <PageDefault>
      <h1>Cadastro de Categoria:</h1>

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
        {categorias.length === 0 ? (
          <div>Loading...</div>
        ) : (
          categorias.map((categoria, indice) => (
            <li key={`${categoria.titulo}${indice}`}>
              <h4 style={{ background: categoria.cor }}>{categoria.titulo}</h4>
              <span>{categoria.descricao}</span>
            </li>
          ))
        )}
      </ul>

      <Link to="/cadastro/video">Video</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
