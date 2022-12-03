import { createSlice, PayloadAction  } from "@reduxjs/toolkit";
import type { RootState } from '@/redux/store'
import localStorageDrive from "@/helpers/localStorageDriver";

interface MoviesSlice {
  favoriteMovies: number[];
  totalFavoriteMovies: number;
}

let initialState: MoviesSlice = {
  favoriteMovies: [],
  totalFavoriteMovies: 0,
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setAuth: (state, { payload }) => {
      return payload;
    },

    addFavoriteMovie(state, { payload }) {
      state.favoriteMovies.push(payload);
      state.totalFavoriteMovies = state.favoriteMovies.length;

      localStorageDrive.setValue('userData', {
        favoriteMovies: state.favoriteMovies,
        totalFavoriteMovies: state.totalFavoriteMovies,
      });
    },

    removeFavoriteMovie(state, { payload }) {
      state.favoriteMovies = state.favoriteMovies.filter((id) => id !== payload);
      state.totalFavoriteMovies = state.favoriteMovies.length;

      localStorageDrive.setValue('userData', {
        favoriteMovies: state.favoriteMovies,
        totalFavoriteMovies: state.totalFavoriteMovies,
      });
    },
  },
});

export const selectCount = (state: RootState) => state.movies.favoriteMovies;
export const moviesActions = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
