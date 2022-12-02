// v1.0.4
import { BaseSyntheticEvent, FC, ReactNode, createContext, useState } from "react";
import MainHeader from "@/components/headers/MainHeader/MainHeader";
import styles from "./MainLayout.module.scss";

export interface IMainLayout {
  className?: string;
  children: ReactNode;
  scroll?: { trigger: number };
}

export const MainLayoutContext = createContext({ scrollEvent: 0});

let scrollEvents = true;

const MainLayout: FC<IMainLayout> = ({ className, children, scroll }) => {
  const [ scrollEvent, setScrollEvent ] = useState(1);
  
  const scrollEventHandler = (event:BaseSyntheticEvent):void => {
    if (!scroll) {
      return;
    }

    try {
      const domElement = event.target;
      let scrolledContainer = domElement.scrollTop;
      let containerHeight = domElement.getBoundingClientRect().height;
      let itemsHeght = domElement.childNodes[0].getBoundingClientRect().height;
      let maxScrollItems = itemsHeght - containerHeight;
      let percentScrolledContainer = (scrolledContainer / maxScrollItems) * 100;
      if (percentScrolledContainer > scroll.trigger) {
        if (scrollEvents) {
          setScrollEvent((state) => state + 1);
          scrollEvents = false;
          setTimeout(() => {
            scrollEvents = true;
          }, 1000);
        }
      }
    } catch (error) {
      // console.error(error);
    }
  };

  return (
    <div className={[styles.container, className ? className : ''].join(' ')}>
      <MainHeader />
      <MainLayoutContext.Provider value={{ scrollEvent: scrollEvent }}>
        <main onScroll={scrollEventHandler}>{children}</main>
      </MainLayoutContext.Provider>
    </div>
  );
};

export default MainLayout;
