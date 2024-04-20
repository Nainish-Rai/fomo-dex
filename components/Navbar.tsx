import Image from 'next/image'
import * as React from 'react'
import Link from 'next/link'
import PrimaryBtn from './PrimaryBtn'
import { FaAngleDown } from 'react-icons/fa6'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 mx-auto flex  w-full bg-black/50 px-0.5 py-4 text-base font-medium text-neutral-400 backdrop-blur-lg ">
      <div className="mx-auto flex  w-full max-w-screen-2xl justify-between gap-5 self-stretch px-5">
        <Link href="/">
          <Image
            src="/brandlogo.svg"
            alt="Logo"
            width={100}
            height={42}
            className="m-2  aspect-[4.17] w-[160px] max-w-full shrink-0"
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
          <PrimaryBtn className="justify-center self-stretch rounded-[40px]  capitalize leading-[150%] text-white ">
            Connect Wallet
          </PrimaryBtn>
        </div>
      </div>
    </nav>
  )
}
