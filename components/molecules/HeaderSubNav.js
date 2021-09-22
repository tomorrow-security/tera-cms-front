import PageLink from "../atoms/PageLink"

export default function HeaderSubNav({ click, pages, title }) {
  return (
    <nav className="relative cursor-pointer group">
      {/* // TODO faire fonctionner group-focus:block */}
      <h3 className="mx-2">{title}</h3>
      <ul className="absolute z-30 invisible space-y-2 bg-opacity-75 border rounded opacity-0 lg:mt-2 left-full lg:top-full group-hover:opacity-100 group-hover:visible bg-tc-blue border-tc-red">
        {pages.map(({ id, label }) => (
          <li key={`navmd-${id}`} onClick={click} className="min-w-max">
            <PageLink id={id} label={label} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
