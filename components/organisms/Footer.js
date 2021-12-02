import Plan from "../molecules/Plan"
import IconLogo from "../atoms/IconLogo"
import PlanLink from "../atoms/PlanLink"

const pages = [
  { id: "#agenda", label: "actualités" },
  { id: "enrolment", label: "admission" },
  { id: "contact", label: "contact" },
]

export default function Footer() {
  const today = new Date()
  return (
    <footer className="pt-5">
      <div className="bg-tc-blue">
        <div className="md:container md:mx-auto">
          <Plan />
        </div>
      </div>
      <div className="text-white border-t-2 bg-tc-blue border-tc-red">
        <div className="relative py-4 mx-2 md:container md:mx-auto md:px-2">
          <div className="flex flex-col items-center justify-between pb-10 lg:flex-row bg-tc-blue">
            <div className="flex items-center">
              <div className="w-10 mr-2">
                <IconLogo />
              </div>
              <div>
                <div className="text-xl">Tera Campus</div>
                <a href="tel:+33469960065" className="text-sm">
                  &#9742; 04.69.96.00.65
                </a>
              </div>
            </div>
            <ul className="space-y-2 font-semibold uppercase md:space-y-0 md:flex md:flex-1 md:text-center md:justify-evenly md:items-stretch">
              {pages.map(({ id, label }) => (
                <li key={`${id}`} className="p-1 border border-white rounded">
                  <PlanLink id={id} label={label} />
                </li>
              ))}
            </ul>
            <div className="text-center">
              © 2020-{today.getFullYear()} Tera Campus
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
