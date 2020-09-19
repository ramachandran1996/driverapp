import React from "react";
import { View, Text, Switch, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import I18n from "../../Components/Config/i18n";
const IncentiveScreen = ({ ...props }) => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* <Button onPress={() => navigation.goBack()} title="Go back home" />
       */}
      <Text>{I18n.t("incentiveScreen")}</Text>
      <Text>{I18n.t("continue")}</Text>
    </View>
  );
};
export default IncentiveScreen;
