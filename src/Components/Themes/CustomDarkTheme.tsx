import { DarkTheme as NavigationDarkTheme } from "@react-navigation/native";

const CustomDarkTheme = {
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    background: "#333333",
    text: "#ffffff",
  },
};
export default CustomDarkTheme;
