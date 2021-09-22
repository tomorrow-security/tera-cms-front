import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

// TODO ajouter du style au liens visité, 'visited'ne fonctionne pas : visited:text-tc-red => toujours red

export default function PageLink({ id, label }) {
  const router = useRouter()
  /**
   * formatting the id for use in url route
   */
  const href = `/${id}`
  /**
   * definition of the url via useRouter
   */
  const url = router.pathname
  /**
   * comparison of the url route and the page path
   */
  const current = url === href
  /**
   * apply the class uppercase if it is true, otherwise leave a space
   */
  const active = current ? "uppercase text-tc-red" : ""

  return (
    <Link href={href}>
      <a
        className={`${active} relative flex items-center justify-center overflow-hidden ease-in transform group border-box active:font-extrabold`}
      >
        <div className="absolute z-10 transition-all duration-200 ease-in transform border-b-2 cursor-pointer border-tc-red -left-full group-hover:translate-x-full">
          <p className="text-transparent">{label}</p>
        </div>
        <div className="absolute top-0 left-0 z-10 transition-all duration-200 ease-in transform border-b-2 border-current cursor-pointer group-hover:translate-x-full">
          <p className="text-transparent">{label}</p>
        </div>
        <div className="z-30 bg-transparent border-b-2 border-transparent cursor-pointer">
          {label}
        </div>
      </a>
    </Link>
  )
}
