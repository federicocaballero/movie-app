import axios from "axios";

const options = {
  method: "GET",
  url: "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}",
  //url: "https://api.themoviedb.org/3/movie/now_playing",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmRhNDAzNzdmYzkwMmZjMDIzZTIxMGJhNzY3OGRiMyIsInN1YiI6IjY2NTI3YjRjMzhmYzRiODBhYzA3ODZkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bND9up9a33f8emNfpcc4G29ONP7-LnAkNR2U8AMj_Q4",
  },
};

export const moviesNowPlayingUseCase = async () => {
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
