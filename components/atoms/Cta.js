import Link from "next/link"

export default function Cta({ title, id }) {
  return (
    <>
      <Link href={`${id}`} className="flex justify-center">
        <a className="px-4 text-lg font-bold text-center transition-colors duration-700 ease-in-out bg-white border border-white rounded w-max p-y-1 text-tc-blue hover:text-opacity-75 hover:bg-tc-red">
          {title}
        </a>
      </Link>
    </>
  )
}
