"use client"
import { useState } from "react"
import { BiSearch } from "react-icons/bi"
import { GiSettingsKnobs } from "react-icons/gi"
import SearchModal from "./SearchModal"
import tw from "tailwind-styled-components"

const Surface = tw.div`
flex md:hidden items-center justify-center h-[70px] bg-white dark:bg-neutral-800 mb-3
`

const Container = tw.div`
shadow-custom dark:bg-neutral-600 rounded-full translate-y-1.5 mx-6 w-full h-14
`

function Searchbar() {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)
  return (
    <Surface>
      <Container
        onClick={openModal}
      >
        <div className="flex px-2 justify-between h-full items-center">
          <div className="flex gap-2">
            <button className="text-neutral-700 dark:text-neutral-300 rounded-full w-10 h-10 flex items-center justify-center">
              <BiSearch size={20} />
            </button>
            <div className="flex flex-col">
              <span className="font-semibold text-sm relative dark:text-neutral-300">
                Anywhere
              </span>
              <br />
              <span className="text-gray-500 dark:text-neutral-400 text-xs">
                Any week &#183; Add guests
              </span>
            </div>
          </div>
          <div>
            <button className="text-neutral-700 rounded-full w-10 h-10 flex items-center justify-center border-[1.5px] border-gray-200 dark:text-neutral-300 dark:border-neutral-300 ml-3">
              <GiSettingsKnobs className="rotate-90" size={18} />
            </button>
          </div>
        </div>
      </Container>
      {showModal && <SearchModal active={showModal} close={closeModal} />}
    </Surface>
  )
}

export default Searchbar
