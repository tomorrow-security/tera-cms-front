import Link from "next/link"
export default function Cta({ title, id, red, blue, white }) {
  return (
    <Link href={`${id}`} className="flex justify-center">
      <a
        className={`${
          red ? "bg-tc-red  border-tc-red text-white hover:bg-tc-blue" : ""
        } ${
          blue ? "bg-tc-blue  border-tc-blue text-white hover:bg-tc-red" : ""
        } ${
          white ? "bg-white border-white text-tc-blue hover:bg-tc-red" : ""
        } px-4 text-lg font-bold text-center transition-colors duration-700 ease-in-out border rounded w-max p-y-1 hover:text-opacity-75`}
      >
        {title}
      </a>
    </Link>
  )
}
