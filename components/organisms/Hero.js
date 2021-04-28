import IconLogoBig from '../atoms/IconLogoBig'

export default function Hero() {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('hero.jpg')" }}
    >
      <div className="absolute w-full h-full bg-black bg-opacity-25 z-10" />
      <div className="relative z-20">
        <div className="py-10 flex flex-col items-center space-y-10">
          <div className="w-48 md:w-60 lg:w-80">
            <IconLogoBig />
          </div>
          <div className="text-center text-white">
            <span className="uppercase text-3xl md:text-4xl xl:text-6xl font-bold tracking-wide">
              The future of learning
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
