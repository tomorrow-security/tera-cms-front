import React from "react"
import Link from "next/link"

export default function InternalLink({ id, label, red, blue, whiteR, whiteB }) {
  return (
    <Link className="flex justify-center my-4 " href={`/${id}`}>
      <a
        className={`px-6 py-2 ${
          whiteR ? "border rounded border-tc-red text-tc-red bg-white" : ""
        } ${
          whiteB ? "border rounded border-tc-blue text-tc-blue bg-white" : ""
        } ${red ? "border rounded border-white text-white bg-tc-red" : ""}${
          blue ? "border-white text-white bg-tc-blue" : ""
        } `}
      >
        {label}
      </a>
    </Link>
  )
}
