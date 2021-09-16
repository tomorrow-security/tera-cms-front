export default function Hero() {
  return (
    // TODO dimensionner et placer l'image
    <section
      id="hero"
      style={{ backgroundImage: "url('montagne.jpg')" }}
      className="relative w-full bg-center bg-no-repeat bg-cover md:bg-cover"
    >
      <div className="absolute z-10 w-full h-full" />
      <div className="relative z-20">
        <div className="pt-16 space-y-4 text-lg font-semibold text-center text-white pb-36 sm:text-xl lg:text-4xl md:text-3xl sm:pt-20 sm:pb-40 md:pb-48 md:pt-24 lg:pb-60 lg:pt-32 xl:pb-80 xl:pt-44 2xl:pb-96 2xl:pt-48 xl:text-5xl">
          <p className="mx-auto max-content">Tera Campus</p>
          <p className="mx-auto max-content">
            École supérieure d&apos;informatique
          </p>
          <div className="space-y-1">
            <p className="mx-auto max-content">
              Une pédagogie innovante avec un cursus
            </p>
            <p className="mx-auto max-content">100% télé-présentiel</p>
          </div>
        </div>
      </div>
    </section>
  )
}
