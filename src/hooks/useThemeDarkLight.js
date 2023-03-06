import { useLocalStorage } from "./useLocalStorage";

export function useThemeDarkLight() {
  let theme = "light";
  if (typeof window !== "undefined") {
    theme = JSON.parse(localStorage.getItem("theme"));
  }
  return useLocalStorage("theme", theme);
}
