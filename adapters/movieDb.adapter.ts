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
    movies: results.map(({ title, overview, poster_path, vote_average }) => {
        const posterImage = poster_path ? `${imageBaseUrl}/${imageSize}${poster_path}` : null;
        return {
          title,
          overview,
          posterImage,
          voteAverage: vote_average,
        };
      }
    ),
  };
};

