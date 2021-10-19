import PageLink from "../atoms/PageLink"

export default function HeaderSubNav({ pages, title }) {
  return (
    <nav className="relative cursor-pointer">
      <button className="group">
        <h3 className="relative px-1 rounded lg:px-2 lg:text-center hover:bg-tc-red hover:bg-opacity-50">
          {title}
        </h3>
        <div className="hidden group-focus:flex hover:flex">
          <ul className="absolute top-0 z-30 w-48 mt-2 space-y-2 bg-opacity-75 border rounded lg:w-full2 left-full lg:left-auto lg:top-full bg-tc-blue border-tc-red">
            {pages.map(({ id, label }) => (
              <li key={`${id}`} className="lg:w-full">
                <PageLink id={id} label={label} />
              </li>
            ))}
          </ul>
        </div>
      </button>
    </nav>
  )
}
