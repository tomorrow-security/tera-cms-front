import PageLink from "../atoms/PageLink"
import { useState } from "react"

export default function HeaderSubNav({ click, pages, title }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="relative cursor-pointer">
      <h3
        onClick={() => setIsOpen(!isOpen)}
        className="px-2 rounded hover:bg-tc-red hover:bg-opacity-50"
      >
        {title}
      </h3>
      <div className={`${!isOpen && "hidden"}`}>
        <ul className="absolute z-30 space-y-2 bg-opacity-75 border rounded lg:mt-2 left-full lg:left-0 lg:top-full bg-tc-blue border-tc-red">
          {pages.map(({ id, label }) => (
            <li key={`${id}`} onClick={click} className="min-w-max">
              <PageLink id={id} label={label} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
