import React from "react";
import { ActivityIndicator } from "react-native";

export function Load() {
  return <ActivityIndicator color="#0088cc" size={60} style={{ flex: 1 }} />;
}
