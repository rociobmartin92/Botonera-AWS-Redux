import React from "react";
import { View } from "react-native";
import { FormTextInput, FormPasswordInput, Form } from "ui";
import { usePaperTheme } from "../../theme/types";
import { FormProps } from "../Form/Form";

type FormValues = {
  [i: string]: unknown;
  username: string;
  password: string;
};

interface CredentialFieldsProps {
  children: any;
  initialValues: FormProps<FormValues>["initialValues"];
  onSubmit: (values: FormValues) => void;
}

const CredentialFields = ({ children, initialValues, onSubmit }: CredentialFieldsProps) => {
  const theme = usePaperTheme();

  return (
    <Form initialValues={initialValues} onSubmit={onSubmit}>
      <View style={theme.layout.inputContainer}>
        <FormTextInput label="Username" name="username" mode="outlined" placeholder="Ingresá tu nombre de usuario" />
      </View>
      <View style={theme.layout.inputContainer}>
        <FormPasswordInput label="Password" name="password" mode="outlined" placeholder="Ingresá tu contraseña" />
      </View>
      {children}
    </Form>
  );
};

export default CredentialFields;
