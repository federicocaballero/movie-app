import { AxiosAdapter } from "./axios.adapter";

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: "1bda40377fc902fc023e210ba7678db3",
    language: "es",
  },
});
