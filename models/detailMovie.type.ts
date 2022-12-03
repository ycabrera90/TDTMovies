export interface IGenreAPI {
  id: number;
  name: string;
}

export interface IProductionCompanyAPI {
  name: string;
  id: number;
  logo_path: string | null;
  origin_country: string;
}

export interface IProductionCountryAPI {
  "iso_3166_1": string;
  "name": string;
}

export interface ISpokenLanguageAPI {
  "iso_639_1": string;
  "name": string;
}

export interface IDetailAPI {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: null | object;
  budget: number;
  genres: IGenreAPI[];
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: IProductionCompanyAPI[];
  production_countries: IProductionCountryAPI[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: ISpokenLanguageAPI[];
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IDetailAPP {
  id: number;
  title: string;
  genres: string[];
  overview: string;
  budget: number;
  releaseDate: string;
  runtime: number | null;
  voteAverage: number;
  spokenLanguages: string[];
  posterImage: string | null;
}

export const detailMovieEmpty: IDetailAPP = {
  id: 0,
  title: '',
  genres: [],
  overview: '',
  budget: 0,
  releaseDate: '',
  runtime: null,
  voteAverage: 0,
  spokenLanguages: [],
  posterImage: null,
};




