import Link from 'next/link'

export default function Cta(url, label) {
    /** 
	 * formatting the href for use in url route
	*/
    const href = `/${url}`
	return (
            <Link href={href}>
                <a
                    className="flex justify-center px-4 py-1 mx-1 font-bold text-white transition-colors duration-700 rounded-full md:px-0 intems-center lg:py-2 lg:text-sm xl:text-lg bg-tc-blue hover:bg-tc-red ">
                    {label}
                </a>
            </Link>
	)
}
