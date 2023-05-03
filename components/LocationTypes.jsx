"use client"
import React, { useState, useRef, useEffect } from "react"
import {
  FaCampground,
  FaMountain,
  FaMapMarkerAlt,
  FaMap,
  FaChevronLeft,
  FaChevronRight,
  FaShip,
  FaTree,
  FaHome,
} from "react-icons/fa"
import { TbUfo } from "react-icons/tb"
import { GiBeachBucket } from "react-icons/gi"
import { IoMdPaw } from "react-icons/io"

export default function LocationTypes() {
  const [scrollX, setscrollX] = useState(0) // For detecting start scroll postion
  const [scrollEnd, setscrollEnd] = useState(false) // For detecting end of scrolling
  const scrl = useRef()
  const categoryIcons = [
    { name: "OMG!", icon: <TbUfo size={22} /> },
    { name: "Beachfront", icon: <GiBeachBucket size={22} /> },
    { name: "Mansions", icon: <FaHome size={22} /> },
    { name: "Cabins", icon: <FaTree size={22} /> },
    { name: "Nature", icon: <FaMountain size={22} /> },
    { name: "Islands", icon: <FaCampground size={22} /> },
    { name: "Pets", icon: <IoMdPaw size={22} /> },
    { name: "Luxury", icon: <FaMapMarkerAlt size={22} /> },
    { name: "Apartment", icon: <FaMap size={22} /> },
    { name: "Boats", icon: <FaShip size={22} /> },
    { name: "Beachfront", icon: <GiBeachBucket size={22} /> },
    { name: "Mansions", icon: <FaHome size={22} /> },
    { name: "Cabins", icon: <FaTree size={22} /> },
    { name: "Nature", icon: <FaMountain size={22} /> },
    { name: "Islands", icon: <FaCampground size={22} /> },
    { name: "Pets", icon: <IoMdPaw size={22} /> },
    { name: "Luxury", icon: <FaMapMarkerAlt size={22} /> },
    { name: "Apartment", icon: <FaMap size={22} /> },
    { name: "Boats", icon: <FaShip size={22} /> },
    { name: "Beachfront", icon: <GiBeachBucket size={22} /> },
    { name: "Mansions", icon: <FaHome size={22} /> },
    { name: "Cabins", icon: <FaTree size={22} /> },
    { name: "Nature", icon: <FaMountain size={22} /> },
    { name: "Islands", icon: <FaCampground size={22} /> },
    { name: "Pets", icon: <IoMdPaw size={22} /> },
    { name: "Luxury", icon: <FaMapMarkerAlt size={22} /> },
    { name: "Apartment", icon: <FaMap size={22} /> },
    { name: "Boats", icon: <FaShip size={22} /> },
  ]
  const slide = (shift) => {
    const scrollLeft = scrl.current?.scrollLeft
    const maxScrollLeft = scrl.current?.scrollWidth - scrl.current.offsetWidth

    let targetScrollLeft = scrollLeft + shift
    if (targetScrollLeft < 0) {
      targetScrollLeft = 0
    } else if (targetScrollLeft > maxScrollLeft) {
      targetScrollLeft = maxScrollLeft
    }

    const duration = 300 // in milliseconds
    const startTime = performance.now()
    const endTime = startTime + duration

    const easeInOutQuad = (t) => {
      t /= duration / 2
      if (t < 1) return (shift / 2) * t * t + scrollLeft
      t--
      return (-shift / 2) * (t * (t - 2) - 1) + scrollLeft
    }

    const scroll = (currentTime) => {
      if (currentTime >= endTime) {
        scrl.current.scrollLeft = targetScrollLeft
        setscrollX(targetScrollLeft)
        return
      }
      const time = currentTime - startTime
      const newScrollLeft = easeInOutQuad(time)
      scrl.current.scrollLeft = newScrollLeft
      setscrollX(newScrollLeft)
      requestAnimationFrame(scroll)
    }

    requestAnimationFrame(scroll)
    setscrollEnd(targetScrollLeft >= maxScrollLeft)
  }
  //This will check scroll event and checks for scroll end
  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft)
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrollEnd(true)
    } else {
      setscrollEnd(false)
    }
  }
  useEffect(() => {
    //Check width of the scroll
    if (
      scrl.current &&
      scrl?.current?.scrollWidth === scrl?.current?.offsetWidth
    ) {
      setscrollEnd(true)
    } else {
      setscrollEnd(false)
    }
    return () => {}
  }, [scrl?.current?.scrollWidth, scrl?.current?.offsetWidth])

  return (
    <div
      id="categories"
      className="h-[60px] md:ml-1 -translate-y-1  w-full flex items-center  overflow-x-scroll relative group bg-white  dark:bg-neutral-800 xl:px-20"
    >
      {/* Left arrow button */}

      {scrollX !== 0 && (
        <button
          id="left-arrow"
          onClick={() => slide((scrl.current.offsetWidth / 2) * -1)}
          className="absolute left-6 top-1/2 -translate-y-1/2 bottom-0 flex items-center justify-center z-10 bg-black/50 dark:bg-white/50 rounded-full h-9 w-9"
        >
          <FaChevronLeft
            className="text-[#babbbd] dark:text-black/50"
            size={22}
          />
        </button>
      )}

      {/* Right arrow button */}
      {!scrollEnd && (
        <button
          id="right-arrow"
          onClick={() => slide(scrl.current.offsetWidth / 2)}
          className="absolute right-6 md:right-[44px] top-1/2 -translate-y-1/2 bottom-0 px-3 flex items-center justify-center z-10 bg-neutral-800/50 opacity-0 group-hover:opacity-100 rounded-full h-9 w-9 dark:bg-white/50"
        >
          <FaChevronRight
            className="text-white/70 dark:text-black/50 "
            size={22}
          />
        </button>
      )}

      <div
        ref={scrl}
        onScroll={scrollCheck}
        className="flex overflow-x-auto gap-8 pt-[5px] -ml-1.5 px-8 md:px-[42px] xl:px-0 "
      >
        {categoryIcons.map((category) => (
          <div
            key={category.name}
            className={`flex flex-col font-semibold justify-center items-center overflow-visible h-full relative dark:text-neutral-300 ${
              category.name === "OMG!" ? "opacity-100" : "opacity-60"
            }`}
          >
            <span className="-mb-1">{category.icon}</span>
            <div className="relative">
              <span className="text-xs whitespace-nowrap">{category.name}</span>
              <div className="absolute h-0.5 w-full bottom-0 left-0"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
