import React, { useState } from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { usePaperTheme } from "../../theme/types";

interface CredentialFieldsProps {}

const CredentialFields = (props: CredentialFieldsProps) => {
  const theme = usePaperTheme();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <View style={theme.layout.inputContainer}>
        <Text>Usuario</Text>
        <TextInput
          mode="outlined"
          placeholder="Ingresá tu nombre de usuario"
          onChangeText={(user) => setUsername(user)}
          value={username}
        />
      </View>
      <View style={theme.layout.inputContainer}>
        <Text>Contraseña</Text>
        <TextInput
          mode="outlined"
          placeholder="Ingresá tu contraseña"
          onChangeText={(pass) => setPassword(pass)}
          value={password}
        />
      </View>
    </>
  );
};

export default CredentialFields;
