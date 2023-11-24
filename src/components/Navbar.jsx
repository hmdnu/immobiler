import { useState } from "react";
import { navbar } from "../constant";
import { useEffect } from "react";

export default function Navbar() {
  const [view, setView] = useState(true);

  function handleScrollNavbar() {
    const scroll = document.documentElement.scrollTop;

    if (scroll === 0) {
      setView(true);
    } else if (scroll > 570) {
      setView(true);
    } else {
      setView(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollNavbar);
  }, []);

  return (
    <>
      <nav
        id="nav"
        className={`z-50 fixed w-full py-3 text-white ${view ? "opacity-1" : "opacity-0"} transition-[1s]`}
      >
        <div className="w-[85%] md:w-[80%] m-auto flex items-center justify-between">
          <h1 className="font-bold text-lg">IMMOBILIER</h1>

          <div className="flex gap-2 md:gap-10">
            {navbar.map((nav, i) => (
              <div key={i}>
                <a href={`#${nav.link}`} className="text-base">
                  {nav.name}
                </a>
              </div>
            ))}
          </div>
          <div className="flex gap-2 md:gap-5 items-center">
            <a href="#">LOGIN</a>
            <a href="#" className="border border-white px-3 py-1">
              SIGN UP
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
