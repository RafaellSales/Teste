import React, { forwardRef } from "react";
import { TextInput as RNTextInput, View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const TextInput = forwardRef(({ icon, error, touched, ...rest }, ref) => {
  const validationColor = !touched ? "#223e4b" : error ? "red" : "#223e4b";
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
        borderRadius: 8,
        borderColor: validationColor,
        borderWidth: StyleSheet.hairlineWidth,
        padding: 8,
        backgroundColor: "#fff",
      }}
    >
      <RNTextInput
        allowFontScaling={false}
        returnKeyType="next"
        returnKeyLabel="next"
        underlineColorAndroid="transparent"
        placeholderTextColor="rgba(34, 62, 75, 0.7)"
        ref={ref}
        {...rest}
      />
    </View>
  );
});

export default TextInput;
