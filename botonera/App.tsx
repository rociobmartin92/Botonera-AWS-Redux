/* eslint-disable react/react-in-jsx-scope */
import {NativeBaseProvider} from 'native-base';
import {theme} from './src/theme';
import RootNavigation from './src/stack';
import {Amplify, Auth} from 'aws-amplify';
import awsconfig from './src/aws-exports';
import {withAuthenticator} from '@aws-amplify/ui-react-native';

const App = () => {
  Amplify.configure(awsconfig);

  
  return (
    <NativeBaseProvider theme={theme}>
      <RootNavigation />
    </NativeBaseProvider>
  );
};

export default withAuthenticator(App);
