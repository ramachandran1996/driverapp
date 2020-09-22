import React from "react";
import { View } from "react-native";
import { EventRegister } from "react-native-event-listeners";

import { Button } from "../../../Components/StylesComponents/container";
export default function LoginButton({}) {
  return (
    <View>
      <Button
        title={"login"}
        color={"#2E2F2F"}
        onpress={() => {
          EventRegister.emit("login", true);
        }}
        addstyle={{ marginBottom: 5 }}
      />
    </View>
  );
}
