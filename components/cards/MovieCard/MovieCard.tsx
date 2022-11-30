// v1.0.4
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import AddRemButton from "@/components/buttons/AddRemButton/AddRemButton";
import styles from "./MovieCard.module.scss";

export interface IMovieCard {
  className?: string;
  title: string;
  overview: string;
  imageUrl: string | null;
  voteAverage: number;
}

const MovieCard: FC<IMovieCard> = ({ className, title, overview, imageUrl, voteAverage }) => {
  if (!title || !overview || !imageUrl || !voteAverage) {
    return <></>;
  }

  const cardDOM = useRef<HTMLInputElement>(null);
  const [cardHeight, setCardHeight ] = useState<number>(307.04);

  useEffect(() => {
    new ResizeObserver(()=>{
      if(cardDOM.current){
        setCardHeight(cardDOM.current?.clientWidth * 1.26);
      }
    }).observe(cardDOM.current!);
  }, []);

  return (
    <article
      className={[styles.container, className ? className : ''].join(' ')}
      ref={cardDOM}
      style={{ height: cardHeight }}
    >
      <div className={styles['bottom-fog']} />
      <span className={styles.gadge}>{voteAverage}</span>
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
      />
      <AddRemButton className={styles['add-rem-button']} type="add" />
    </article>
  );
};

export default MovieCard;
