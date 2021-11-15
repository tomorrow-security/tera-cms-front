import PageLink from "../atoms/PageLink"

export default function HeaderSubNav({ pages, title }) {
  return (
    <div className="relative cursor-pointer group">
      <h3 className="relative pl-1 rounded lg:px-2 lg:text-center hover:bg-tc-red hover:bg-opacity-50">
        {title}
      </h3>
      <div className="hidden group-hover:flex">
        <ul className="absolute top-0 z-30 w-48 px-1 space-y-2 bg-opacity-75 border rounded lg:w-full3.5 lg:max-w-max left-full lg:left-auto lg:top-full bg-tc-blue border-tc-red">
          {pages.map(({ id, label }) => (
            <li key={`${id}`} className="px-2 text-left lg:w-full">
              <PageLink id={id} label={label} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
