import React, { useEffect, useState, useCallback } from "react";
// import { StatusBar } from "expo-status-bar";
import { View, Text, Switch } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";

import { TextInput } from "../../../Components/StylesComponents/container";

const LoginSchema = Yup.object().shape({
  accessCode: Yup.string()
    .min("6", "Require 6 digit passcode")
    // .max("10", "Require 6 digit passcode")
    .required("Required"),
});
const AccessCode = ({}) => {
  const [accessCode, setAccessCode] = useState(0);
  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      validationSchema: LoginSchema,
      initialValues: { accessCode: null },
      onSubmit: () => {
        touched.accessCode = false;
        // dispatch(login(selectedTruck, accessCode));
      },
    }
  );
  return (
    <View
      style={{
        elevation: 3,
        width: "100%",
        height: 100,
        padding: 10,
        backgroundColor: "white",
        marginTop: 20,
        paddingHorizontal: 20,
      }}
    >
      {/* <Text style={{ fontSize: 22 }}>Enter your access code</Text> */}
      <TextInput
        onBlur={handleBlur("accessCode")}
        touched={touched.accessCode}
        error={errors.accessCode}
        onChangeText={handleChange("accessCode")}
        placeholder="Enter Your Access Code"
        keyboardType="number-pad"
      />
    </View>
  );
};
export default React.memo(AccessCode);
