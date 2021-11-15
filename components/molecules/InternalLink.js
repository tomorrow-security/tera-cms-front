import React from "react"
import Link from "next/link"

export default function InternalLink({ id, label, background }) {
  /**
   * formatting the id for use in url route
   */
  const href = `/${id}`

  const bgStyle = `bg-${background}`

  return (
    <Link className="flex justify-center my-4 " href={href}>
      <a
        className={`px-6 py-2 border rounded text-tc-red border-tc-red ${bgStyle}`}
      >
        {label}
      </a>
    </Link>
  )
}
