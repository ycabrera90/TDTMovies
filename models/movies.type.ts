export interface IMoviesResultsAPI {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface IMoviesAPI {
  page: number;
  results: IMoviesResultsAPI[];
  total_pages: number;
  total_results: number;
}

export interface IMoviesResultsAPP {
  title: string;
  overview: string;
  posterImage: string | null;
  voteAverage: number;
}

export interface IMoviesAPP {
  currentPage: number;
  totalPages: number;
  totalResults: number;
  movies: IMoviesResultsAPP[];
}

export const moviesEmpty: IMoviesAPP = {
  currentPage: 0,
  totalPages: 0,
  totalResults: 0,
  movies: [],
}




