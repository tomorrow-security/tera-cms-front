import IconLogoBig from '../atoms/IconLogoBig'

export default function Hero() {
  return (
    <section
        id="hero"
        style={{ backgroundImage: "url('hero.jpg')" }}
        className="relative w-full bg-center bg-no-repeat bg-cover"
    >
        <div className="absolute z-10 w-full h-full bg-white bg-opacity-10" />
        <div className="relative z-20">
            <div className="flex flex-col items-center py-10 text-white">
                <div className="w-48 md:w-60 lg:w-80">
                    <IconLogoBig />
                </div>
                <div className="text-base font-bold tracking-normal normal-case md:text-lg xl:text-2xl">
                        The future of learning
                </div>
                <div className="mt-10 space-y-10 text-center">
                    <p className="mb-8 text-xl sm:text-2xl md:text-2xl">
              École supérieure d&apos;informatique en télé-présentiel
                    </p>
                    <div
                        // TODO adapté le lien à next.js to="/enrolment"
                        className="box-border flex items-center w-4/5 p-4 mx-auto mt-8 tracking-normal text-white rounded-full justify-evenly 2xl:w-9/12 xl:mb-12 md:mt-0 lg:mt-20 xl:mt-10 2xl:mt-40 bg-tc-blue hover:bg-tc-red"
                    >
                        <div
                            className="text-base font-bold uppercase align-text-top md:text-2xl animate-pulse"
                        >
                            Je m&apos;inscris
                        </div>
                        <div className="pl-2 text-2xl sm:pl-4 md:pl-6 sm:text-4xl md:text-5xl animate-pulse">
                            &rarr;
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
