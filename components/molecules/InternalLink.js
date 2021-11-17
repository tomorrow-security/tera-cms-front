import React from "react"
import Link from "next/link"

export default function InternalLink({ id, label, red, blue, whiteR, whiteB }) {
  return (
    <Link className="flex justify-center my-4 w-max" href={`/${id}`}>
      <a
        className={`px-6 py-2 transition-colors duration-700 ease-in-out ${
          whiteR
            ? "border rounded border-tc-red text-tc-red bg-white hover:bg-tc-blue"
            : ""
        } ${
          whiteB
            ? "border rounded border-tc-blue text-tc-blue bg-white hover:bg-tc-red hover:bg-opacity-50"
            : ""
        } ${
          red
            ? "border rounded border-white text-white bg-tc-red hover:bg-tc-blue"
            : ""
        }${blue ? "border-white text-white bg-tc-blue hover:bg-tc-red" : ""} `}
      >
        {label}
      </a>
    </Link>
  )
}
