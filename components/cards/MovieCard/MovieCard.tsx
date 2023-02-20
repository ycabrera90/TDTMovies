import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import CSSTransition from "react-transition-group/CSSTransition";
import { Skeleton } from "antd";
import { authActions } from "@/redux/slices/authSlice";
import AddRemButton from "@/components/buttons/AddRemButton/AddRemButton";
import InfoFog from "@/components/layouts/InfoFog/InfoFog";
import styles from "./MovieCard.module.scss";

export interface IMovieCard {
  className?: string;
  id: number;
  title: string;
  overview: string;
  imageUrl: string | null;
  voteAverage: number;
}

const MovieCard: FC<IMovieCard> = ({ className, id, title, overview, imageUrl, voteAverage }) => {
  const [validMovie, setValidMovie] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const [isCardRemoved, setIsCardRemoved] = useState(false);   // <-- only for add a transition when the card is removed
  const [cardHeight, setCardHeight ] = useState(307.04);
  const [addRemBttnType, setAddRemBttnType] = useState<'add'|'remove'>('add');
  const favoriteMovies = useAppSelector(state => state.auth.favoriteMovies)
  const dispatch = useAppDispatch()
  const cardDOM = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const addRemButtonClickHandler = (action: "add" | "remove") => {
    if (action === 'add') {
      dispatch(authActions.addFavoriteMovie({id, title, overview, posterImage: imageUrl, voteAverage}))
    }

    if (action === 'remove') {
      // this condition is for add a transition when remove a card of favorites
      if(router.pathname === '/favorites') {
        setIsCardRemoved(true)
        setTimeout(() => {
          dispatch(authActions.removeFavoriteMovie(id))
        }, 250);
      } else {
        dispatch(authActions.removeFavoriteMovie(id))
      }
    }
  }
  
  const clickImageHandler = () => {
    router.push(`/details/${id}`);
  }
  
  useEffect(() => {
      const movieValidation = title && overview && imageUrl && voteAverage;
      setValidMovie(!!movieValidation)
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
    if (favoriteMovies.find(movie => movie.id === id)) {
      setAddRemBttnType('remove')
    } else {
      setAddRemBttnType('add')
    }
  }, [favoriteMovies])

  return (
    <CSSTransition
      in={validMovie && !isCardRemoved}
      timeout={250}
      mountOnEnter
      unmountOnExit
      classNames={{
        enterActive: styles.entered,
        enterDone: styles.entered,
        exitActive: styles.exiting,
      }}
    >
      <div
        className={[styles.container, className ? className : ''].join(' ')}
        style={{ height: cardHeight }}
        data-testid="MovieCard"
      >
        <article className={styles.card} ref={cardDOM}>
          {imageLoading && (
            <Skeleton.Image active={true} className={styles.skeleton} />
          )}
          <span className={styles.badge}>{voteAverage}</span>
          <InfoFog title={title} overview={overview} />
          <Image
            className={styles.image}
            src={`${imageUrl ? imageUrl : ''}`}
            alt={title}
            sizes="50vw"
            style={{ objectFit: 'cover' }}
            onLoadingComplete={() => setImageLoading(false)}
            onClick={clickImageHandler}
            fill
            priority
            data-testid="MovieCardImage"
          />
          <AddRemButton
            className={styles['add-rem-button']}
            type={addRemBttnType}
            onClick={addRemButtonClickHandler}
          />
        </article>
      </div>
    </CSSTransition>
  );
};

export default MovieCard;
