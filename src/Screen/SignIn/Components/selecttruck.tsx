/* eslint-disable react-native/no-unused-styles */
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");
const trucklist = ["70tontruck", "80tontruck", "90tontruck"];
import LanguageOption from "../../../Components/languageTools";
const SelectTruck = ({}) => {
  const animationDuration = 500;
  const [selected, setSelected] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(false);
  const [animatedHeight, setAnimatedHeight] = useState(new Animated.Value(0));
  const [SlideInLeft, setSlideInLeft] = useState(new Animated.Value(0));
  const [expanded, setExpanded] = useState(false);

  const toggleDropdown = () => {
    if (expanded == true) {
      setCurrentIndex(!currentIndex);
      Animated.timing(animatedHeight, {
        toValue: 0,
        duration: animationDuration,
        useNativeDriver: false,
      }).start();
      setTimeout(() => {
        setExpanded(!expanded);
      }, animationDuration);
    } else {
      setExpanded(!expanded);
      setCurrentIndex(!currentIndex);
      // expand dropdown
      Animated.timing(animatedHeight, {
        toValue: 100,
        duration: animationDuration,
        useNativeDriver: false,
      }).start();
    }
  };

  const interpolatedHeight = animatedHeight.interpolate({
    inputRange: [-100, 100],
    outputRange: ["10%", "50%"],
    extrapolate: "clamp",
  });

  const _start = () => {
    Animated.timing(SlideInLeft, {
      toValue: 1,
      duration: 900,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      setExpanded(false);
      toggleDropdown();
    }, 700);
  };
  return (
    <Animated.View style={[styles.container, { height: interpolatedHeight }]}>
      <View style={styles.selectTruckTextContainer}>
        <Text style={styles.selectTruckText}>Select your truck</Text>
        <AntDesign
          name={!currentIndex ? "caretdown" : "caretup"}
          size={24}
          color="black"
          onPress={() => {
            toggleDropdown();
          }}
        />
      </View>
      {selected && expanded == false && (
        <Text
          style={[
            styles.selectTruckText,
            { paddingHorizontal: 20, color: "red" },
          ]}
        >
          {selected}
        </Text>
      )}
      {expanded == true &&
        trucklist.map((item) => {
          return (
            <Animated.View
              style={{
                transform: [
                  {
                    translateY: SlideInLeft.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, width * 2],
                    }),
                  },
                ],
                height: 50,
                justifyContent: "center",
                margin: 2,
                // backgroundColor: "green",
              }}
              key={item}
            >
              <TouchableOpacity
                onPress={() => {
                  setSelected(item);
                  _start();
                }}
              >
                <LanguageOption title={item} selected={item == selected} />
              </TouchableOpacity>
            </Animated.View>
          );
        })}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  //st->Selecttruck
  container: {
    marginTop: 20,
    elevation: 4,
    backgroundColor: "white",
    // marginHorizontal: 5,
    paddingVertical: 15,
    // paddingHorizontal: 15,
    minHeight: 100,
    // justifyContent: "space-between",
    overflow: "hidden",
  },
  selectTruckTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  selectTruckText: {
    fontSize: 22,
    width: "70%",
  },
});

export default React.memo(SelectTruck);
