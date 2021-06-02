const partners1 = [
    {
        name: 'Stormshield',
        logoUrl: '/logo-stormshield.svg',
    },
    {
        name: 'Scaleway',
        logoUrl: '/logo-scaleway.svg',
    },
    {
        name: 'Sap',
        logoUrl: '/logo-sap.svg',
    },
    {
        name: 'ENI',
        logoUrl: '/logo-eni.svg',
    },
]

export default function Partners1() {
	return (
            partners1.map(partner => (
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