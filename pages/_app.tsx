import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { FC, ReactElement, ReactNode, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { useAppDispatch } from "@/redux/hooks";
import { authActions } from "@/redux/slices/authSlice";
import localStorageDrive from "@/helpers/localStorageDriver";
import "@/styles/global.scss";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & { Component: NextPageWithLayout };

const CustomProvider: FC<{children : ReactNode}> = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authActions.setAuth(localStorageDrive.getValue("userData")));
  }, []);

  return <>{children}</>;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <Provider store={store}>
      <CustomProvider>{getLayout(<Component {...pageProps} />)}</CustomProvider>
    </Provider>
  );
}

export default MyApp;
