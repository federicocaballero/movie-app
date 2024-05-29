import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useMovies } from "../../hooks/useMovies";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PosterCarousel } from "../../componnets/movies/PosterCarousel";
import { HorizontalCarousel } from "../../componnets/movies/HorizontalCarousel";

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  const { isLoading, nowPlaying, popular } = useMovies();
  if (isLoading) {
    return <Text>Cargando...</Text>;
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 20, paddingBottom: 30 }}>
        <PosterCarousel height={450} movies={nowPlaying} />
        <HorizontalCarousel movies={popular} title="Populares" />
      </View>
    </ScrollView>
  );
};
