import React from "react";

import { FormInput } from "./styles";

const FormField = ({ label, type, value, name, onChange }) => {
  return (
    // FormWrapper
    <div>
      <label>{label}:</label>
      <FormInput type={type} value={value} name={name} onChange={onChange} />
    </div>
  );
};

export default FormField;
