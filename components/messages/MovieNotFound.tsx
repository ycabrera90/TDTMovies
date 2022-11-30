// v1.0.4
import { Empty } from "antd";
import { FC } from "react";
import styles from "./MovieNotFound.module.scss";

export interface IMovieNotFound {
  className?: string;
}

const MovieNotFound: FC<IMovieNotFound> = ({ className }) => {
  return (
    <div className={[styles.container, className ? className : ''].join(' ')}>
      <Empty
        image="/movie_not-found.svg"
        imageStyle={{ height: '50vh' }}
        description="No se encontraron resultados para tu busqueda"
        style={{ color: 'inherit', fontFamily: 'inherit' }}
      />
    </div>
  );
};

export default MovieNotFound;
