import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Home from "../screens/Home";
import Register from "../screens/Register";
import ForgotPassword from "../screens/ForgotPassword";
import Welcome from "../screens/Welcome";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true, headerBackTitle: "Atras" }} initialRouteName="welcome">
        <Stack.Screen
          name="welcome"
          options={{
            headerShown: false,
          }}
          component={Welcome}
        />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="login" component={Login} options={{ title: "" }} />
        <Stack.Screen
          name="register"
          options={{
            title: "Registrate",
          }}
          component={Register}
        />
        <Stack.Screen name="password" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
