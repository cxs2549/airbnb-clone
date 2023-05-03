"use client"
import Card from "@/components/Card"
import ToggleBtn from "@/components/ToggleBtn"
import { useEffect, useState } from "react"
import { generateRandomData } from "./data"


const Home = () => {
  const [locations, setLocations] = useState([])
  const [displayPrice, setDisplayPrice] = useState(true)
  useEffect(() => {
    const updatedLocations = generateRandomData()
    setLocations(updatedLocations)
  }, [])


  return (
    <>
      <ToggleBtn open={displayPrice} setOpen={setDisplayPrice} />
      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:mx-6 gap-6 md:mx-10 xl:mx-20 items-center pb-8">
        {locations?.map((location, index) => (
          <Card showPrice={displayPrice} key={index} {...location} />
        ))}
      </div>
    </>
  )
}

export default Home
