import React from "react";
import { Auth } from "aws-amplify";
import { SafeAreaView, View } from "react-native";
import { usePaperTheme } from "../theme/types";
import { CredentialFields, FormSubmitButton, FormTextInput } from "ui";
import { Text } from "react-native-paper";

type RegisterFormValues = {
  username: string;
  password: string;
  email: string;
};

const Register = ({ navigation }: any) => {
  const theme = usePaperTheme();
  const initialValues: RegisterFormValues = {
    username: "",
    password: "",
    email: "",
  };

  async function handleSubmit({ username, password, email }: RegisterFormValues) {
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
        autoSignIn: {
          enabled: true,
        },
      });

      navigation.navigate("codeConfirmation", { username });
    } catch (error) {
      console.log("error signing up:", error);
    }
  }

  return (
    <SafeAreaView style={theme.layout.container}>
      <View style={{ marginBottom: theme.layout.spacing.md }}>
        <Text style={theme.fonts.headlineMedium}>Registro</Text>
      </View>
      <CredentialFields initialValues={initialValues} onSubmit={handleSubmit}>
        <View style={theme.layout.inputContainer}>
          <FormTextInput label="Email" name="email" mode="outlined" placeholder="Ingresá tu email" />
        </View>
        <FormSubmitButton>Crear usuario</FormSubmitButton>
      </CredentialFields>
    </SafeAreaView>
  );
};

export default Register;
