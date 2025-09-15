import Image from "next/image"

const gridImages = [
    {
        src: "/rishabh_project_glace.png",
        alt: "Snowy city street with historic buildings",
        className: "md:row-span-2",
    },
    {
        src: "/rishabh_project_maidorder.png",
        alt: "Convex mirror showing tunnel reflection",
        className: "",
    },
    {
        src: "/rishabh_project_mlm.png",
        alt: "City skyline at sunset",
        className: "md:col-span-2",
    },
    {
        src: "/rishabh_project_crm.png",
        alt: "Industrial staircase with people",
        className: "",
    },
    {
        src: "/rishabh_project_dailytodo.png",
        alt: "Urban alley perspective",
        className: "",
    },
    {
        src: "/rishabh_project_glace.png",
        alt: "Modern subway station",
        className: "md:row-span-2",
    },
    {
        src: "/rishabh-project-flexai.png",
        alt: "Street with power lines",
        className: "md:col-span-2",
    },
    {
        src: "/rishabh-project-two.png",
        alt: "Baloise building sign",
        className: "",
    },
]

export default function AsymmetricalGrid() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-none md:max-w-[50%]">
            {/* Mobile Layout - Simple vertical stack */}
            <div className="md:hidden space-y-4">
                {gridImages.map((image, index) => (
                    <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                        <Image
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            fill
                            className="object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                ))}
            </div>

            {/* Desktop Layout - Complex asymmetrical grid */}
            <div className="hidden md:grid grid-cols-4 grid-rows-4 gap-4 h-[800px]">
                {/* Large left image - spans 2 rows */}
                <div className="relative col-span-1 row-span-2 overflow-hidden rounded-lg">
                    <Image
                        src={gridImages[0].src || "/placeholder.svg"}
                        alt={gridImages[0].alt}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                </div>

                {/* Top middle image */}
                <div className="relative col-span-1 row-span-1 overflow-hidden rounded-lg">
                    <Image
                        src={gridImages[1].src || "/placeholder.svg"}
                        alt={gridImages[1].alt}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                </div>

                {/* Top right wide image - spans 2 columns */}
                <div className="relative col-span-2 row-span-1 overflow-hidden rounded-lg">
                    <Image
                        src={gridImages[2].src || "/placeholder.svg"}
                        alt={gridImages[2].alt}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                </div>

                {/* Second row middle */}
                <div className="relative col-span-1 row-span-1 overflow-hidden rounded-lg">
                    <Image
                        src={gridImages[3].src || "/placeholder.svg"}
                        alt={gridImages[3].alt}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                </div>

                {/* Second row right */}
                <div className="relative col-span-1 row-span-1 overflow-hidden rounded-lg">
                    <Image
                        src={gridImages[4].src || "/placeholder.svg"}
                        alt={gridImages[4].alt}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                </div>

                {/* Large right image - spans 2 rows */}
                <div className="relative col-span-1 row-span-2 overflow-hidden rounded-lg">
                    <Image
                        src={gridImages[5].src || "/placeholder.svg"}
                        alt={gridImages[5].alt}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                </div>

                {/* Bottom left wide image - spans 2 columns */}
                <div className="relative col-span-2 row-span-1 overflow-hidden rounded-lg">
                    <Image
                        src={gridImages[6].src || "/placeholder.svg"}
                        alt={gridImages[6].alt}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                </div>

                {/* Bottom right square */}
                <div className="relative col-span-1 row-span-1 overflow-hidden rounded-lg">
                    <Image
                        src={gridImages[7].src || "/placeholder.svg"}
                        alt={gridImages[7].alt}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                </div>
            </div>
        </div>
    )
}
