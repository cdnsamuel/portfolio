import { useContext } from "react"
import { LocaleContext } from "../contexts/LocaleContext"

import IconLinkedin from "../icons/IconLinkedin.jsx"
import IconPhone from "../icons/IconPhone.jsx"
import IconMail from "../icons/IconMail.jsx"

function Footer() {
  const {language} = useContext(LocaleContext)

  return (
    <ul id="contact" className="bg-base-100 bg-opacity-10 p-2 shadow-lg flex justify-around items-center text-base-100 text-lg  font-fira min-h-16 h-[6vh]">
      <li>
        <a href="tel:+33651690039" className="flex gap-1 items-end">
          <IconPhone color="hsl(var(--a))" size="4vh"/>
          <p className="hidden md:block">{language.phone}</p>       
        </a>
      </li>
      <li>
        <a href="mailto:cdnsamuel@pm.me?subject=Contact depuis votre portfolio" className="flex gap-1 items-end">
          <IconMail color="hsl(var(--a))" size="4vh"/>
          <p className="hidden md:block">cdnsamuel@pm.me</p>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/cdnsamuel/" target="_blank" rel="noreferrer" className="flex gap-1 items-end">
          <IconLinkedin color="hsl(var(--a))" size="4vh"/>
          <p className="hidden md:block">/cdnsamuel</p>
        </a>
      </li>
    </ul>
  )
}

export default Footer
