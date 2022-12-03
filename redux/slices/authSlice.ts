import { createSlice, PayloadAction  } from "@reduxjs/toolkit";
import type { RootState } from '@/redux/store'
import localStorageDrive from "@/helpers/localStorageDriver";

interface AuthSlice {
  favoriteMovies: number[];
  totalFavoriteMovies: number;
}

let initialState: AuthSlice = {
  favoriteMovies: [],
  totalFavoriteMovies: 0,
};

export const authSlice = createSlice({
  name: 'auth',
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

export const selectCount = (state: RootState) => state.auth.favoriteMovies;
export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
