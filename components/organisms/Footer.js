import Plan from "../molecules/Plan"
import IconLogo from "../atoms/IconLogo"

export default function Footer() {
  const today = new Date()
  return (
    <footer className="pt-5">
      <div className="bg-white">
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
                  04.69.96.00.65
                </a>
              </div>
            </div>
            <div className="text-center">
              © 2020-{today.getFullYear()} Tera Campus
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
