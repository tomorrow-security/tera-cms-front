import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

export default function PlanLink({ id, label }) {
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
      <a className={`${active}  items-center border-box`}>
        <div className="cursor-pointer">{label}</div>
      </a>
    </Link>
  )
}
