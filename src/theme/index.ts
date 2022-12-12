import { extendTheme } from "native-base";
import { FlexAlignType } from "react-native";
import { MD3LightTheme as DefaultTheme } from "react-native-paper";

export const nativeBaseTheme = extendTheme({
  colors: {
    bot: {
      yellow: "#FED90F",
      lightBlue: "#009DDC",
      blue: "#107DC0",
      darkBlue: "#007db0",
      dark: "#424F46",
      gold: "#D1B271",
      red: "#D1B271",
      lightGreen: "#7BC242",
      green: "#00947E",
      pink: "#ED91AD",
      brown: "#9c5b01",
    },
  },
});

export enum Spacing {
  sm = 8,
  md = 16,
  lg = 24,
  xl = 48,
}

export const paperTheme = {
  ...DefaultTheme,
  layout: {
    spacing: {
      sm: Spacing.sm,
      md: Spacing.md,
      lg: Spacing.lg,
      xl: Spacing.xl,
    },
    unit: 4,
    safePadding: Spacing.md,
    container: {
      // alignSelf: "center" as FlexAlignType,
      marginHorizontal: Spacing.md,
    },
    inputContainer: {
      marginBottom: Spacing.md,
    },
  },
};
