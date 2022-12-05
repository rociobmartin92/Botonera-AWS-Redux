/* eslint-disable react/react-in-jsx-scope */
import {NativeBaseProvider} from 'native-base';
import {theme} from './src/theme';
import {SafeAreaView} from 'react-native';
import RootNavigation from './src/stack';

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaView>
        <RootNavigation />
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default App;
