import { useState } from "react";

function useForm(initial_values) {
  const [values, setValues] = useState(initial_values);

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

  const clearForm = () => {
    setValues(initial_values);
  };

  return {
    handleChange,
    clearForm,
    values,
  };
}

export default useForm;
