import {Box, Button, Input, Text} from 'native-base';
import React, {useState} from 'react';
import {Auth} from 'aws-amplify';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function signUp() {
    try {
      const {user} = await Auth.signUp({
        username,
        password,

        autoSignIn: {
          // optional - enables auto sign in after user is confirmed
          enabled: true,
        },
      });
      console.log(JSON.stringify(user, null, ' '));
    } catch (error) {
      console.log('error signing up:', error);
    }
  }

  return (
    <Box mx={10}>
      <Text>Registro</Text>
      <Box my={3}>
        <Text>Nombre de Usuario</Text>
        <Input
          variant="underlined"
          _focus={{background: 'transparent'}}
          placeholder="Ingresá un nombre de usuario"
          onChangeText={user => setUsername(user)}
        />
      </Box>
      <Box>
        <Text>Contraseña</Text>
        <Input
          variant="underlined"
          placeholder="Ingresá una contraseña"
          onChangeText={pass => setPassword(pass)}
        />
        <Button onPress={() => signUp()}> Crear usuario</Button>
      </Box>
    </Box>
  );
};

export default Register;
