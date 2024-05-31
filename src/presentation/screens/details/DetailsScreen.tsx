import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text } from "react-native";
import { RootStackParams } from "../../navigation/Navigation";
import { useMovie } from "../../hooks/useMovie";

interface Props extends NativeStackScreenProps<RootStackParams, "Details"> {}

export const DetailsScreen = ({ route }: Props) => {
  const { movieId } = route.params;

  const {} = useMovie(movieId);
  console.log(movieId);
  return (
    <View>
      <Text>Details Screen</Text>
    </View>
  );
};
