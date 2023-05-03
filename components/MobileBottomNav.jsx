import { BsSearch, BsHeart } from "react-icons/bs"
import { CiUser } from "react-icons/ci"

function Item({ icon, name }) {
  return (
    <div className="flex flex-col items-center z-50">
      <div
        className={` ${
          name === "Explore" ? "text-[#FF385C] opacity-100" : "opacity-60 dark:text-neutral-300"
        }`}
      >
        {icon}
      </div>
      <p
        className={`text-xs font-medium mt-1 dark:text-neutral-300 ${
          name === "Explore" ? "opacity-100" 
          : "opacity-60"
        }`}
      >
        {name}
      </p>
    </div>
  )
}

function MobileBottomNav() {
  const items = [
    { icon: <BsSearch className="text-2xl" />, name: "Explore" },
    { icon: <BsHeart className="text-2xl" />, name: "Wishlists" },
    { icon: <CiUser className="text-2xl" />, name: "Log in" },
  ]

  return (
    <nav className="fixed sm:hidden bottom-0 w-full h-16 bg-white dark:bg-neutral-800 border-t border-gray-200 dark:border-neutral-700 flex justify-evenly items-center">
      {items.map(({ icon, name }) => (
        <Item key={name} icon={icon} name={name} />
      ))}
    </nav>
  )
}

export default MobileBottomNav
