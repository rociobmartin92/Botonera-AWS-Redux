import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { SafeAreaView } from "react-native-safe-area-context";
// import { usePaperTheme } from "../theme/types";
// import { BASE_UNIT } from "../theme";
import { View, Text } from "react-native";
// import { CredentialsFields } from "ui";

const Login = () => {
  // const theme = usePaperTheme();

  // async function signIn() {
  //   try {
  //     const user = await Auth.signIn(username, password);
  //   } catch (error) {
  //     console.log("error signing in", error);
  //   }
  // }

  return <Text>Login Page</Text>;

  // return (
  //   <SafeAreaView style={theme.layout.container}>
  //     {/* <View style={{ marginBottom: BASE_UNIT }}> */}
  //     <Text style={theme.fonts.headlineMedium}>Iniciar Sesión</Text>
  //     {/* </View> */}
  //     {/* <CredentialsFields /> */}
  //     {/* <Button mode="contained" onPress={() => signIn()}>
  //       {" "}
  //       Iniciar Sesión
  //     </Button> */}
  //   </SafeAreaView>
  // );
};

export default Login;
