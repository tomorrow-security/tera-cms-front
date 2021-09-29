import PageLink from "../atoms/PageLink"
import { useState } from "react"

export default function HeaderSubNav({ click, pages, title }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="relative cursor-pointer">
      <h3
        //TODO fermer le sous-menu quand le focus est perdu :
        //* fonctionne mais ne se ferme qu'en recliquant dessus
        onClick={() => setIsOpen(!isOpen)}
        //! ne fonctionne pas
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        className="relative px-1 rounded lg:px-2 lg:text-center hover:bg-tc-red hover:bg-opacity-50"
      >
        {title}
      </h3>
      <div className={`${!isOpen && "hidden"}`}>
        <ul className="absolute top-0 z-30 w-48 mt-2 space-y-2 bg-opacity-75 border rounded lg:w-full left-full lg:left-auto lg:top-full bg-tc-blue border-tc-red">
          {pages.map(({ id, label }) => (
            <li key={`${id}`} onClick={click} className="lg:w-full">
              <PageLink id={id} label={label} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
