import React from "react";
import { Button, ButtonProps } from "react-native-paper";
import { useFormikContext } from "formik";

export interface FormSubmitButtonProps extends Omit<ButtonProps, "theme"> {
  testId?: string;
  loading?: boolean;
}

const FormSubmitButton = ({ children, loading, testId, disabled, ...props }: FormSubmitButtonProps) => {
  const { errors, isSubmitting, dirty, handleSubmit } = useFormikContext();
  const isLoading = loading ?? isSubmitting;

  const isDisabled = disabled ?? (Boolean(Object.keys(errors).length) || !dirty);

  return (
    <Button
      mode="contained"
      {...props}
      onPress={() => handleSubmit()}
      testID={testId}
      disabled={isDisabled}
      loading={isLoading}
    >
      {children}
    </Button>
  );
};

export default FormSubmitButton;
