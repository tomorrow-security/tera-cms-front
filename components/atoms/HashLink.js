import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

// TODO ajouter du style au liens visité, 'visited'ne fonctionne pas : visited:text-tc-red => toujours red

export default function HashLink({ id, label }) {
	const router = useRouter()
	/** 
	 * formatting the id for use in url route
	*/
	const href = `/#${id}`
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
	const active = current ? 'uppercase' : ''
	return (
		<Link href={href}>
			<a className={`${active} relative flex items-center justify-center overflow-hidden ease-in transform group border-box active:font-extrabold`}>
				<div className="absolute z-10 text-lg transition-all duration-200 ease-in transform border-b-2 border-current cursor-pointer -left-full group-hover:translate-x-full">
					<p className="text-transparent">{label}</p>
				</div>
				<div className="z-20 text-lg underline bg-transparent border-b-2 border-transparent cursor-pointer group-hover:no-underline">
					{label}
				</div>
			</a>
		</Link>
	)
}
