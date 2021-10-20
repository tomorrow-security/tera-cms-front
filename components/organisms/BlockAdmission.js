import BlockTitle from "../atoms/BlockTitle"
import ExternalLink from "../molecules/ExternalLink"

import Registration from "../molecules/Registration"

export default function BlockAdmission() {
  return (
    <section id="admission" className="py-5">
      <div className="md:container md:mx-auto">
        <BlockTitle
          title="Admission"
          iconPicture={{ backgroundImage: "url('tente-welcome.png')" }}
        />
        <div>Admission</div>
      </div>
    </section>
  )
}
