const partnersCollaboratives = [
  {
    name: "Cisco",
    logoUrl: "/logo-cisco.svg",
  },
  {
    name: "Google",
    logoUrl: "/logo-google-2015.svg",
  },
  {
    name: "Microsoft",
    logoUrl: "/logo-microsoft.svg",
  },
  {
    name: "AWS",
    logoUrl: "/logo-aws.svg",
  },
  {
    name: "Github",
    logoUrl: "/logo-github.svg",
  },
  {
    name: "Atlassian",
    logoUrl: "/logo-atlassian.svg",
  },
  {
    name: "Zoom",
    logoUrl: "/logo-zoom.svg",
  },
  {
    name: "VMware ",
    logoUrl: "/logo-vmware.svg",
  },
]

export default function PartnersCollaboratives() {
  return partnersCollaboratives.map((partner) => (
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
