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
      <a className="px-2 rounded hover:bg-tc-red hover:bg-opacity-50">
        <div className="cursor-pointer">{label}</div>
      </a>
    </Link>
  )
}
