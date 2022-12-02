// v1.0.4
import AddRemButton from "@/components/buttons/AddRemButton/AddRemButton";
import CloseButton from "@/components/buttons/CloseButton/CloseButton";
import { IDetailAPP } from "@/models/detailMovie.type";
import { Skeleton } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import InfoData from "../InfoData/InfoData";
import { CSSTransition } from "react-transition-group";
import styles from "./MovieDetails.module.scss";

export interface IMovieDetails {
  className?: string;
  details: IDetailAPP;
}

const MovieDetails: FC<IMovieDetails> = ({ className, details }) => {
  const [imageLoading, setImageLoading] = useState<boolean>(true);
  const [firstMount, setFirstMount] = useState<boolean>(true);
  const router = useRouter();
  
  const {
    title,
    posterImage,
    budget,
    genres,
    overview,
    releaseDate,
    runtime,
    spokenLanguages,
    voteAverage,
  } = details;

  useEffect(() => {
    setFirstMount(false)
  }, []);
  
  return (
    <CSSTransition
      in={!firstMount}
      timeout={1}
      mountOnEnter
      unmountOnExit
      classNames={{ enterDone: styles.entered }}
    >
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
            // style={{ objectFit: 'cover' }}
            priority
            onLoadingComplete={() => setImageLoading(false)}
          />
          {imageLoading && (
            <Skeleton.Image active={true} className={styles.skeleton} />
          )}
        </section>
        <section className={styles.info}>
          <header>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles['add-remove-button__container']}>
              <AddRemButton
                type="remove"
                className={styles['add-remove-button']}
              />
            </div>
            <CloseButton
              className={styles['close-button']}
              onClick={() => router.back()}
            />
          </header>
          <article className={styles.genres}>
            {genres.map((genre, index) => {
              if (genre) {
                return (
                  <span key={index} className={styles['genres-item']}>
                    {genre}
                  </span>
                );
              }
            })}
          </article>
          <p className={styles.overview}>{overview}</p>
          <InfoData tag="Presupuesto" value={budget} unit="$" />
          <InfoData tag="Lanzamiento" value={releaseDate} />
          <InfoData tag="Duración" value={runtime ? runtime : ''} unit="min" />
          <InfoData tag="Valoración" value={voteAverage} />
          <article className={styles.languajes}>
            {spokenLanguages.map((lang, index) => {
              if (lang) {
                return (
                  <span key={index} className={styles['genres-item']}>
                    {lang}
                  </span>
                );
              }
            })}
          </article>
        </section>
      </article>
    </CSSTransition>
  );
};

export default MovieDetails;
