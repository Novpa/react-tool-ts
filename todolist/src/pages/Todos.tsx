import { useState } from "react";
import Box from "../components/Box";
import HeroBanner from "../components/HeroBanner";

function Todos() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  return (
    <>
      <main
        className={`main-bg ${isDarkTheme ? "bg-black" : "bg-white"} h-dvh`}
      >
        <HeroBanner isDarkTheme={isDarkTheme} />
        <Box isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
      </main>
    </>
  );
}

export default Todos;
