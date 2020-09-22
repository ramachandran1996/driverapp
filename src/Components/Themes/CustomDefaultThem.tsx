import { DefaultTheme as NavigationDefaultTheme } from "@react-navigation/native";

const CustomDefaultTheme = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    background: "#ffffff",
    text: "#333333",
  },
};

export default CustomDefaultTheme;
