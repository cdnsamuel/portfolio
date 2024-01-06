import { useContext } from "react"
import { LocaleContext } from "../contexts/LocaleContext"

function Projects() {
  const {language} = useContext(LocaleContext)

  return (
    <div id="projects" className="min-h-[92vh] flex flex-col font-fira">
      <div className="min-h-16 h-[8vh]"></div>
      <div className="font-bold text-accent text-2xl border-b-2 border-accent border-opacity-20">
        <h3 className="px-4 py-2">{language.projects.title}</h3>
      </div>
      <div className="flex flex-wrap gap-6 justify-around">
        {language.projects.content.map(elem => (
          <div key={elem.id} className="mt-2 flex flex-col gap-2 md:max-w-[30%] bg-base-100 bg-opacity-10 rounded-xl shadow-xl text-base-100">
            <div className="flex gap-4 items-center px-4 py-2 text-lg text-accent font-bold border-b-2 border-accent border-opacity-20">
              <div className="bg-primary rounded-xl shadow-xl p-1">
                <img className="rounded-xl min-h-[3rem] w-12" src={`/assets/projects/${elem.path}`} alt="Movie"/>
              </div>
              <h2>{elem.title}</h2>
            </div>
            <div className="flex flex-col gap-2 flex-grow justify-around px-4 py-2 text-sm">
              <p>{elem.descriptionApp}</p>
              <p>{elem.descriptionContext}</p>
              {elem.descriptionAnnex && <p>{elem.descriptionAnnex}</p>}
            </div>
            <table className="table table-xs font-fira">
              <tbody className="border-y-2 border-accent border-opacity-20">
                {elem.technologies && <tr className="border-y-2 border-accent border-opacity-20">
                  <th>⚙️</th>
                  <td>{elem.technologies.td}</td>
                  <td className="flex flex-wrap gap-1">
                    {elem.technologies.content.map((techno, i) => (
                      <p key={techno}>{techno}{i === (elem.technologies.content.length - 1) ?".":","}</p>
                      ))}
                  </td>
                </tr>}
                {elem.contributors && <tr className="border-y-2 border-accent border-opacity-20">
                  <th>👔</th>
                  <td>{elem.contributors.td}</td>
                  <td className="flex flex-wrap gap-1">
                    {elem.contributors.content.map((contributor, i) => (
                      <a key={contributor.name} href={contributor.link} target="_blank" rel="noreferrer">{contributor.name}{i === (elem.contributors.content.length - 1) ?".":","}</a>
                      ))}
                  </td>
                </tr>}
                {elem.time && <tr className="border-y-2 border-accent border-opacity-20">
                  <th>⏲️</th>
                  <td>{elem.time.td}</td>
                  <td>{elem.time.content}</td>
                </tr>}
                {elem.duration && <tr className="border-y-2 border-accent border-opacity-20">
                  <th>🗓️</th>
                  <td>{elem.duration.td}</td>
                  <td>{elem.duration.content}</td>
                </tr>}
                {elem.delivery && <tr className="border-y-2 border-accent border-opacity-20">
                  <th>🚚</th>
                  <td>{elem.delivery.td}</td>
                  <td>{elem.delivery.content}</td>
                </tr>}
                {elem.code && <tr className="border-y-2 border-accent border-opacity-20">
                  <th>🔒</th>
                  <td>{elem.code.td}</td>
                  <td>{elem.code.content}</td>
                </tr>}
                {elem.adminCode && <tr className="border-y-2 border-accent border-opacity-20">
                  <th>🔒</th>
                  <td>{elem.adminCode.td}</td>
                  <td>{elem.adminCode.content}</td>
                </tr>}
              </tbody>
            </table>
            <div className="flex justify-around mb-2">
              {elem.linkGit && <a href={elem.linkGit.address} target="_blank" rel="noreferrer">
                <button className="self-center btn btn-sm btn-primary text-accent">{elem.linkGit.name}</button>
              </a>}
              {elem.linkSite && <a href={elem.linkSite.address} target="_blank" rel="noreferrer">
                <button className="btn btn-sm btn-primary text-accent">{elem.linkSite.name}</button>
              </a>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
