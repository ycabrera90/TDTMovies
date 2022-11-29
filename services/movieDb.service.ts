import { moviesAdapter } from "@/adapters/movieDb.adapter";
import httpClient from "@/helpers/httpClient";

export const apiUrl = "https://api.themoviedb.org/3";
export const imageBaseUrl = "https://image.tmdb.org/t/p";
export const imageSize="w300";

const apiEndPoints = {
  popular: {
    path: "/movie/popular",
    options: {
      params: {
        api_key: `${process.env.NEXT_PUBLIC_API_KEY}`,
        language: "es",
        page: "1",
      },
    },
  },
};

export interface IMovieDbService {
  getPopularMovies: (page?:number) => Promise<any>;
}

const movieDbService: IMovieDbService = {
  getPopularMovies: async (page) => {
    apiEndPoints.popular.options.params.page = `${page}`;
    const data = await httpClient.get(`${apiUrl}${apiEndPoints.popular.path}`,apiEndPoints.popular.options);
    return moviesAdapter(data);
  },
}

export default movieDbService;