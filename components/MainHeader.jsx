"use client"
import styled from "styled-components"
import { AiOutlineGlobal } from "react-icons/ai"
import { HiUserCircle } from "react-icons/hi"
import Link from "next/link"
import { BiSearch } from "react-icons/bi"


const NavbarContainer = styled.nav`
  /* display: flex; */
  justify-content: space-between;
  align-items: center;
  height: 80px;
  /* background-color: white; */
  /* padding: 0 24px; */
`

const Logo = styled.img`
  height: 40px;
`

const SearchSection = styled.div`
  flex-grow: 1;
  /* margin: 0 40px; */
  max-width: 352px;
`

const SearchInput = styled.input`
  border: none;
  padding: 10px;
  border-radius: 9999999px;
  width: 100%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  &:focus {
    outline: none;
  }
`

const LinkToAirbnb = styled.a`
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  /* margin-right: 40px; */
  /* color: #484848; */
`

const GlobeIcon = styled(AiOutlineGlobal)`
  font-size: 24px;
  /* color: #484848; */
`

const UserButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
`

const UserIcon = styled(HiUserCircle)`
  font-size: 32px;
  /* color: #484848; */
`

const MainHeader = () => {
  return (
    <NavbarContainer className="hidden bg-white relative px-10 dark:bg-neutral-800 lg:px-10 xl:px-20 md:flex gap-6 lg:justify-start h-[70px]">
      <div className="flex flex-1 items-center gap-8">
        <Link href="/">
          <Logo src="/logo.png" alt="Logo" />
        </Link>
        <SearchSection className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2 h-12 rounded-full lg:w-full border dark:border-neutral-700 shadow flex pl-4 items-center justify-center gap-4 divide-x dark:divide-neutral-700">
          <button className="text-sm font-semibold dark:text-neutral-300">Anywhere</button>
          <button className="text-sm font-semibold pl-4 dark:text-neutral-300">Any week</button>
          <div className="flex items-center gap-3">
            <button className="text-sm text-gray-500 pl-4 dark:text-neutral-400">Add guests</button>
            <button className="rounded-full h-8 w-8 bg-[#FF385C] text-white flex items-center justify-center">
              <BiSearch />
            </button>
          </div>
        </SearchSection>
      </div>
      <LinkToAirbnb className="dark:text-neutral-300" href="#">Airbnb your home</LinkToAirbnb>
      <GlobeIcon className="dark:text-neutral-300" />
      <UserButton>
        <UserIcon className="dark:text-neutral-300" />
      </UserButton>
    </NavbarContainer>
  )
}

export default MainHeader
