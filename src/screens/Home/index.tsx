import React from "react";

import { Text, View } from "react-native";

export function Home() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "#FFF" }}>HELLO WORLD</Text>
    </View>
  );
}
