import React from "react";
import { View, ScrollView, Dimensions } from "react-native";

const height = Math.round(Dimensions.get("window").height);
import {
  useQuery,
  QueryCache,
  ReactQueryCacheProvider,
  useMutation,
} from "react-query";

import {
  Container,
  ScrollViewContainer,
  Wrapper,
} from "../../Components/StylesComponents/container";
import AxiosClient from "../../Services/axios";

import SelectTruck from "./Components/selecttruck";
import LoginButton from "./Components/loginbutton";
import AcessCode from "./Components/accesscode";

const Signinscreens = ({ ...props }) => {
  const [driverid, setddriverid] = React.useState("");
  const [logincode, setlogincode] = React.useState("");
  const body = {
    // eslint-disable-next-line camelcase
    driver_id: 1,
    // eslint-disable-next-line camelcase
    login_code: "YOU###",
  };

  const [mutate] = useMutation(() =>
    AxiosClient.post("drivers/login", body).then((res) => {
      console.log(res);
    })
  );
  return (
    // <Container addstyle={{ flex: 1, justifyContent: "space-between" }}>
    <>
      <ScrollViewContainer addstyle={{ height: height - 100 }}>
        <Wrapper>
          <SelectTruck />
          <AcessCode />
        </Wrapper>
      </ScrollViewContainer>
      <LoginButton
        onpress={() => {
          mutate();
        }}
      />
    </>
    //  {/* </Container> */}
  );
};
export default React.memo(Signinscreens);
