import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

// TODO ajouter du style au liens visité, 'visited'ne fonctionne pas : visited:text-tc-red => toujours red

export default function PageLink({ id, label }) {
  /**
   * formatting the id for use in url route
   */
  const href = `/${id}`

  return (
    <Link href={href}>
      <a className="px-1 rounded cursor-pointer lg:px-2 hover:bg-tc-red hover:bg-opacity-50">
        {label}
      </a>
    </Link>
  )
}
