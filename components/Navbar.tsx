import Image from 'next/image'
import * as React from 'react'
import Link from 'next/link'
import PrimaryBtn from './PrimaryBtn'
import { FaAngleDown } from 'react-icons/fa6'

export default function Navbar() {
  return (
    <nav className=" fixed  top-0 z-50 mx-auto flex  w-full bg-black/50 p-2 text-base  font-medium text-neutral-400 backdrop-blur-lg md:px-8 md:py-4 md:pt-8   ">
      <div className="mx-auto flex  w-full max-w-screen-2xl items-center justify-between gap-5 self-stretch px-2 lg:px-5">
        <Link href="/">
          <Image
            src="/brandlogo.svg"
            alt="Logo"
            width={100}
            height={42}
            className="m-2  aspect-[4.17] w-[5rem] max-w-full shrink-0 lg:w-[160px]"
          />
        </Link>
        <div className=" hidden items-center gap-5 self-start max-md:max-w-full max-md:flex-wrap md:flex">
          <div className="my-auto grow cursor-pointer self-stretch font-bold text-purple-600">
            Home
          </div>
          <div className="my-auto flex cursor-pointer items-center gap-2  whitespace-nowrap">
            Community
            <FaAngleDown />
          </div>
          <div className="my-auto flex cursor-pointer items-center gap-2   whitespace-nowrap">
            Settings
            <FaAngleDown />
          </div>
          <PrimaryBtn className="ml-14   justify-center self-stretch rounded-[40px]  capitalize leading-[150%] text-white ">
            Connect Wallet
          </PrimaryBtn>
        </div>
        <Image
          src="/hamburger.png"
          alt="menu"
          width={20}
          height={20}
          className="m-2 md:hidden"
        />
      </div>
    </nav>
  )
}
