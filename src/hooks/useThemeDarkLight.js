import { useLocalStorage } from "./useLocalStorage";

export function useThemeDarkLight() {
  let theme;
  if (typeof window !== "undefined") {
    theme = JSON.parse(localStorage.getItem("theme")) || "light";
  }
  return useLocalStorage("theme", theme);
}
