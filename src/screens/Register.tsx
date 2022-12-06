import { Box, Button, Input, Text } from "native-base";
import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { Hub } from "aws-amplify";

const Register = ({ navigation }: any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [codeSection, setCodeSection] = useState(false);
  const [code, setCode] = useState("");

  async function signUp() {
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
      console.log(JSON.stringify(user, null, " "));
      setCodeSection(true);
    } catch (error) {
      console.log("error signing up:", error);
    }
  }

  async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(username, code);
      navigation.navigate("login");
    } catch (error) {
      console.log("error confirming sign up", error);
    }
  }

  function listenToAutoSignInEvent() {
    Hub.listen("auth", ({ payload }) => {
      const { event } = payload;
      if (event === "autoSignIn") {
        const user = payload.data;
        // assign user
      } else if (event === "autoSignIn_failure") {
        // redirect to sign in page
      }
    });
  }

  return (
    <Box mx={10}>
      <Text>Registro</Text>
      <Box>
        <Text>Usuario</Text>
        <Input
          variant="underlined"
          placeholder="Ingresá un nombre de usuario"
          onChangeText={(user) => setUsername(user)}
        />
      </Box>
      <Box my={3}>
        <Text>Email</Text>
        <Input
          variant="underlined"
          placeholder="Ingresá tu email"
          onChangeText={(email) => setEmail(email)}
        />
      </Box>
      <Box>
        <Text>Contraseña</Text>
        <Input
          type="password"
          variant="underlined"
          placeholder="Ingresá una contraseña mayor a 6 dígitos con una letra mayúscula"
          onChangeText={(pass) => setPassword(pass)}
        />
      </Box>

      <Button onPress={() => signUp()}> Crear usuario</Button>
      {codeSection && (
        <Box>
          <Text>Código</Text>
          <Input
            variant="underlined"
            placeholder="Ingresá el código recibido en tu email"
            onChangeText={(emailCode) => setCode(emailCode)}
          />
          <Button onPress={() => confirmSignUp()}> Confirmar</Button>
        </Box>
      )}
    </Box>
  );
};

export default Register;
