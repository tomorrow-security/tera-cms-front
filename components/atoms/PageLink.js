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
      <a className="flex items-center justify-center">
        <div className="cursor-pointer">{label}</div>
      </a>
    </Link>
  )
}
