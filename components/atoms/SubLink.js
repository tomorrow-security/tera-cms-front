import React from "react"
import Link from "next/link"

export default function SubLink({ id, label }) {
  /**
   * formatting the id for use in url route
   */
  const href = `/${id}`

  return (
    <Link href={href}>
      <a className="items-center border-box">
        <div className="cursor-pointer">{label}</div>
      </a>
    </Link>
  )
}
