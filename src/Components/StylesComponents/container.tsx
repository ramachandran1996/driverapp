import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  Switch,
  ScrollView,
  TextInput as RNTextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
export const Container = ({ addstyle, ...props }) => {
  return (
    <View style={[{ flex: 1, margin: 10 }, addstyle]}>{props.children}</View>
  );
};

export const ScrollViewContainer = ({ addstyle, ...props }) => {
  return (
    <ScrollView
      contentContainerStyle={[
        {
          justifyContent: "space-between",
          paddingHorizontal: 20,
        },
        addstyle,
      ]}
      scrollEventThrottle={16}
    >
      {props.children}
    </ScrollView>
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

interface TextInputProps {
  placeholder: string;
  keyboardType: "number-pad" | "default";
  error?: string;
  touched?: boolean;
}

export const TextInput = ({
  placeholder,
  keyboardType,
  error,
  touched,
  ...props
}: TextInputProps) => {
  console.log("touched is", touched);
  console.log("Error si", error);
  return (
    <View style={{ flexDirection: "row" }}>
      <View>
        <Text style={{ fontSize: 22 }}>{placeholder}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ width: "90%" }}>
            <RNTextInput
              keyboardType={keyboardType}
              style={{ padding: 10  }}
              underlineColorAndroid="transparent"
              {...props}
            />
          </View>
          <View>
            {touched && (
              <FontAwesome
                color={!error ? "green" : "red"}
                name={!error ? "check-circle" : "times-circle"}
                size={24}
              />
            )}
          </View>
        </View>
      </View>
    </View>
  );
};
