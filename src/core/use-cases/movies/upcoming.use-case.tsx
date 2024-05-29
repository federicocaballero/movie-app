import { HttpAdapter } from "../../../config/adapters/http/http.adapters";
import { MovieDBMovieResponse } from "../../../infraestructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infraestructure/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entity";

export const moviesUpcomingUseCase = async (
  fetcher: HttpAdapter
): Promise<Movie[]> => {
  try {
    const upcoming = await fetcher.get<MovieDBMovieResponse>("/upcoming");

    return upcoming.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching movies - UpcomingUseCase");
  }
};
