import SubLink from "../atoms/PageLink"

export default function NavList({ pages, title }) {
  return (
    <nav>
      <h3 className="pb-2 font-semibold">{title}</h3>
      <ul className="space-y-2">
        {pages.map(({ id, label }) => (
          <li key={`${id}`}>
            <PlanLink id={id} label={label} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
