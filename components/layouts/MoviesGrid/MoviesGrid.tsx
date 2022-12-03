import { FC } from "react";
import MovieCard from "@/components/cards/MovieCard/MovieCard";
import { IMoviesResultsAPP } from "@/models/movies.type";
import styles from "./MoviesGrid.module.scss";

export interface IMoviesGrid {
  movies: IMoviesResultsAPP[];
}

const MoviesGrid: FC<IMoviesGrid> = ({movies}) => {
  console.log(movies);
  return (
    <div className={styles.container}>
      {movies.map(({id, title, overview, posterImage, voteAverage}, index) => {
        return(
        <MovieCard
          key={index}
          id={id}
          title={title}
          imageUrl={posterImage}
          overview={overview}
          voteAverage={voteAverage}
          className={styles["movie-card"]}
        />
      )})}
    </div>
  );
};

export default MoviesGrid;
