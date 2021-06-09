import Link from 'next/link'
import { useRouter } from 'next/router'

// TODO ajouter du style au liens visité, 'visited'ne fonctionne pas : visited:text-tc-red => toujours red
// TODO ajouter du style au liens actif, remplacer focus (ne correcpond pas) par "current" 

export default function PageLink({ id, label }) {
	const router = useRouter()
	const href = `/${id}`
	const current = router.pathname == { href }
	console.log('pathname :', router.pathname)
	console.log('href :', href)
	// ! toujours à false :
	console.log ('current :', current)
	const active = current ? 'uppercase' : ''
	
	return (
		<Link href={ href }>
			<a className={`${active} relative flex items-center justify-center overflow-hidden ease-in transform group border-box focus:font-bold`}>
				<div className="absolute z-10 text-lg text-transparent transition-all duration-200 ease-in transform border-b-2 border-transparent border-white cursor-pointer -left-full group-hover:translate-x-full">
					{label}
				</div>
				<div className="z-20 text-lg bg-transparent border-b-2 border-transparent cursor-pointer">
					{label}
				</div>
			</a>
		</Link>
	)
}
