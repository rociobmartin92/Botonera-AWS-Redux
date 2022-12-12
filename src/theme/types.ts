import { useTheme } from "react-native-paper";
import { paperTheme } from "./index";

export type PaperTheme = typeof paperTheme;
export function usePaperTheme() {
  const theme = useTheme<PaperTheme>();

  return theme;
}
