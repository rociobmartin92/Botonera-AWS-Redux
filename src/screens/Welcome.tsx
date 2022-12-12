import { SafeAreaView, View, Text } from "react-native";
import React from "react";
import { Img } from "ui";
import { Button } from "react-native-paper";
import { useAuthenticator } from "@aws-amplify/ui-react-native";

function SignOutButton() {
  const { signOut } = useAuthenticator();
  return <Button onPress={signOut}>Salir de mi cuenta</Button>;
}

const img = require("../assets/boots.jpeg");
// const donut = require('../assets/donut.png');

const Welcome = ({ navigation }: any) => {
  const safeAreaPadding = 16;

  return (
    <SafeAreaView style={{ marginHorizontal: safeAreaPadding, padding: 4 }}>
      <View style={{ alignSelf: "center", marginVertical: safeAreaPadding }}>
        <Text>Botonera de audios</Text>
        {/* <Image
          borderRadius={10}
          alt="imagen dona"
          source={donut}
          width={7}
          height={7}
        /> */}
      </View>
      <View style={{ marginVertical: safeAreaPadding }}>
        <Img source={img} marginHorizontal={safeAreaPadding * 2} />
      </View>
      <View style={{ marginVertical: 4 }}>
        <Button mode="elevated" onPress={() => navigation.navigate("login")}>
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
