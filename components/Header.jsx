"use client"
import { useState, useEffect } from "react"
import Searchbar from "./Searchbar"
import MainHeader from "./MainHeader"
import LocationTypesSection from "./LocationTypes"

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-white dark:bg-neutral-800 z-40 transition-all duration-200 ${
        scrolled ? "shadow" : " "
      }`}
    >
      <div className="max-w-[2360px] mx-auto">
        <Searchbar />
        <MainHeader />
        <LocationTypesSection />
      </div>
    </header>
  )
}

export default Header
