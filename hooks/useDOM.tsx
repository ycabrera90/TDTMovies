// version 1.0.4
import { useEffect, useState, useCallback } from "react";

type orientationType = "landscape" | "portrait" | null;
type sizesType = { width: number | null; height: number | null};
type useDOMType = { screen: { orientation: orientationType; size: sizesType } | null };

let convertPixelsToRem: (px: number) => number;
let getOrientation: () => orientationType;
let getSizes: () => sizesType;
let firstTime = true;


const useDOM = (unit?: 'rem' | 'px'): useDOMType => {
  const [orientation, setOrientation] = useState<orientationType>(null);
  const [size, setSize] = useState<sizesType>({ width: null, height: null });
  
  // difine this functions only once when the component is mounted due to browser APIs
  // IMPORTANT: we have to wait until the window is loaded
  useEffect(() => {
    convertPixelsToRem = (px) =>
      px / parseFloat(getComputedStyle(document.documentElement).fontSize);

    getOrientation = () =>
      window.innerWidth > window.innerHeight ? "landscape" : "portrait";

    getSizes = () => {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }

    firstTime = false;
  }, []);

  const domActions = useCallback(() => {
    setOrientation(getOrientation());
    setSize(getSizes());
  }, []);


  useEffect(() => {
    domActions();

    window.addEventListener('resize', () => {
      domActions();
    });

    return () => {
      window.removeEventListener('resize', () => {
        domActions();
      });
    };
  }, []);

  
  if (!firstTime && unit === 'rem') {
    return {
      screen: {
        orientation,
        size: {
          width: size.width ? convertPixelsToRem(size.width) : null,
          height: size.height ? convertPixelsToRem(size.height) : null,
        },
      },
    };
  }

  if (!firstTime) {
    return { screen: { orientation, size } };
  }

  return { screen: null };
};

export default useDOM;
