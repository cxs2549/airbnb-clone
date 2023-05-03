import Image from "next/image"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

export default function MyCarousel({ images }) {
  return (
    <Carousel
      showArrows
      showThumbs={false}
      showStatus={false}
      centerSlidePercentage={100}
      className="w-full carousel aspect-w-1 aspect-h-1 max-w-lg"
    >
      {images.map((image, i) => (
        <div key={i} className="relative w-full aspect-w-1 aspect-h-1">
          <Image
            className="w-full cursor-pointer h-full object-contain rounded-xl aspect-w-1 aspect-h-1"
            src={image}
            alt=""
            width={500}
            height={500}
          />
          <div className="absolute opacity-70 top-4 right-[17px] text-white/60">
            <svg
              viewBox="0 0 32 32"
              style={{ strokeWidth: 2, overflow: "visible" }}
              aria-hidden="true"
              role="presentation"
              focusable="false"
              className="block fill-black/80 h-6 w-6 stroke-white "
            >
              <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
            </svg>
          </div>
        </div>
      ))}
    </Carousel>
  )
}
