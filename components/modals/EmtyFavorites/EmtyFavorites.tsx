import { Empty } from "antd";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./EmtyFavorites.module.scss";

export interface IEmtyFavorites {
  className?: string;
}

const EmtyFavorites: FC<IEmtyFavorites> = ({ className }) => {
  const [firstMount, setFirstMount] = useState<boolean>(true);
  const router = useRouter();

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
      <div
        className={[styles.container, className ? className : ''].join(' ')}
        onClick={() => router.push('/home')}
      >
        <Empty
          image="/empty_favorites_img.svg"
          imageStyle={{ height: '50vh' }}
          description="No tienes favoritos"
          style={{
            color: 'inherit',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            cursor: 'pointer',
          }}
        />
      </div>
    </CSSTransition>
  );
};

export default EmtyFavorites;
