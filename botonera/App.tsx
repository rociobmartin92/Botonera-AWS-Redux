/* eslint-disable react/react-in-jsx-scope */
import {NativeBaseProvider, Text} from 'native-base';
import {theme} from './src/theme';
import {SafeAreaView} from 'react-native';

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaView>
        <Text color="primario.medium">sdfsd</Text>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default App;
