const partners2 = [
    {
        name: 'Microsoft',
        logoUrl: '/logo-microsoft.svg',
    },
    {
        name: 'Github',
        logoUrl: '/logo-github.svg',
    },
    {
        name: 'Atlassian',
        logoUrl: '/logo-atlassian.svg',
    },
    {
        name: 'Zoom',
        logoUrl: '/logo-zoom.svg',
    },
]

export default function Partners2() {
	return (
            partners2.map(partner => (
            <div key={partner.name} className="w-5/12 mx-2 mt-2 mb-6 md:h-full md:w-200px">
                <img
                    src={partner.logoUrl}
                    alt={`logo ${partner.name}`}
                    width={200}
                    height={100}
                    loading="lazy"
                />
            </div>
            ))
        )
    
}