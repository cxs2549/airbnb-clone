export default function ToggleBtn({ open, setOpen }) {
  const handleToggleChange = () => {
    setOpen(!open)
  }

  return (
    <div className="px-4 mx-6 md:mx-10 xl:mx-auto xl:max-w-[42%] rounded-xl my-6 dark:border-neutral-700 h-[72px] md:h-[60px] border">
      <div className="flex justify-between h-full items-center">
        <div className="flex flex-col md:flex-row md:gap-3 md:divide-x">
          <div className="font-semibold text-sm md:text-[15px] dark:text-neutral-300">
            Display total price
          </div>
          <div className="text-sm md:text-[15px] text-gray-500 dark:text-neutral-400 md:pl-3">
            Includes all fees, before taxes
          </div>
        </div>
        <div className="relative inline-block w-[52px] align-middle select-none transition duration-100 ease-in">
          <input
            type="checkbox"
            name="toggle"
            id="toggle"
            checked={open}
            onChange={handleToggleChange}
            className={`toggle-checkbox absolute block w-8 h-8 rounded-full bg-white dark:bg-neutral-700 border-4 dark:border-neutral-500 appearance-none cursor-pointer transition-all duration-100 ease-in ${
              open ? "right-0" : "left-0"
            }`}
            style={{ left: open ? "auto" : "0", right: open ? "0" : "auto" }}
          />
          <label
            htmlFor="toggle"
            className={`toggle-label block overflow-hidden h-8 rounded-full cursor-pointer transition-all duration-100 ease-in ${
              open
                ? "left-0 bg-black dark:bg-neutral-400"
                : "right-0 bg-neutral-400 dark:bg-neutral-700"
            }`}
          ></label>
        </div>
      </div>
    </div>
  )
}
