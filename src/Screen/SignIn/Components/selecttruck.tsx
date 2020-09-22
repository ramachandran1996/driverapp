import React, { useEffect, useState, useCallback } from "react";
// import { StatusBar } from "expo-status-bar";
import { View, Text, Switch, TextInput, StyleSheet } from "react-native";
import { Transition, Transitioning } from "react-native-reanimated";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

import I18n from "../../../Components/Config/i18n";
import LanguageOption from "../../../Components/languageTools";

const trucklist = ["70tontruck", "80tontruck", "90tontruck"];
const transition = (
  <Transition.Together>
    <Transition.In type="slide-left" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="slide-right" durationMs={200} />
  </Transition.Together>
);

export default function SelectTruck({}) {
  const [currentIndex, setCurrentIndex] = React.useState(false);
  const [selected, setSelected] = React.useState(false);
  const [selecteditem, setSelecteditem] = React.useState(false);
  const ref = React.useRef();
  return (
    <Transitioning.View
      ref={ref}
      transition={transition}
      style={styles.container}
    >
      <View
        style={{
          elevation: 3,
          width: "100%",
          // height: '',
          minHeight: 100,
          padding: 10,
          backgroundColor: "white",
        }}
      >
        <Text
          style={{ fontSize: 22 }}
          onPress={() => {
            ref.current.animateNextTransition();
            setCurrentIndex(!currentIndex);
          }}
        >
          Select your truck
        </Text>
        {currentIndex == true &&
          trucklist.map((item) => {
            return (
              <View
                style={{ height: 50, justifyContent: "center", margin: 2 }}
                key={item}
              >
                <TouchableOpacity
                  onPress={() => {
                    setSelected(item);
                    setCurrentIndex(!currentIndex);
                    ref.current.animateNextTransition();
                    // setSelecteditem(item);
                  }}
                >
                  <LanguageOption title={item} selected={item == selected} />
                </TouchableOpacity>
              </View>
            );
          })}

        {selected && currentIndex == false && (
          <Text style={{ padding: 5 }}>{selected}</Text>
        )}
      </View>
      <View style={{ height: 10 }} />
    </Transitioning.View>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    // justifyContent: "center",
  },
});
