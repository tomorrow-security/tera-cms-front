import PageLink from "../atoms/PageLink"

export default function HeaderSubNav({ click, pages, title }) {
  return (
    <nav className="pr-2 text-lg group ">
      <h3 className="pb-2">{title}</h3>
      <ul className="hidden space-y-1 group-hover:block lg:space-y-0">
        {pages.map(({ id, label }) => (
          <li
            key={`navmd-${id}`}
            onClick={click}
            className="hidden group-hover:block w-max"
          >
            <PageLink id={id} label={label} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
