import React from "react";
import { View, Dimensions, StyleSheet, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

interface LanguageOptionProps {
  title: string;
  selected: boolean;
}

const WIDTH = Dimensions.get("window").width * 0.9;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginLeft: 5,
    padding: 5,
    alignItems: "center",
    height: 50,
    width: WIDTH,
    borderRadius: 5,
    borderStyle: "dashed",
    borderColor: "black",
  },
});

const LanguageOption = ({ title, selected }: LanguageOptionProps) => {
  return (
    <View style={styles.container}>
      {selected ? (
        <Feather name="check-circle" size={24} style={{ padding: 10 }} />
      ) : (
        <Feather name="circle" size={24} style={{ padding: 10 }} />
      )}
      <Text>{title}</Text>
    </View>
  );
};

export default LanguageOption;
