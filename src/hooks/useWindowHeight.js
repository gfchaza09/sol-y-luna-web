import { useEffect, useState } from "react";

export function useWindowHeight() {
  const [height, setHeight] = useState(undefined);

  useEffect(() => {
    setHeight(window.innerHeight);
    const handleResize = () => {
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return [height, setHeight];
}
