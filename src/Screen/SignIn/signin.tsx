import React from "react";
import { View } from "react-native";

import {
  Container,
  Wrapper,
} from "../../Components/StylesComponents/container";

import SelectTruck from "./Components/selecttruck";
import LoginButton from "./Components/loginbutton";
import AcessCode from "./Components/accesscode";
export default function Signinscreens({}) {
  return (
    <Container addstyle={{ flex: 1, justifyContent: "space-between" }}>
      <Wrapper>
        <SelectTruck />
        <AcessCode />
      </Wrapper>
      <LoginButton />
    </Container>
  );
}
