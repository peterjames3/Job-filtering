import React, { useState, useEffect } from "react";
import bgHeaderDesk from "../assets/bg-header-desktop.svg";
import bgHeaderMob from "../assets/bg-header-mobile.svg";

const Navbar = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="w-full h-[13rem] bg-DesaturatedDarkCyan  overflow-hidden">
      {screenWidth > 480 ? (
        <img
          src={bgHeaderDesk}
          alt=""
          className="w-full h-full object-cover object-center "
        />
      ) : (
        <img
          src={bgHeaderMob}
          alt=""
          className="w-full h-full object-cover object-center "
        />
      )}
    </header>
  );
};

export default Navbar;
