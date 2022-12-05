import {SafeAreaView} from 'react-native';
import React from 'react';
import {Box, Button, Image, Text, VStack} from 'native-base';

import {useAuthenticator} from '@aws-amplify/ui-react-native';

function SignOutButton() {
  const {signOut} = useAuthenticator();
  return (
    <>
      <Button onPress={signOut}>Salir de mi cuenta</Button>
    </>
  );
}

const Welcome = ({navigation}: any) => {
  const img = require('../assets/images.jpeg');

  return (
    <SafeAreaView>
      <Box mt={5} alignItems="center">
        <Text fontSize={25} fontWeight={500} color="bot.dark" mb={1}>
          ¡Te damos la bienvenida!
        </Text>
        <Image borderRadius={5} alt="imagen logo" source={img} width={250} height={180} />
      </Box>
      <Box alignItems="center" mt={10}>
        <Button
          mb={3}
          _text={{color: 'bot.green', fontSize: 17}}
          _pressed={{backgroundColor: 'bot.blue'}}
          borderWidth="1"
          borderColor="bot.gold"
          borderRadius={10}
          width="60%"
          variant="outline"
          onPress={() => navigation.navigate('login')}>
          Ingresar
        </Button>
        <Button
          borderRadius={10}
          _text={{color: 'bot.blue', fontSize: 17}}
          borderWidth="1"
          borderColor="bot.gold"
          width="60%"
          variant="outline"
          onPress={() => navigation.navigate('register')}>
          Registrarme
        </Button>
      </Box>
      {/* <SignOutButton /> */}
    </SafeAreaView>
  );
};

export default Welcome;
