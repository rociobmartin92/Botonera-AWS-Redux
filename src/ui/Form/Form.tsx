import React from "react";
import { Formik, Form as FormikForm, FormikValues, FormikConfig } from "formik";
import { View } from "react-native";

export type FormProps<Values> = FormikConfig<Values> & {
  children: any;
  className?: string;
  testId?: string;
};

const FormWrapper = <Values extends FormikValues = FormikValues>({
  children,
  className,
  testId,
  ...props
}: FormProps<Values>) => {
  return (
    <Formik {...props}>
      <View>{children}</View>
    </Formik>
  );
};

export default FormWrapper;
