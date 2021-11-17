import Paragraphe from "../atoms/Paragraphe"
import Strong from "../atoms/Strong"

const axes = ["La technique", "Les soft skills", "La collaboration"]

export default function Approach() {
  return (
    <div>
      <div className="text-lg text-center">
        <Paragraphe lg>
          <Strong>
            Le programme Tera Campus s&apos;articule sur trois principaux axes
            de développement :
          </Strong>
        </Paragraphe>
      </div>
      <ul className="w-full my-12 md:my-14">
        {axes.map((axe, index) => (
          <li
            key={index}
            className="flex flex-row items-center justify-center w-full my-4 md:my-8"
          >
            <div className="w-5 h-5 mr-4 transform rotate-45 bg-tc-red"></div>
            <div className="py-1 text-2xl text-center text-white rounded-t w-52 md:w-1/3 bg-tc-blue rounded-b-xl">
              {axe}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
