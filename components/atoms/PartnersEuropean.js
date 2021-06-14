const partnersEuropean = [
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

export default function PartnersEuropean() {
	return (
            partnersEuropean.map(partner => (
            <div key={partner.name} className="h-full mx-4 mt-2 mb-6 md:mx-10">
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