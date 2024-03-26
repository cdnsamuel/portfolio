import { useContext } from "react"
import { LocaleContext } from "../contexts/LocaleContext"

function Experiences() {
  const {language} = useContext(LocaleContext)

  return (
    <div id="cv" className="min-h-[95vh] flex flex-col">
      <div className="min-h-16 h-[8vh]"></div>
      <div className="flex-grow flex flex-col rounded-3xl bg-base-100 bg-opacity-10">
        <div className="p-4 flex flex-col md:flex-row gap-8">
          <div className="flex md:flex-col gap-10 md:gap-6">
            <img
              src="/assets/avatar.png"
              alt="photo de profil"
              className="rounded-3xl h-32 w-32"
            />
            <div className="flex flex-col justify-evenly font-josefin font-bold text-accent text-3xl">
              <h2>Samuel</h2>
              <h2>Cardonnel</h2>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-1 font-fira text-base-100 text-justify text-sm ">
              <p>{language.presentation.p1}</p>
              <p>{language.presentation.p2}</p>
              <p>{language.presentation.p3}</p>
              <p>{language.presentation.p4}</p><br/>

              <p>{language.presentation.duration}</p>
              <p>{language.presentation.contract}</p>
              <p>{language.presentation.rythm}</p>
          </div>
        </div>
        <div className="flex justify-around flex-wrap gap-x-1 md:gap-x-2 gap-y-2  px-4 py-2 border-t-2 border-accent border-opacity-20 font-fira text-base-200 text-justify text-sm ">
          <div className="w-60 border-2 border-accent border-opacity-20 rounded-xl">
            <h3 className="font-bold text-accent px-3 py-2 border-b-2 border-accent border-opacity-20">{language.skills.languages.title}</h3>
            <table className="mt-1 table table-xs">
              <tbody className="border-t-2 border-accent border-opacity-20">
                {language.skills.languages.content.map(elem => (
                  <tr key={elem.id} className="border-accent border-opacity-20">
                    <th>🔊</th>
                    <td>{elem.name}</td>
                    <td>{elem.level}</td>
                  </tr>
                ))}
                </tbody>
            </table>
          </div>
          <div className="w-36 border-2 border-accent border-opacity-20 rounded-xl">
            <h3 className="font-bold text-accent px-3 py-2  border-b-2 border-accent border-opacity-20">{language.skills.programming.title}</h3>
            <table className="mt-1 table table-xs">
              <tbody className="border-t-2 border-accent border-opacity-20">
                {language.skills.programming.content.map(elem => (
                  <tr key={elem.id} className="border-accent border-opacity-20">
                    <th>⚙️</th>
                    <td>{elem.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="w-36 border-2 border-accent border-opacity-20 rounded-xl">
            <h3 className="font-bold text-accent px-3 py-2  border-b-2 border-accent border-opacity-20"> {language.skills.webdev.title}</h3>
            <table className="mt-1 table table-xs">
              <tbody className="border-t-2 border-accent border-opacity-20">
                {language.skills.webdev.content.map(elem => (
                <tr key={elem.id} className="border-accent border-opacity-20">
                  <th>🦾</th>
                  <td>{elem.name}</td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="w-36 border-2 border-accent border-opacity-20 rounded-xl">
            <h3 className="px-3 py-2 font-bold text-accent border-b-2 border-accent border-opacity-20">{language.skills.systems.title}</h3>
            <table className="mt-1 table table-xs">
              <tbody className="border-t-2 border-accent border-opacity-20">
                {language.skills.systems.content.map(elem => (
                  <tr key={elem.id} className="border-accent border-opacity-20">
                    <th>🖥️</th>
                    <td>{elem.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="w-36 border-2 border-accent border-opacity-20 rounded-xl">
            <h3 className="font-bold text-accent px-3 py-2  border-b-2 border-accent border-opacity-20">{language.skills.tools.title}</h3>
            <table className="mt-1 table table-xs">
              <tbody className="border-t-2 border-accent border-opacity-20">
                {language.skills.tools.content.map(elem => (
                  <tr key={elem.id} className="border-accent border-opacity-20">
                    <th>🔧</th>
                    <td>{elem.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col gap-2 px-4 py-2 border-t-2 border-accent border-opacity-20 font-fira text-base-200 text-justify text-sm ">
          <h3 className="font-bold text-accent text-2xl">{language.educationTitle}</h3>
          <ul className="list-disc pl-3 flex flex-col gap-2 border-l-2 border-accent border-opacity-20 py-2 text-base-100">
            {language.education.map(elem => (
                <li key={elem.id} className="font-bold md:text-lg">
                  {elem.school} <span className="font-medium text-base-300">|</span> {elem.title}<br/>
                  <span className="font-medium text-base text-base-300">{elem.period}</span>
                </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2 px-4 py-2 border-t-2 border-accent border-opacity-20 font-fira text-base-200 text-sm ">
          <h3 className="font-bold text-accent text-2xl">{language.experiencesTitle}</h3>
          <ul className="list-disc pl-3 flex flex-col gap-4 border-l-2 border-accent border-opacity-20 py-2">
            {language.experiences.map(elem => (
                <li key={elem.id}>
                  <h4 className="md:text-lg font-bold text-base-100">{elem.title}</h4>
                  <p className="font-bold text-base-300">
                    {elem.firstYear} à {elem.lastYear} - {elem.enterprise}
                  </p>
                  <p className="text-base-100">
                    {elem.description}
                  </p>
                  <ul className="flex flex-wrap gap-1 mt-2">
                    {elem.skills.map(skill => (
                      <li key={skill} className="badge  badge-accent">
                      {skill}
                    </li>
                    ))}
                  </ul>
                </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Experiences
