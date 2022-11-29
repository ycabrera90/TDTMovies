// version 1.0.3
import { useEffect, useState, useCallback } from "react";

type orientationType = "landscape" | "portrait";
type sizesType = { width: number; height: number };
type useDOMType = { screen: { orientation: orientationType; size: sizesType } };

let convertPixelsToRem = (px: number): number => 0;
let getOrientation = () : orientationType => "portrait";

const useDOM = (unit?: 'rem' | 'px'): useDOMType => {
  const [orientation, setOrientation] = useState<orientationType>('landscape');
  const [size, setSize] = useState<sizesType>({ width: 1366, height: 768 });

  // difien the functions only once when the component is mounted
  // IMPORTANT: we have to wait until the window is loaded
  useEffect(() => {
    convertPixelsToRem = (px) =>
      px / parseFloat(getComputedStyle(document.documentElement).fontSize);

    getOrientation = () =>
      window.innerWidth > window.innerHeight ? "landscape" : "portrait";
  }, []);

  const getSizes: () => sizesType = useCallback(() => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }, []);

  useEffect(() => {
    setOrientation(getOrientation());
    setSize(getSizes());

    window.addEventListener('resize', () => {
      setOrientation(getOrientation());
      setSize(getSizes());
    });

    return () => {
      window.removeEventListener('resize', () => {
        setOrientation(getOrientation());
      });
    };
  }, []);

  if (unit === 'rem') {
    return {
      screen: {
        orientation,
        size: {
          width: convertPixelsToRem(size.width),
          height: convertPixelsToRem(size.height),
        },
      },
    };
  }

  return { screen: { orientation, size } };
};



export default useDOM;
