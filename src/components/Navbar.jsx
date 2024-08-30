import { useState, useEffect, useContext } from "react"

import { LocaleContext } from "../contexts/LocaleContext"
import useThemeDetector from "../hooks/useThemeDetector.jsx"
import Links from "./Links.jsx"

import IconEye from "../icons/IconEye.jsx"

import langFr from "../data/langFr.json"
import langEn from "../data/langEn.json"

function Navbar() {
  const isDarkTheme = useThemeDetector()
  const [theme, setTheme] = useState(isDarkTheme?"portfolioDark":"portfolioLight")
  const toggleTheme = () => {
    setTheme(theme === "portfolioDark" ? "portfolioLight" : "portfolioDark")
  };

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);

  const {language, setLanguage} = useContext(LocaleContext)
  const toggleLanguage = () => {
    setLanguage(language === langFr ? langEn : langFr)
  }


  return (
    <div className="fixed top-0 w-full max-w-7xl min-h-16 h-[6vh] bg-gradient-to-r from-primary to-secondary  shadow-lg z-20">
      <div className="min-h-16 h-[6vh] bg-base-100 bg-opacity-10 flex justify-between items-center text-base-100 text-lg md:px-10 px-4 font-fira">
        <a href="#header">
          <IconEye
            size="5vh"
            primary="hsl(var(--p))"
            accent="hsl(var(--af))"
            base="hsl(var(--b2))"
          />
        </a>
        <Links />
        <div className="gap-6 items-center hidden md:flex">
          <div className="flex flex-col gap-0.5">
            <label className="flex gap-2 label cursor-pointer p-0">
              <div className="flex justify-center items-center h-7 w-7 bg-base-100 bg-opacity-10 rounded-xl">
                <p>{theme === "portfolioDark" ? "🌚" : "🌞"}</p>
              </div>
              <input onClick={toggleTheme} type="checkbox" className="toggle toggle-sm" />
            </label>
            <label className="flex gap-2 label cursor-pointer p-0">
              <div className="flex justify-center items-center h-7 w-7 bg-base-100 bg-opacity-10 rounded-xl">
                <img className="h-5" src={`/assets/icons/${language === langFr ? "france.png" : "united-kingdom.png"}`}/>
              </div>
              <input onClick={toggleLanguage} type="checkbox" className="toggle toggle-sm" />
            </label>
          </div>
          {Boolean(theme === "portfolioDark") && <a href={`/files/Samuel-Cardonnel-CV2024-Dev-${language === langFr ? "FR" : "EN"}-DT.pdf`}  target="_blank" rel="noreferrer">
            <button type="button" className="btn btn-outline btn-accent ">cv.pdf</button>
          </a>}
          {Boolean(theme === "portfolioLight") && <a href={`/files/Samuel-Cardonnel-CV2024-Dev-${language === langFr ? "FR" : "EN"}-LT.pdf`}  target="_blank" rel="noreferrer">
            <button type="button" className="btn btn-outline btn-accent ">cv.pdf</button>
          </a>}
        </div>
        <div className="md:hidden dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-accent btn-sm shadow-xl text-primary m-1">Menu</label>
          <ul tabIndex={0} className="mt-6 dropdown-content z-[1] menu p-2 shadow-xl bg-base-100 bg-opacity-10 rounded-box flex flex-col gap-y-4 items-center">
            <li>
                <label className="flex gap-2 label cursor-pointer p-0">
                  <div className="flex justify-center items-center h-7 w-7 text-xl bg-base-100 bg-opacity-10 rounded-xl">
                    <p>{theme === "portfolioDark" ? "🌚" : "🌞"}</p>
                  </div>
                  <input onClick={toggleTheme} type="checkbox" className="toggle toggle-sm" />
                </label>
            </li>
            <li>
                <label className="flex gap-2 label cursor-pointer p-0">
                  <div className="flex justify-center items-center h-7 w-7 bg-base-100 bg-opacity-10 rounded-xl">
                    <img className="h-5" src={`/assets/icons/${language === langFr ? "france.png" : "united-kingdom.png"}`}/>
                  </div>
                  <input onClick={toggleLanguage} type="checkbox" className="toggle toggle-sm" />
                </label>
            </li>
            <li>
              {Boolean(theme === "portfolioDark") && <a href={`/files/Samuel-Cardonnel-CV2024-Dev-${language === langFr ? "FR" : "EN"}-DT.pdf`} target="_blank" rel="noreferrer">
                <button type="button" className="btn btn-accent btn-sm text-primary">cv.pdf</button>
              </a>}
              {Boolean(theme === "portfolioLight") && <a href={`/files/Samuel-Cardonnel-CV2024-Dev-${language === langFr ? "FR" : "EN"}-LT.pdf`} target="_blank" rel="noreferrer">
                <button type="button" className="btn btn-accent btn-sm text-primary">cv.pdf</button>
              </a>}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
