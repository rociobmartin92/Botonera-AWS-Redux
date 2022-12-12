import React from "react";
import { Auth } from "aws-amplify";
import { SafeAreaView } from "react-native-safe-area-context";
import { usePaperTheme } from "../theme/types";
import { Spacing } from "../theme";
import { View, Text } from "react-native";
import { CredentialFields } from "ui";
import { Button } from "react-native-paper";

const Login = () => {
  const theme = usePaperTheme();

  async function signIn() {
    // try {
    //   const user = await Auth.signIn(username, password);
    // } catch (error) {
    //   console.log("error signing in", error);
    // }
  }

  return (
    <SafeAreaView style={theme.layout.container}>
      <View style={{ marginBottom: Spacing.md }}>
        <Text style={theme.fonts.headlineMedium}>Iniciar Sesión</Text>
      </View>
      <CredentialFields />
      <Button mode="contained" onPress={() => signIn()}>
        Iniciar Sesión
      </Button>
    </SafeAreaView>
  );
};

export default Login;
