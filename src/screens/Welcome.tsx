import { SafeAreaView } from "react-native";
import React from "react";
import { Box, Image, Text, VStack } from "native-base";
import { Button } from "ui";
import tw from "twrnc";

import { useAuthenticator } from "@aws-amplify/ui-react-native";

function SignOutButton() {
  const { signOut } = useAuthenticator();
  return <Button onPress={signOut}>Salir de mi cuenta</Button>;
}

const img = require("../assets/boots.jpeg");
// const donut = require('../assets/donut.png');

const Welcome = ({ navigation }: any) => {
  return (
    <SafeAreaView>
      <Box style={tw`container mx-auto`}>
        <Box mt={5} mb={10} alignItems="center">
          <Text style={tw`text-xl text-primary-500 mb-1`}>Botonera de audios</Text>
          {/* <Image
          borderRadius={10}
          alt="imagen dona"
          source={donut}
          width={7}
          height={7}
        /> */}
        </Box>
        <Image alt="imagen logo" source={img} width={250} height={180} />
        <Box style={tw`flex items-center`}>
          <Box style={tw`my-4 w-full`}>
            <Button onPress={() => navigation.navigate("login")}>Ingresar</Button>
          </Box>
          <Box style={tw`mb-4 w-full`}>
            <Button onPress={() => navigation.navigate("register")}>Registrarme</Button>
          </Box>
        </Box>
        {/* <SignOutButton /> */}
      </Box>
    </SafeAreaView>
  );
};

export default Welcome;
