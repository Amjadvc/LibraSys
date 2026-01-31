import { createContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

function DarkModeProvider() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return (
      localStorage.getItem("isDarkMode") === "true" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  });

    useEffect(() => {
      
  }, []);
  return <div></div>;
}

export default DarkModeContext;
