import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text } from "react-native";
import { RootStackParams } from "../../navigation/Navigation";
import { useMovie } from "../../hooks/useMovie";
import { MovieHeader } from "../../componnets/movie/MovieHeader";

interface Props extends NativeStackScreenProps<RootStackParams, "Details"> {}

export const DetailsScreen = ({ route }: Props) => {
  const { movieId } = route.params;

  const { isLoading, movie } = useMovie(movieId);
  if (isLoading) {
    return <Text>Loaging...</Text>;
  }
  console.log(movieId);

  return (
    <View>
      {/* HEADER */}
      <MovieHeader
        originalTitle={movie!.originalTitle}
        poster={movie!.poster}
        title={movie!.title}
      />

      {/* DETALLES */}
    </View>
  );
};
