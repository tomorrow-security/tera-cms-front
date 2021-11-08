import PageLink from "../atoms/PageLink"

const pages = [
  { id: "contact", label: "Contact" },
  { id: "legal", label: "Mentions légales" },
  { id: "privacy", label: "Politique de confidentialité" },
]

export default function FooterNav() {
  return (
    <nav className="flex flex-col my-8 text-sm text-center divide-x lg:my-0 lg:flex-row">
      <ul className="space-y-2 lg:mx-2 lg:space-y-0 lg:flex lg:justify-around lg:divide-x">
        {pages.map(({ id, label }) => (
          <li key={`navmd-${id}`} className="px-2 mx-auto text-center w-max">
            <PageLink id={id} label={label} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
