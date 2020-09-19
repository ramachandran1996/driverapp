import I18n from "i18n-js";
import AsyncStorage from "@react-native-community/async-storage";

import en from "./locale/en";
import tamil from "./locale/tamil";
import hindi from "./locale/hindi";

I18n.fallbacks = true;

I18n.translations = {
  en,
  tamil,
  hindi,
};

export const SaveLocale = (locale: string) => {
  switch (locale) {
    case "English":
      I18n.locale = "en";
      break;
    case "தமிழ்":
      I18n.locale = "tamil";
      break;
    case "हिन्दी":
      I18n.locale = "hindi";
      break;
  }
  storeData(locale);
};

export const storeData = async (value: string) => {
  try {
    await AsyncStorage.setItem("@launguage", value);
  } catch (e) {
    console.log("error");
  }
};

export default I18n;
