import React, { useEffect, useState, useCallback } from "react";
import { View, Text, Switch, TouchableOpacity, Pressable } from "react-native";

interface ButtonProps {
  title: string;
  color: string;
  //   keyboardType: "number-pad" | "default";
  onpress: any;
}

const Button = ({ onpress, title, color }: ButtonProps) => {
  return (
    <React.Fragment>
      <TouchableOpacity
        style={{
          backgroundColor: color,
          height: 40,
          borderRadius: 5,
          justifyContent: "center",
        }}
        onPress={onpress}
      >
        <Text style={{ color: "white", textAlign: "center", fontSize: 22 }}>
          {title}
        </Text>
      </TouchableOpacity>
    </React.Fragment>
  );
};
export default Button;
