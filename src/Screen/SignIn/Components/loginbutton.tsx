import React from "react";
import { View, Text } from "react-native";
import { EventRegister } from "react-native-event-listeners";
import {
  useQuery,
  QueryCache,
  ReactQueryCacheProvider,
  useMutation,
} from "react-query";

import AxiosClient from "../../../Services/axios";
import { Button } from "../../../Components/StylesComponents/container";
function LoginButton({ onpress }) {
  // const [driverid, setddriverid] = React.useState("");
  // const [logincode, setlogincode] = React.useState("");
  // const [mutate] = useMutation(() =>
  //   AxiosClient.post("drivers/login", {
  //     driverid,
  //     logincode,
  //   }).then((res) => {
  //     console.log(res);
  //   })
  // );

  return (
    <View
      style={{
        position: "absolute",
        bottom: 10,
        width: "100%",
        paddingHorizontal: 20,
      }}
    >
      <Button
        title={"login"}
        color={"#2E2F2F"}
        onpress={onpress}
        addstyle={{}}
      />
    </View>
  );
}
export default React.memo(LoginButton);
