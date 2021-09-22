import PageLink from "../atoms/PageLink"

export default function HeaderSubNav({ click, pages, title }) {
  return (
    <nav className="pr-2 text-lg cursor-pointer group ">
      // TODO faire fonctionner group-focus:block
      <h3 className="pb-2">{title}</h3>
      <ul className="hidden space-y-1 group-focus:block lg:group-hover:block lg:space-y-0">
        {pages.map(({ id, label }) => (
          <li
            key={`navmd-${id}`}
            onClick={click}
            className="hidden group-focus:block lg:group-hover:block w-max"
          >
            <PageLink id={id} label={label} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
