import * as React from "react";

import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "./src/presentation/navigation/Navigation";
import { moviesNowPlayingUseCase } from "./src/core/use-cases/movies/now-playing.use-case";
import { movieDBFetcher } from "./src/config/adapters/http/movieDB.adapter";
export default function App() {
  React.useEffect(() => {
    moviesNowPlayingUseCase(movieDBFetcher);
  }, []);

  return (
    <NavigationContainer>
      <Navigation></Navigation>
    </NavigationContainer>
  );
}
