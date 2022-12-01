// v1.0.4
import AddRemButton from "@/components/buttons/AddRemButton/AddRemButton";
import { IDetailAPP } from "@/models/detailMovie.type";
import Image from "next/image";
import { run } from "node:test";
import { FC } from "react";
import styles from "./MovieDetails.module.scss";

export interface IMovieDetails {
  className?: string;
  details: IDetailAPP;
}

const MovieDetails: FC<IMovieDetails> = ({
  className,
  details: {
    title,
    posterImage,
    budget,
    genres,
    overview,
    releaseDate,
    runtime,
    spokenLanguages,
    voteAverage,
  },
}) => {
  return (
    <article
      className={[styles.container, className ? className : ''].join(' ')}
    >
      <section className={styles.poster}>
        <Image
          className={styles.image}
          alt={title}
          src={`${posterImage ? posterImage : ''}`}
          fill
          sizes="50vw"
          style={{ objectFit: 'cover' }}
          priority
          // onLoadingComplete={() => setImageLoading(false)}
        />
      </section>
      <section className={styles.info}>
        <header>
          <h1 className={styles.title}>{title}</h1>
          <div>
            <AddRemButton type="remove" className={styles['add-remove-button']}/>
          </div>
          <span className={styles['close-button']}>X</span>
        </header>
        <article className={styles.genres}>
          <span>Accion</span>
          <span>Fantasia</span>
          <span>Ciencia Ficcion</span>
        </article>
        <p className={styles.overview}>{overview}</p>
        <div>
          <label>Presupuesto:</label><span>{`${budget}$`}</span>
        </div>
        <div>
          <label>Lanzamiento:</label><span>{releaseDate}</span>
        </div>
        <div>
          <label>Duracion:</label><span>{`${runtime} min`}</span>
        </div>
        <div>
          <label>Valoración:</label><span>{voteAverage}</span>
        </div>
        <article className={styles.languajes}>
          <span>English</span>
          <span>Dansk</span>
        </article>



      </section>
    </article>
  );
};

export default MovieDetails;
