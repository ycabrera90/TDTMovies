import { Empty } from "antd";
import { FC, useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./NotFoundMovieModal.module.scss";

export interface INotFoundMovieModal {
  className?: string;
}

const NotFoundMovieModal: FC<INotFoundMovieModal> = ({ className }) => {
  const [firstMount, setFirstMount] = useState<boolean>(true);

  useEffect(() => {
    setFirstMount(false)
  }, []);

  return (
    <CSSTransition
      in={!firstMount}
      timeout={1000}
      mountOnEnter
      unmountOnExit
      classNames={{ enterDone: styles.entered }}
    >
      <div className={[styles.container, className ? className : ''].join(' ')}>
        <Empty
          image="/movie_not-found.svg"
          imageStyle={{ height: '50vh' }}
          description="No se encontraron resultados para tu busqueda"
          style={{ color: 'inherit', fontFamily: 'inherit' }}
        />
      </div>
    </CSSTransition>
  );
};

export default NotFoundMovieModal;
