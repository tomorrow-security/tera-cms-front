export default function CarouselPartners({partners}) {
    return (
        <div className="relative overflow-hidden md:full">
                    <div className="md:top-0 md:left-0 md:absolute md:bg-carousel md:z-10 md:h-full md:w-200px"></div>
                    <div className="flex flex-wrap items-center justify-center my-8 md:flex-nowrap md:w-carousel md:justify-between md:animate-scroll">
                {partners}
                {partners}
                    </div>
                    <div className="md:absolute md:top-0 md:right-0 md:transform md:rotate-180 md:bg-carousel md:h-full md:w-200px md:z-10"></div>
                </div>
    )
}
