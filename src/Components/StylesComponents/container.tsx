import React, { useEffect, useState, useCallback } from "react";
import { View, Text, Switch, TouchableOpacity, Pressable } from "react-native";

export const Container = ({ addstyle, ...props }) => {
  return (
    <View style={[{ flex: 1, margin: 10 }, addstyle]}>{props.children}</View>
  );
};
export const Br = ({ ...props }) => {
  return <View style={{ height: 50 }}>{props.children}</View>;
};
export const Wrapper = ({ ...props }) => {
  return <View style={{}}>{props.children}</View>;
};

interface ButtonProps {
  title: string;
  color: string;
  //   keyboardType: "number-pad" | "default";
  onpress: any;
  addstyle?: any;
}

export const Button = ({ onpress, title, addstyle, color }: ButtonProps) => {
  return (
    <React.Fragment>
      <TouchableOpacity
        style={[
          {
            backgroundColor: color,
            height: 40,
            borderRadius: 5,
            justifyContent: "center",
          },
          addstyle,
        ]}
        onPress={onpress}
      >
        <Text style={{ color: "white", textAlign: "center", fontSize: 22 }}>
          {title}
        </Text>
      </TouchableOpacity>
    </React.Fragment>
  );
};
