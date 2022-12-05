// v1.0.4
import { BaseSyntheticEvent, FC } from "react";
import CSSTransition from "react-transition-group/CSSTransition";
import styles from "./ToggleMenu.module.scss";

export interface IToggleMenu {
  className?: string;
  expanded: boolean;
  onBackdropClick?: () => void;
  children?: React.ReactNode;
}

const ToggleMenu: FC<IToggleMenu> = ({ className, expanded, onBackdropClick, children }) => {
  const clickHandler = (e: BaseSyntheticEvent) => {
    if(e.target.classList.contains(styles.container)){
      onBackdropClick && onBackdropClick();
    }
  }

  return (
    <CSSTransition
      in={expanded}
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
        onClick={clickHandler}
      >
        <section className={styles.menu}>{children}</section>
      </div>
    </CSSTransition>
  );
};

export default ToggleMenu;
