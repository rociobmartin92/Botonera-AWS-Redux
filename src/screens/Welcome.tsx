import { SafeAreaView, View, Text } from "react-native";
import React, { useEffect } from "react";
import { Img } from "ui";
import { Button } from "react-native-paper";
import { useAuthenticator } from "@aws-amplify/ui-react-native";
import { usePaperTheme } from "../theme/types";
import { Auth } from "aws-amplify";
import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";

function SignOutButton() {
  const { signOut } = useAuthenticator();
  return <Button onPress={signOut}>Salir de mi cuenta</Button>;
}

const img = require("../assets/boots.jpeg");

const Welcome = ({ navigation }: any) => {
  const theme = usePaperTheme();
  const navigator = useNavigation();

  const checkAuth = useCallback(async () => {
    const result = await Auth.currentAuthenticatedUser();
    return result;
  }, []);

  useEffect(() => {
    checkAuth().then((res) => {
      console.log("user", res.username, "is logged in");
      const token = res.signInUserSession.idToken.jwtToken;
      const isUserLoggedIn = Boolean(token);
      if (isUserLoggedIn) {
        navigator.navigate({ name: "home" });
      }
    });
  }, [navigator]);

  return (
    <SafeAreaView style={theme.layout.container}>
      <View style={{ alignSelf: "center", marginVertical: theme.layout.safePadding }}>
        <Text style={theme.fonts.headlineMedium}>Botonera de audios</Text>
      </View>
      <View style={{ marginVertical: theme.layout.safePadding }}>
        <Img source={img} marginHorizontal={theme.layout.safePadding * 2} />
      </View>
      <View style={{ marginVertical: 4 }}>
        <Button mode="contained" onPress={() => navigation.navigate("login")}>
          Ingresar
        </Button>
      </View>
      <View style={{ marginVertical: 4 }}>
        <Button mode="elevated" onPress={() => navigation.navigate("register")}>
          Registrarme
        </Button>
      </View>

      {/* <SignOutButton /> */}
    </SafeAreaView>
  );
};

export default Welcome;
