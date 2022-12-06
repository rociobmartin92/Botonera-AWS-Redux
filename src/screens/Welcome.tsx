import { SafeAreaView } from "react-native";
import React from "react";
import { Box, Button, Image, Text, VStack } from "native-base";

import { useAuthenticator } from "@aws-amplify/ui-react-native";

function SignOutButton() {
  const { signOut } = useAuthenticator();
  return (
    <>
      <Button onPress={signOut}>Salir de mi cuenta</Button>
    </>
  );
}

const img = require("../assets/boots.jpeg");
// const donut = require('../assets/donut.png');

const Welcome = ({ navigation }: any) => {
  return (
    <SafeAreaView>
      <Box mt={5} mb={10} alignItems="center">
        {/* <Text fontSize={20} color="#d45f83" mb={1}>
          ¡Te damos la bienvenida!
        </Text> */}
        {/* <Image
          borderRadius={10}
          alt="imagen dona"
          source={donut}
          width={7}
          height={7}
        /> */}
      </Box>
      <Box alignItems="center"s>
        <Image
          borderRadius={10}
          alt="imagen logo"
          source={img}
          width={250}
          height={180}
        />
        <Button
          mt={6}
          mb={3}
          _text={{ color: "bot.green", fontSize: 16 }}
          _pressed={{ backgroundColor: "transparent" }}
          borderWidth="1"
          borderColor="#d45f83"
          borderRadius={7}
          width="65%"
          variant="outline"
          onPress={() => navigation.navigate("login")}
        >
          Ingresar
        </Button>
        <Button
          borderRadius={7}
          _text={{ color: "bot.green", fontSize: 16 }}
          _pressed={{ backgroundColor: "transparent" }}
          borderWidth="1"
          borderColor="#d45f83"
          width="65%"
          variant="outline"
          onPress={() => navigation.navigate("register")}
        >
          Registrarme
        </Button>
      </Box>
      {/* <SignOutButton /> */}
    </SafeAreaView>
  );
};

export default Welcome;
