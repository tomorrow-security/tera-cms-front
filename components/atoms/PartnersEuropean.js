// TODO voir pour convertir tous les logo en svg ?
const partnersEuropean = [
  {
    name: "Stormshield",
    logoUrl: "/logo-stormshield.svg",
  },
  {
    name: "Scaleway",
    logoUrl: "/logo-scaleway.svg",
  },
  {
    name: "Outscale",
    logoUrl: "/logo-outscale.svg",
  },
  {
    name: "JetBrains",
    logoUrl: "/logo-jetbrains.svg",
  },
  {
    name: "Gymglish",
    logoUrl: "/logo-gymglish.png",
  },
]

export default function PartnersEuropean() {
  return partnersEuropean.map((partner) => (
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
}
