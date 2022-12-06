/* eslint-disable react/react-in-jsx-scope */
import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {NativeBaseProvider} from 'native-base';
import {theme} from './src/theme';
import RootNavigation from './src/stack';
import {Amplify} from 'aws-amplify';
import awsconfig from './src/aws-exports';
import {Authenticator} from '@aws-amplify/ui-react-native';

Amplify.configure(awsconfig);

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true, duration: 500});
  }, []);

  return (
    <NativeBaseProvider theme={theme}>
      <Authenticator.Provider>
        <RootNavigation />
      </Authenticator.Provider>
    </NativeBaseProvider>
  );
};

export default App;
