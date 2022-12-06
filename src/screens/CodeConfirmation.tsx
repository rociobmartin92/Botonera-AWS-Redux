// IM NOT SURE IF THIS SCREEN IS GOINT TO BE USED


import { Box, Button, Input, Text } from "native-base";
import React, { useState } from "react";

const CodeConfirmation = () => {
  const [code, setCode] = useState("");

  return (
    <Box mx={10}>
      <Text>Iniciar Sesión</Text>
      <Box my={3}>
        <Text>Nombre de Usuario</Text>
        <Input
          variant="underlined"
          placeholder="Ingresá un nombre de usuario"
          onChangeText={(data) => setCode(data)}
        />
      </Box>
      <Box>
        <Text>Contraseña</Text>
        <Button onPress={() => console.log("codigo de confirmacion")}>
          {" "}
          Crear usuario
        </Button>
      </Box>
    </Box>
  );
};

export default CodeConfirmation;
