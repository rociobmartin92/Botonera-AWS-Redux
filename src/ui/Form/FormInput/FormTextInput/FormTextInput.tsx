import React from "react";
import { useField } from "formik";
import { Text, TextInput as NativeTextInput, TextInputProps as NativeTextInputProps } from "react-native-paper";

export type FormTextInputProps = {
  name: string;
  label: NativeTextInputProps["label"];
  value?: NativeTextInputProps["value"];
  mode?: NativeTextInputProps["mode"];
  placeholder?: NativeTextInputProps["placeholder"];
  type?: "text" | "password";
  render?: NativeTextInputProps["render"];
};

const FormTextInput = ({ type = "text", render, ...props }: FormTextInputProps) => {
  const [field, meta, helpers] = useField({
    name: props.name,
    type,
    value: props.value,
  });

  function handleRemoveError() {
    helpers.setError("");
  }

  return (
    <>
      <NativeTextInput
        render={render}
        value={field.value}
        onBlur={() => helpers.setTouched(!meta.touched)}
        onChangeText={helpers.setValue}
      />
      {meta.error && <Text>{meta.error}</Text>}
    </>
  );
};

export default FormTextInput;
