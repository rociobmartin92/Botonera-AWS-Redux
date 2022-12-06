import { Box, Button, Input, Text } from "native-base";
import React, { useState } from "react";

import { Auth } from "aws-amplify";

const Login = () => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function signIn() {
    try {
      const user = await Auth.signIn(username, password);
    } catch (error) {
      console.log("error signing in", error);
    }
  }

  return (
    <Box mx={10}>
      <Text>Iniciar Sesión</Text>
      <Box my={3}>
        <Text>Usuario</Text>
        <Input
          variant="underlined"
          placeholder="Ingresá tu nombre de usuario"
          onChangeText={(user) => setUsername(user)}
        />
      </Box>
      <Box>
        <Text>Contraseña</Text>
        <Input
          variant="underlined"
          placeholder="Ingresá tu contraseña"
          onChangeText={(pass) => setPassword(pass)}
        />
        <Button onPress={() => signIn()}> Iniciar Sesión</Button>
      </Box>
    </Box>
  );
};

export default Login;
