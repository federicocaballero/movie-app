import React from "react";
import { StyleSheet, Image, View, Pressable, Text } from "react-native";
import { Movie } from "../../../core/entities/movie.entity";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../../navigation/Navigation";

interface Props {
  movie: Movie;
  height: number;
  width: number;
}

export const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const removeSpaces = (movie: string) => movie.replace(/\s+/g, "");

  return (
    <Pressable
      onPress={() => navigation.navigate("Details", { movieId: movie.id })}
      style={({ pressed }) => ({
        width,
        height,
        marginHorizontal: 10,
        paddingBottom: 20,
        paddingHorizontal: 10,
        opacity: pressed ? 0.9 : 1,
        borderRadius: 20,
      })}
    >
      <View style={styles.iamgeContainer}>
        {/* La url de la imagen solo devuelve un h1 como resultado */}

        <Image
          style={styles.image}
          source={{ uri: removeSpaces(movie.poster) }}
        />
        {/* Puse este text para saber que pelicula es */}
        <Text style={{ margin: 20 }}> Titulo: {movie.title} </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },

  iamgeContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
  },
});
