import { useContext } from "react"
import { LocaleContext } from "../contexts/LocaleContext"

function Home() {
  const {language} = useContext(LocaleContext)

  return (
    <div id="header" className="min-h-[95vh] flex flex-col">
      <div className="h-[4vh]"></div>
      <div className="flex-grow flex justify-center items-center">
        <div className="flex flex-col gap-4">
            <p className="font-fira text-base-100">{language.header.p1}</p>
            <div className="flex flex-col gap-1 font-josefin font-bold  md:text-6xl text-4xl">
              <h1 className="text-accent-focus">{language.header.h1}</h1>
              <h2 className="text-accent">{language.header.h2}</h2>
            </div>
            <div className="font-fira text-base-100">
              <p>{language.header.p2}</p>
              <p>{language.header.p3}</p>
              <p>{language.header.p4}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
