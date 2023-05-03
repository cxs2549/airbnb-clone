"use client"
import { useState } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { BsSearch } from "react-icons/bs"
import Image from "next/image"

export default function Modal({ active, close }) {
  const [isVisible, setIsVisible] = useState(active)

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => {
      close()
    }, 2000)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="container"
          className="fixed inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.5,
            },
          }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            key="bg"
            className="fixed inset-0 bg-[#F7F7F7] dark:bg-neutral-800"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.5,
              },
            }}
            transition={{ duration: 0.5 }}
          />
          <div className="px-4 h-[75px] flex w-full absolute top-0 left-0 items-center">
            <button
              className="rounded-full border border-neutral-400 dark:border-neutral-700 translate-x-4 h-8 w-8 grid place-items-center cursor-pointer"
              onClick={handleClose}
            >
              <AiOutlineClose size={18} className="dark:text-neutral-100" />
            </button>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 self-end -translate-y-1/2 text-[16px] font-semibold dark:text-neutral-100">
              <div className="flex gap-6">
                <Link href="/">Stays</Link>
                <Link href="/">Experiences</Link>
              </div>
            </div>
          </div>
          <motion.div
            key="main-content"
            className="fixed z-50 inset-0 flex flex-col items-center mt-[75px]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-neutral-600 shadow-lg py-5 rounded-3xl w-[95%]  flex flex-col gap-5">
              <div className="px-6">
                <h1 className="text-2xl font-bold dark:text-white">
                  Where to?
                </h1>
              </div>
              <div className="border dark:border-neutral-500 mx-6 rounded-xl flex items-center gap-4 pl-4 h-16">
                <BsSearch size={20} className="dark:text-neutral-100" />
                <input
                  type="search"
                  placeholder="Search destinations"
                  className="w-full rounded-xl bg-transparent  h-full focus:outline-none dark:text-neutral-100"
                />
              </div>
              <div className="overflow-x-scroll px-6 flex gap-5 items-center">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="rounded-xl h-[130px] overflow-hidden border-gray-600 w-[130px] flex-shrink-0"
                  >
                    <Image
                      src="/world.jpg"
                      className="w-full h-full"
                      width={100}
                      height={100}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-neutral-600 mt-4 shadow-lg py-5 rounded-3xl w-[95%]  flex flex-col gap-5">
              <div className="overflow-x-scroll px-6 flex gap-5 items-center"></div>
            </div>
            <div className="bg-white dark:bg-neutral-600 mt-4 shadow-lg py-5 rounded-3xl w-[95%]  flex flex-col gap-5">
              <div className="overflow-x-scroll px-6 flex gap-5 items-center"></div>
            </div>
          </motion.div>
          <div className="flex items-center justify-between font-semibold fixed px-6 border-t dark:border-neutral-700 bottom-0 w-full h-[70px]">
            <button className="border-b pb-px dark:text-neutral-100">
              Clear all
            </button>
            <button className="bg-[#E21D5D] text-white rounded-lg px-6 py-3">
              Search
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
