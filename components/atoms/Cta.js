import Link from "next/link"
//TODO faire fonctionner le choix du style
export default function Cta({ title, id, color }) {
  if (({ color } = "white")) {
    colorStyle = "bg-white border-white text-tc-blue hover:bg-tc-red"
  }
  if (({ color } = "red")) {
    colorStyle = "bg-tc-red  border-tc-red text-white hover:bg-tc-blue"
  }
  if (({ color } = "blue")) {
    colorStyle = "bg-tc-blue  border-tc-blue text-white hover:bg-tc-red"
  }

  return (
    <Link href={`${id}`} className="flex justify-center">
      <a
        className={`${colorStyle} px-4 text-lg font-bold text-center transition-colors duration-700 ease-in-out border rounded w-max p-y-1 hover:text-opacity-75`}
      >
        {title}
      </a>
    </Link>
  )
}
