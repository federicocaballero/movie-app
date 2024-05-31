import { StackScreenProps } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { RootStackParams } from "../../navigation/Navigation";
import { useMovie } from "../../hooks/useMovie";
import { MovieHeader } from "../../componnets/movie/MovieHeader";
import { MovieDetails } from "../../componnets/movie/MovieDetails";
import { ScrollView } from "react-native";
import { FullScreenLoader } from "../../componnets/loaders/FullScreenLoader";

interface Props extends StackScreenProps<RootStackParams, "Details"> {}

export const DetailsScreen = ({ route }: Props) => {
  const { movieId } = route.params;
  // const { movieId } = useRoute().params;
  const { isLoading, movie, cast = [] } = useMovie(movieId);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <ScrollView>
      {/* Header */}
      <MovieHeader
        originalTitle={movie!.originalTitle}
        title={movie!.title}
        poster={movie!.poster}
      />

      {/* Details */}
      <MovieDetails movie={movie!} cast={cast} />
    </ScrollView>
  );
};
