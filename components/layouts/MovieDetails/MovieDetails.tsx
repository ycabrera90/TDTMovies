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
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { authActions } from "@/redux/slices/authSlice";

export interface IMovieDetails {
  className?: string;
  details: IDetailAPP;
}

const MovieDetails: FC<IMovieDetails> = ({ className, details }) => {
  const [imageLoading, setImageLoading] = useState<boolean>(true);
  const [firstMount, setFirstMount] = useState<boolean>(true);
  const [addRemBttnType, setAddRemBttnType] = useState<'add'|'remove'>('add');
  const router = useRouter();
  const favoriteMovies = useAppSelector(state => state.auth.favoriteMovies)
  const dispatch = useAppDispatch()
  
  const {
    id,
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

  const addRemButtonClickHandler = (action: "add" | "remove") => {
    if (action === 'add') {
      dispatch(authActions.addFavoriteMovie({id,title,overview,posterImage,voteAverage}))
    }
    
    if (action === 'remove') {
      dispatch(authActions.removeFavoriteMovie(id))
    }
  }

  useEffect(() => {
    setFirstMount(false)
  }, []);

  useEffect(() => {
    if (favoriteMovies.find(movie => movie.id === id)) {
      setAddRemBttnType('remove')
    } else {
      setAddRemBttnType('add')
    }
  }, [favoriteMovies])
  
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
            <h1 className={styles.title}>
              {title}
              <AddRemButton
                className={styles['add-remove-button']}
                type={addRemBttnType} 
                onClick={addRemButtonClickHandler} 
              />
            </h1>
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
