import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("dark");
  const [colorTheme, setColorTheme] = useState("theme-purple");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Apply theme from localStorage
    const savedThemeMode = localStorage.getItem("themeMode") || "dark";
    const savedColorTheme =
      localStorage.getItem("colorTheme") || "theme-purple";

    setThemeMode(savedThemeMode);
    setColorTheme(savedColorTheme);

    const root = document.documentElement;
    root.classList.remove(
      "dark",
      "light",
      "theme-purple",
      "theme-blue",
      "theme-emerald",
      "theme-orange",
    );

    if (savedThemeMode === "dark") {
      root.classList.add("dark");
    }
    root.classList.add(savedColorTheme);

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    const root = document.documentElement;
    root.classList.remove(
      "dark",
      "light",
      "theme-purple",
      "theme-blue",
      "theme-emerald",
      "theme-orange",
    );

    if (themeMode === "dark") {
      root.classList.add("dark");
    }
    root.classList.add(colorTheme);

    localStorage.setItem("themeMode", themeMode);
    localStorage.setItem("colorTheme", colorTheme);
  }, [themeMode, colorTheme, isLoaded]);

  const toggleThemeMode = () => {
    setThemeMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const changeColorTheme = (theme) => {
    setColorTheme(theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        themeMode,
        toggleThemeMode,
        colorTheme,
        changeColorTheme,
        isLoaded,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
