export default function Hero() {
  return (
    // TODO dimensionner et placer l'image
    <section
      id="hero"
      style={{ backgroundImage: "url('montagne.jpg')" }}
      className="relative w-full bg-center bg-no-repeat bg-hero"
    >
      <div className="absolute z-10 w-full h-full" />
      <div className="relative z-20">
        <div className="space-y-10 font-semibold text-center text-white pt-96 pb-96">
          <p className="w-11/12 mx-auto mb-6 text-xl text-center sm:text-2xl md:text-2xl">
            Tera Campus
          </p>
          <p className="w-11/12 mx-auto mb-6 text-xl text-center sm:text-2xl md:text-2xl">
            École supérieure d&apos;informatique
          </p>
          <div className="space-y-4">
            <p className="w-11/12 mx-auto mb-6 text-xl text-center sm:text-2xl md:text-2xl">
              Une pédagogie innovante avec un cursus
            </p>
            <p className="w-11/12 mx-auto mb-6 text-xl text-center sm:text-2xl md:text-2xl">
              100% télé-présentiel
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
