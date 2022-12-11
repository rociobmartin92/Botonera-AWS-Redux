import { Button as NativeBaseButton } from "native-base";
import React from "react";
import { GestureResponderEvent } from "react-native";
import tw from "twrnc";

interface ButtonProps {
  onPress: (event?: GestureResponderEvent) => void;
  children: any;
}

const Button = ({ onPress, style, children }: ButtonProps) => {
  return (
    <NativeBaseButton
      style={tw`rounded border border-primary-500 w-full text-white`}
      _pressed={{ backgroundColor: "transparent" }}
      onPress={onPress}
    >
      {children}
    </NativeBaseButton>
  );
};

export default Button;
