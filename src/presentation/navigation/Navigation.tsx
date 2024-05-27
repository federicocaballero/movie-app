import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/home/HomeScreen";
import { DetailsScreen } from "../screens/details/DetailsScreen";

export type RootStackParams = {
  Home: undefined;
  Details: { movieId: number };
};

const Stack = createNativeStackNavigator();
export const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};
