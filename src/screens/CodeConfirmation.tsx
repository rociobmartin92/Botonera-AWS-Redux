import React from "react";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { Hub, Auth } from "aws-amplify";
import { SafeAreaView, View } from "react-native";
import { Text } from "react-native-paper";
import { Form, FormSubmitButton, FormTextInput } from "ui";
import { usePaperTheme } from "../theme/types";

interface CodeConfirmationProps {
  route: RouteProp<Record<string, { username: string }>, "codeConfirmation">;
}

interface CodeConfirmationFormValues {
  code: string;
}

const CodeConfirmation = ({ route }: CodeConfirmationProps) => {
  const navigation = useNavigation();
  const theme = usePaperTheme();
  const { username } = route.params;

  const initialValues: CodeConfirmationFormValues = {
    code: "",
  };

  async function handleSubmit({ code }: CodeConfirmationFormValues) {
    try {
      await Auth.confirmSignUp(username, code);
      navigation.navigate("login");
    } catch (error) {
      console.log("error confirming sign up", error);
    }
  }

  function listenToAutoSignInEvent() {
    Hub.listen("auth", ({ payload }) => {
      const { event } = payload;
      if (event === "autoSignIn") {
        const user = payload.data;
        // assign user
      } else if (event === "autoSignIn_failure") {
        // redirect to sign in page
      }
    });
  }

  return (
    <SafeAreaView style={theme.layout.container}>
      <Form initialValues={initialValues} onSubmit={handleSubmit}>
        <View style={{ marginBottom: theme.layout.spacing.md }}>
          <Text style={theme.fonts.headlineMedium}>Confirma tu correo</Text>
          <Text style={theme.fonts.bodyMedium}>Revisa tu correo e ingresa el código recibido debajo</Text>
        </View>
        <View style={{ marginBottom: theme.layout.spacing.md }}>
          <FormTextInput
            label="Codigo"
            name="code"
            mode="outlined"
            placeholder="Ingresá el código recibido en tu email"
          />
        </View>
        <FormSubmitButton>Confirmar</FormSubmitButton>
      </Form>
    </SafeAreaView>
  );
};

export default CodeConfirmation;
