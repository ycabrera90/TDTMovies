// v1.0.4
import MainHeader from "@/components/headers/MainHeader/MainHeader";
import { FC } from "react";
import styles from "./MainLayout.module.scss";

export interface IMainLayout {
  className?: string;
  children: React.ReactNode;
}

const MainLayout: FC<IMainLayout> = ({ className, children }) => {
  return (
    <div className={[styles.container, className ? className : ''].join(' ')}>
      <MainHeader/>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
