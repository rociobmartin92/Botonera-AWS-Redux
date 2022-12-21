/* eslint-disable react/react-in-jsx-scope */
import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { Provider as PaperProvider } from "react-native-paper";
import { nativeBaseTheme, paperTheme } from "./src/theme";
import RootNavigation from "./src/stack";
import { Amplify, Auth, DataStore } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import { Authenticator } from "@aws-amplify/ui-react-native";
import { NativeBaseProvider } from "native-base";

Amplify.configure(awsconfig);

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({ fade: true, duration: 500 });
  }, []);

  return (
    <NativeBaseProvider theme={nativeBaseTheme}>
      <PaperProvider theme={paperTheme}>
        <Authenticator.Provider>
          <RootNavigation />
        </Authenticator.Provider>
      </PaperProvider>
    </NativeBaseProvider>
  );
};

export default App;
