import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import AddRemButton from "@/components/buttons/AddRemButton/AddRemButton";
import CSSTransition from "react-transition-group/CSSTransition";
import { Skeleton } from "antd";
import { useRouter } from "next/router";
import styles from "./MovieCard.module.scss";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { authActions } from "@/redux/slices/authSlice";


export interface IMovieCard {
  className?: string;
  id: number;
  title: string;
  overview: string;
  imageUrl: string | null;
  voteAverage: number;
}

const MovieCard: FC<IMovieCard> = ({ className, id, title, overview, imageUrl, voteAverage }) => {
  const favoriteMovies = useAppSelector(state => state.auth.favoriteMovies)
  const dispatch = useAppDispatch()
  const [validMovie, setValidMovie] = useState<boolean>(false);
  const [imageLoading, setImageLoading] = useState<boolean>(true);
  const [cardHeight, setCardHeight ] = useState<number>(307.04);
  const [addRemBttnType, setAddRemBttnType] = useState<'add'|'remove'>('add');
  const cardDOM = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const addRemButtonClickHandler = (action: "add" | "remove") => {
    if (action === 'add') {
      dispatch(authActions.addFavoriteMovie(id))
    }
    
    if (action === 'remove') {
      dispatch(authActions.removeFavoriteMovie(id))
    }
  }
  
  const clickImageHandler = () => {
    router.push(`/details/${id}`);
  }
  
  useEffect(() => {
      const invalid = title && overview && imageUrl && voteAverage;
      setValidMovie(!!invalid)
  }, []);

  useEffect(() => {
    if(validMovie) {
      new ResizeObserver(()=>{
        if(cardDOM.current){
          setCardHeight(cardDOM.current?.clientWidth * 1.26);
        }
      }).observe(cardDOM.current!);
    }
  }, [validMovie]);

  useEffect(() => {
    if(favoriteMovies.includes(id)) {
      setAddRemBttnType('remove')
    } else {
      setAddRemBttnType('add')
    }
  }, [favoriteMovies])
  

  return (
    <CSSTransition
      in={validMovie}
      timeout={1}
      mountOnEnter
      unmountOnExit
      classNames={{ enterDone: styles.entered }}
    >
      <article
        className={[styles.container, className ? className : ''].join(' ')}
        ref={cardDOM}
        style={{ height: cardHeight }}
      >
        {imageLoading && (
          <Skeleton.Image active={true} className={styles.skeleton} />
        )}
        <div className={styles['bottom-fog']} />
        <span className={styles.badge}>{voteAverage}</span>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.overview}>{overview}</p>
        <Image
          className={styles.image}
          alt={title}
          src={`${imageUrl ? imageUrl : ''}`}
          fill
          sizes="50vw"
          style={{ objectFit: 'cover' }}
          priority
          onLoadingComplete={() => setImageLoading(false)}
          onClick={clickImageHandler}
        />
        <AddRemButton className={styles['add-rem-button']} type={addRemBttnType} onClick={addRemButtonClickHandler} />
      </article>
    </CSSTransition>
  );
};

export default MovieCard;
