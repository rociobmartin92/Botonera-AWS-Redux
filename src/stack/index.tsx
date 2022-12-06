import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Register from '../screens/Register';
import ForgotPassword from '../screens/ForgotPassword';
import Welcome from '../screens/Welcome';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="welcome">
        <Stack.Screen
          options={{title: ''}}
          name="welcome"
          component={Welcome}
        />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="password" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
