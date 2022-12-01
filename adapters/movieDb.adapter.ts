import { IDetailAPI, IDetailAPP } from "@/models/detailMovie.type";
import { IMoviesAPI, IMoviesAPP } from "@/models/movies.type";
import { imageBaseUrl, imageSize } from "@/services/movieDb.service";

export const moviesAdapter: (datas: IMoviesAPI) => IMoviesAPP = ({
  page,
  results,
  total_pages,
  total_results,
}) => {
  return {
    currentPage: page,
    totalPages: total_pages,
    totalResults: total_results,
    movies: results.map(({ id, title, overview, poster_path, vote_average }) => {
        const posterImage = poster_path ? `${imageBaseUrl}/${imageSize}${poster_path}` : null;
        return {
          id,
          title,
          overview,
          posterImage,
          voteAverage: vote_average,
        };
      }
    ),
  };
};

export const detailMovieAdapter: (data: IDetailAPI) => IDetailAPP = ({
  title,
  genres,
  overview,
  budget,
  release_date,
  runtime,
  vote_average,
  spoken_languages,
  poster_path,
  backdrop_path
}) => {
  const posterImage = poster_path ? `${imageBaseUrl}/${imageSize}${poster_path}`: null;
  return {
    title,
    genres: genres.map(({ name }) => name),
    overview,
    budget,
    releaseDate: release_date,
    runtime,
    voteAverage: vote_average,
    spokenLanguages: spoken_languages.map(({ name }) => name),
    posterImage,
  };
};
