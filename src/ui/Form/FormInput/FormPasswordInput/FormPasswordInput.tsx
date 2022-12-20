import React from "react";
import { TextInput as NativeTextInput } from "react-native";
import FormTextInput, { FormTextInputProps } from "../FormTextInput/FormTextInput";

export type FormPasswordInputProps = FormTextInputProps;

const FormPasswordInput = ({ render, ...props }: FormPasswordInputProps) => {
  return (
    <FormTextInput {...props} render={(renderProps) => <NativeTextInput {...renderProps} secureTextEntry={true} />} />
  );
};

export default FormPasswordInput;
