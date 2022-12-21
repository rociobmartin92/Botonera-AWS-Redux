import React from "react";
import { Auth } from "aws-amplify";
import { SafeAreaView } from "react-native-safe-area-context";
import { usePaperTheme } from "../theme/types";
import { View, Text } from "react-native";
import { CredentialFields, FormSubmitButton } from "ui";
import { useNavigation } from "@react-navigation/native";

type LoginFormValues = {
  username: string;
  password: string;
};

const Login = () => {
  const navigator = useNavigation();
  const theme = usePaperTheme();
  const initialValues: LoginFormValues = {
    username: "",
    password: "",
  };

  async function handleSubmit({ username, password }: LoginFormValues) {
    try {
      await Auth.signIn(username, password);
      navigator.navigate({ name: "home" });
    } catch (error) {
      console.log("error signing in", error);
    }
  }

  return (
    <SafeAreaView style={theme.layout.container}>
      <View style={{ marginBottom: theme.layout.spacing.md }}>
        <Text style={theme.fonts.headlineMedium}>Iniciar Sesión</Text>
      </View>
      <CredentialFields initialValues={initialValues} onSubmit={handleSubmit}>
        <FormSubmitButton>Iniciar Sesión</FormSubmitButton>
      </CredentialFields>
    </SafeAreaView>
  );
};

export default Login;
