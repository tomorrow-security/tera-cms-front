import Link from "next/link"

//TODO design à refaire
export default function Cta() {
  return (
    <>
      <Link href="/enrolment" className="flex justify-center">
        <a className="px-4 text-lg font-bold text-center transition-colors duration-700 bg-white rounded w-max p-y-1 text-tc-blue hover:bg-tc-red">
          Admission
        </a>
      </Link>
    </>
  )
}
