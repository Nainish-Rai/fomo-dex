import * as React from 'react'
import Image from 'next/image'

function SideBar() {
  return (
    <div className=" flex w-full max-w-60 flex-col items-center  whitespace-nowrap text-base">
      <div className=" mt-12 flex w-full max-w-full flex-col px-4 font-medium text-neutral-400">
        <div className=" flex cursor-pointer gap-3.5 rounded-xl p-3 px-6 duration-200 hover:bg-purple-900 hover:text-white">
          <Image src="/swapicon.png" alt="Swap" width={28} height={28} />
          <div className="my-auto flex-auto">Swap</div>
        </div>
        <div className="mt-2 flex cursor-pointer gap-3.5  rounded-xl p-3 px-6 duration-200 hover:bg-purple-900 hover:text-white">
          <Image
            src="/liquidityIcon.png"
            alt="Liquidity"
            width={28}
            height={28}
          />
          <div className="my-auto">Liquidity</div>
        </div>
        <div className="mt-2 flex cursor-pointer gap-3.5  rounded-xl p-3 px-6 duration-200 hover:bg-purple-900 hover:text-white">
          <Image src="/poolsIcon.png" alt="Pools" width={28} height={28} />
          <div className="my-auto">Pools</div>
        </div>
        <div className="mt-2 flex cursor-pointer gap-3.5  rounded-xl p-3 px-6 duration-200 hover:bg-purple-900 hover:text-white">
          <Image src="/docsIcon.png" alt="Docs" width={28} height={28} />
          <div className="my-auto">Docs</div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
