import Image from 'next/image'
import * as React from 'react'

export default function Navbar() {
  return (
    <nav className="sticky top-0 mx-auto flex w-full  bg-black/50 px-0.5 text-base font-medium text-neutral-400 backdrop-blur-lg max-md:max-w-full max-md:flex-wrap">
      <div className="mx-auto flex  w-full max-w-7xl justify-between gap-5 self-stretch">
        <Image
          src="/brandlogo.svg"
          alt="Logo"
          width={100}
          height={42}
          className="m-2  aspect-[4.17] w-[160px] max-w-full shrink-0"
        />
        <div className=" hidden items-center gap-5 self-start max-md:max-w-full max-md:flex-wrap md:flex">
          <div className="my-auto grow self-stretch font-bold text-purple-600">
            Home
          </div>
          <div className="my-auto flex gap-2 self-stretch whitespace-nowrap">
            Community
          </div>
          <div className="my-auto flex gap-2 self-stretch whitespace-nowrap">
            Settings
          </div>
          <button className="justify-center self-stretch rounded-[40px] px-5 py-3.5 capitalize leading-[150%] text-white max-md:px-5">
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  )
}
