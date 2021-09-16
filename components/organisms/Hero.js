export default function Hero() {
  return (
    // TODO dimensionner et placer l'image
    <section
      id="hero"
      style={{ backgroundImage: "url('montagne.jpg')" }}
      className="relative w-full bg-top bg-no-repeat bg-big-cover md:bg-cover"
    >
      <div className="pt-12 space-y-4 font-semibold text-center text-white pb-36">
        <p className="mx-auto text-center max-content">Tera Campus</p>
        <p className="mx-auto text-center max-content">
          École supérieure d&apos;informatique
        </p>
        <div className="">
          <span className="w-11/12 mx-autotext-center">
            Une pédagogie innovante avec un cursus
          </span>
          <span className="md:hidden">&nbsp;</span>
          <span className="w-11/12 mx-auto text-center">
            100% télé-présentiel
          </span>
        </div>
      </div>
    </section>
  )
}
