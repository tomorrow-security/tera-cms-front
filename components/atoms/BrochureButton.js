import Link from 'next/link'

export default function BrochureButton() {
	return (
		<div className="flex justify-center">
            <Link href="/brochure">
                <a className="mx-auto my-4 transition-colors duration-700 border-4 rounded-t animate-none z-20max-w-3xl group border-tc-blue-xlight hover:border-tc-red-xlight bg-tc-blue hover:bg-tc-red rounded-b-xl">
                    {/* // TODO retirer le bg-shine au hover : 'group-hover:bg-none' ne fonctionne pas */}
                    <p className="p-2 text-xl font-bold text-center text-white sm:px-6">
                        Télécharger la brochure
                    </p>
                </a>
            </Link >
        </div>
	)
}