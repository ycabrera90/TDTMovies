import { moviesAdapter } from "@/adapters/movieDb.adapter";
import httpClient from "@/helpers/httpClient";
import { IMoviesAPP } from "@/models/movies.type";

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
  
  search: {
    path: "/search/movie",
    options: {
      params: {
        api_key: `${process.env.NEXT_PUBLIC_API_KEY}`,
        language: "es",
        page: "1",
        query: "",
      },
    },
  }
};

export interface IMovieDbService {
  getPopularMovies: (page?:number) => Promise<any>;
  searchMovies: (query: string, page?:number) => Promise<any>;
}

const movieDbService: IMovieDbService = {
  getPopularMovies: async (page) => {
    apiEndPoints.popular.options.params.page = `${page}`;
    const data = await httpClient.get(`${apiUrl}${apiEndPoints.popular.path}`,apiEndPoints.popular.options);
    return moviesAdapter(data);
  },

  searchMovies: async (query, page) => {
    apiEndPoints.search.options.params.page = `${page}`;
    apiEndPoints.search.options.params.query = query;
    const data = await httpClient.get(`${apiUrl}${apiEndPoints.search.path}`,apiEndPoints.search.options);
    return moviesAdapter(data);
  }
}

export default movieDbService;