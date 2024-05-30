import React, { useEffect, useState } from "react";
import type { Movie } from "../../core/entities/movie.entity";
import * as UseCases from "../../core/use-cases";
import { movieDBFetcher } from "../../config/adapters/http/movieDB.adapter";

let popularPageNumber = 1;

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlatying] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlayingPromise = await UseCases.moviesNowPlayingUseCase(
      movieDBFetcher
    );
    const popularPromise = await UseCases.moviesPopularUseCase(movieDBFetcher);
    const topRatedPromise = await UseCases.moviesTopRatedrUseCase(
      movieDBFetcher
    );
    const upcomingPromise = await UseCases.moviesUpcomingUseCase(
      movieDBFetcher
    );

    const [nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies] =
      await Promise.all([
        nowPlayingPromise,
        popularPromise,
        topRatedPromise,
        upcomingPromise,
      ]);

    setNowPlatying(nowPlayingMovies);
    setPopular(popularMovies);
    setTopRated(topRatedMovies);
    setUpcoming(upcomingMovies);

    setIsLoading(false);
  };
  return {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming,

    //methos
    popularNextPage: async () => {
      popularPageNumber++;
      const popularMovies = await UseCases.moviesPopularUseCase(
        movieDBFetcher,
        {
          page: popularPageNumber,
        }
      );

      setPopular((prev) => [...prev, ...popularMovies]);
    },
  };
};
