import * as React from "react";

import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "./src/presentation/navigation/Navigation";
import { moviesNowPlayingUseCase } from "./src/core/use-cases/movies/now-playing.use-case";
export default function App() {
  console.log(moviesNowPlayingUseCase);
  return (
    <NavigationContainer>
      <Navigation></Navigation>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
