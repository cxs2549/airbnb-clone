import { FaStar } from "react-icons/fa"
import Carousel from "./Carousel"

export default function Card({
  images,
  location,
  distance,
  price,
  rating,
  showPrice,
  night
}) {
  return (
    <div className="rounded-xl overflow-hidden w-full text-[14.5px] md:text-[15px]">
      <div className="relative z-0 px-6 sm:px-0">
        <Carousel images={images} />
      </div>
      <div className="py-2  px-6 sm:px-0">
        <div className="flex items-center justify-between">
          <div className="font-semibold text-gray-900 dark:text-neutral-300">
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <FaStar
              size={12}
              className="translate-y-px dark:text-neutral-300"
            />
            <span className="ml-1 dark:text-neutral-300">{rating}</span>
          </div>
        </div>

        <div className="-translate-y-px text-muted dark:text-neutral-400">
          <span>{distance.toLocaleString()} miles away</span>
        </div>
        <div className="mb-1.5 text-muted -translate-y-px dark:text-neutral-400">
          <span>5 nights</span> &#183; <span>May 28 - Jun 2</span>
        </div>

        {showPrice ? (
          <button className="bg-transparent -translate-y-0.5">
            <span className="font-semibold text-gray-900 dark:text-neutral-300 underline">
              $
              {price.toLocaleString("en-US", {
                style: "decimal",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
            <span className="ml-1.5 text-sm dark:text-neutral-400">
              total before taxes
            </span>
          </button>
        ) : (
          <button className="bg-transparent -translate-y-0.5">
            <span className="font-semibold text-gray-900 dark:text-neutral-300 ">
              ${night.toLocaleString("en-US", {
                style: "decimal",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
            <span className="dark:text-neutral-300 ml-1">night</span>
          </button>
        )}
      </div>
    </div>
  )
}
