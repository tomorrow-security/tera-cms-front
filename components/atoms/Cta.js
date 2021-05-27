import Link from 'next/link'

export default function Cta() {
	return (
		<div className="flex justify-center">
        <Link href="/enrolment">
            <a className="max-w-3xl mx-auto my-4 rounded-t bg-tc-blue hover:bg-tc-red rounded-b-xl">
                <div className="p-2 text-xl font-bold text-center text-transparent text-white bg-shine bg-clip-border animate-shine bg-hover-cover sm:px-6">
                    Candidature
                </div>
            </a>
        </Link >
    </div>
	)
}
