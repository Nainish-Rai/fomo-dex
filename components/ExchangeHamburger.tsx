import { useState } from 'react'
import SideBar from './exchange/SideBar'
import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function ExchangeHamburger({ handleClick }: { handleClick: () => void }) {
  // const [open, setOpen] = useState(false)
  return (
    <div className="fixed left-0  right-0 top-0 z-50  bg-black">
      <div className="flex w-full  flex-col items-center whitespace-nowrap pb-12  text-base lg:flex">
        <div
          className="flex w-full justify-end px-6 py-2 text-2xl "
          onClick={handleClick}
        >
          X
        </div>
        <div className=" flex w-full max-w-full flex-col px-4 font-medium text-neutral-400">
          <Link
            onClick={handleClick}
            href={'/exchange'}
            className=" flex cursor-pointer gap-3.5 rounded-xl p-3 px-6 duration-200 hover:bg-purple-900 hover:text-white"
          >
            <Image src="/swapicon.png" alt="Swap" width={28} height={28} />
            <div className="my-auto flex-auto">Swap</div>
          </Link>
          <div className="mt-2 flex cursor-pointer gap-3.5  rounded-xl p-3 px-6 duration-200 hover:bg-purple-900 hover:text-white">
            <Image
              src="/liquidityicon.png"
              alt="Liquidity"
              width={28}
              height={28}
            />
            <div className="my-auto">Liquidity</div>
          </div>
          <Link
            onClick={handleClick}
            href={'/exchange/pool'}
            className="mt-2 flex cursor-pointer gap-3.5  rounded-xl p-3 px-6 duration-200 hover:bg-purple-900 hover:text-white"
          >
            <Image src="/poolsicon.png" alt="Pools" width={28} height={28} />
            <div className="my-auto">Pools</div>
          </Link>
          <div className="mt-2 flex cursor-pointer gap-3.5  rounded-xl p-3 px-6 duration-200 hover:bg-purple-900 hover:text-white">
            <Image src="/docsicon.png" alt="Docs" width={28} height={28} />
            <div className="my-auto">Docs</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExchangeHamburger
