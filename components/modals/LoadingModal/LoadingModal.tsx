// v1.0.4
import { Spin } from "antd";
import { FC } from "react";
import styles from "./LoadingModal.module.scss";

export interface ILoadingModal {
  className?: string;
}

const LoadingModal: FC<ILoadingModal> = ({ className }) => {
  return (
    <div className={[styles.container, className ? className : ''].join(' ')}>
      <Spin tip="Loading" size="large">
        <div className={styles.content} />
      </Spin>
    </div>
  );
};

export default LoadingModal;
