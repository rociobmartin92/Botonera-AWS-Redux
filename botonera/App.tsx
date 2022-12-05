/* eslint-disable react/react-in-jsx-scope */
import {NativeBaseProvider} from 'native-base';
import {theme} from './src/theme';
import RootNavigation from './src/stack';
import {Amplify} from 'aws-amplify';
import awsconfig from './src/aws-exports';
import {Authenticator} from '@aws-amplify/ui-react-native';

Amplify.configure(awsconfig);

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <Authenticator.Provider>
        <RootNavigation />
      </Authenticator.Provider>
    </NativeBaseProvider>
  );
};

export default App;
