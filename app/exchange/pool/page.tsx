import PoolContainer from '@/components/pools/PoolContainer'
import React from 'react'

type Props = {}

function Pool({}: Props) {
  return (
    <div className="hide-scrollbar w-full overflow-scroll bg-black ">
      <div className="hide-scrollbar flex h-fit  w-full flex-col  items-center justify-center overflow-scroll  rounded-tl-3xl  bg-black px-4 pt-8 lg:mt-20  lg:bg-[#140822] lg:px-8 ">
        <div className="flex w-full items-center justify-between px-2 py-8">
          <h3 className="text-base font-semibold text-white lg:text-xl">
            Pools
          </h3>
          <div className="flex gap-2  text-xs font-medium text-textsecondary lg:gap-8 lg:text-sm">
            <div>
              TVL: <span className="text-white">100,000,000</span>
            </div>
            <div>
              Volume 24H: <span className="text-white">100,000,000</span>
            </div>
          </div>
        </div>
        <PoolContainer />
      </div>
    </div>
  )
}

export default Pool
