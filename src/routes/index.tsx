import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Comics } from "../screens/Comics";

export type IRoute = {
  Home: undefined;
  Comics: { characterId: number };
};

const AppStack = createNativeStackNavigator<IRoute>();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Comics" component={Comics} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
