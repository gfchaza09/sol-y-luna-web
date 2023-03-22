import { useEffect, useState } from "react";

export function useWindowWidth() {
  const [width, setWidth] = useState(undefined);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return [width, setWidth];
}
