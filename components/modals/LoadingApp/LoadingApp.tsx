import { FC, useEffect, useState } from "react";
import CSSTransition from "react-transition-group/CSSTransition";
import styles from "./LoadingApp.module.scss";

export interface ILoadingApp {
  className?: string;
  onStart?: () => void;
}

const LoadingApp: FC<ILoadingApp> = ({ className, onStart}) => {
  const [loadingApp, setLoadingApp] = useState<boolean>(false);

  useEffect(() => {
    setLoadingApp(true);
    setTimeout(() => {
      setLoadingApp(false);
    }, 3000);
  }, []);

  return (
    <CSSTransition
      in={loadingApp}
      timeout={2000}
      mountOnEnter
      unmountOnExit
      classNames={{
        enterActive: styles.enter,
        enterDone: styles.entered,
        exitActive: styles.exiting,
        exitDone: styles.exit,
      }}
      onEntered={onStart}
    >
      <div className={[styles.container, className ? className : ''].join(' ')}/>
    </CSSTransition>
  );
};

export default LoadingApp;
