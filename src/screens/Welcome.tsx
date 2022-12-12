import { SafeAreaView, View, Text } from "react-native";
import React from "react";
// import { Img } from "ui";
import { Button } from "react-native-paper";
import { useAuthenticator } from "@aws-amplify/ui-react-native";
// import { usePaperTheme } from "../theme/types";

function SignOutButton() {
  const { signOut } = useAuthenticator();
  return <Button onPress={signOut}>Salir de mi cuenta</Button>;
}

const img = require("../assets/boots.jpeg");

const Welcome = ({ navigation }: any) => {
  return <Text>Welcome Page</Text>;
  // const theme = usePaperTheme();

  // return (
  //   <SafeAreaView style={theme.layout.container}>
  //     <View style={{ alignSelf: "center", marginVertical: theme.layout.safePadding }}>
  //       <Text style={theme.fonts.headlineMedium}>Botonera de audios</Text>
  //     </View>
  //     <View style={{ marginVertical: theme.layout.safePadding }}>
  //       <Img source={img} marginHorizontal={theme.layout.safePadding * 2} />
  //     </View>
  //     <View style={{ marginVertical: 4 }}>
  //       <Button mode="contained" onPress={() => navigation.navigate("login")}>
  //         Ingresar
  //       </Button>
  //     </View>
  //     <View style={{ marginVertical: 4 }}>
  //       <Button mode="elevated" onPress={() => navigation.navigate("register")}>
  //         Registrarme
  //       </Button>
  //     </View>

  //     {/* <SignOutButton /> */}
  //   </SafeAreaView>
  // );
};

export default Welcome;
