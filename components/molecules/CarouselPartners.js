export default function CarouselPartners({partners}) {
    return (
        <div className="relative w-full overflow-hidden">
                    <div className="absolute top-0 left-0 z-10 h-full w-1/8 md:w-1/4 bg-smoke"></div>
                    <div className="flex items-center justify-around my-8 flex-nowrap w-full3 md:w-full2 animate-scroll">
                {partners}
                {partners}
                    </div>
                    <div className="absolute top-0 right-0 z-10 h-full transform rotate-180 w-1/8 md:w-1/4 bg-smoke"></div>
                </div>
    )
}
