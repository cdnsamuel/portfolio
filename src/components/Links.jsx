import { useContext } from "react"
import { LocaleContext } from "../contexts/LocaleContext"

import IconContact from "../icons/IconContact.jsx"
import IconCv from "../icons/IconCv.jsx"
import IconProject from "../icons/IconProject.jsx"


function DesktopLinks() {
  const {language} = useContext(LocaleContext)

  return (
    <>
      <ul className="flex gap-8">
        <li>
          <a href="#cv" className="flex items-center gap-2">
            <IconCv color="hsl(var(--a))" size="4vh" />
            <p className="md:flex hidden">{language.links.cv}</p>
          </a>
        </li>
        <li>
          <a href="#projects" className="flex items-center gap-2">
            <IconProject color="hsl(var(--a))" size="4vh" />
            <p className="md:flex hidden">{language.links.projects}</p>
          </a>
        </li>
        <li>
          <a href="#contact" className="flex items-center gap-2">
            <IconContact color="hsl(var(--a))" size="4vh" />
            <p className="md:flex hidden">{language.links.contact}</p>
          </a>
        </li>
      </ul>
    </>
  )
}

export default DesktopLinks
