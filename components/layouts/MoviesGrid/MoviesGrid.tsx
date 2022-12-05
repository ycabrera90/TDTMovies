import { FC } from "react";
import { IMoviesResultsAPP } from "@/models/movies.type";
import MovieCard from "@/components/cards/MovieCard/MovieCard";
import styles from "./MoviesGrid.module.scss";

export interface IMoviesGrid {
  movies: IMoviesResultsAPP[];
}

const MoviesGrid: FC<IMoviesGrid> = ({movies}) => {

  return (
    <div className={styles.container}>
      {movies.map(({id, title, overview, posterImage, voteAverage}, index) => {
        return(
        <MovieCard
          key={index + id}
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
