import React from "react"
import Link from "next/link"

export default function InternalLink({ id, label, red, blue, white }) {
  return (
    <Link className="flex justify-center my-4 " href={`/${id}`}>
      <a
        className={`px-6 py-2 border rounded ${
          red ? "border-tc-red text-tc-red bg-white" : ""
        } ${blue ? "border-tc-blue text-tc-blue bg-white" : ""} ${
          white ? "border-white text-white bg-tc-red" : ""
        } `}
      >
        {label}
      </a>
    </Link>
  )
}
