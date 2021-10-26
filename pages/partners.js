import BlockPartners from "../components/organisms/BlockPartners"
import BlockApproach from "../components/organisms/BlockApproach"

export default function partners() {
  return (
    <section id="partners" className="py-5">
      <div className="md:container md:mx-auto">
        <BlockPartners />
        <BlockApproach />
      </div>
    </section>
  )
}
