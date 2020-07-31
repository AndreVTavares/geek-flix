import React from "react";

import { FormInput, FormFieldWrapper, Label } from "./styles";

const FormField = ({ label, type, value, name, onChange }) => {
  const isTypeTextArea = type === "textarea";
  const tag = isTypeTextArea ? "textarea" : "input";

  return (
    <FormFieldWrapper>
      <Label>
        <FormInput as={tag} type={type} value={value} name={name} onChange={onChange} />

        <Label.Text>{label}:</Label.Text>
      </Label>
    </FormFieldWrapper>
  );
};

export default FormField;
