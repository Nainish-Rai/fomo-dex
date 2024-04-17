import PoolContainer from '@/components/pools/PoolContainer'
import React from 'react'

type Props = {}

function Pool({}: Props) {
  return (
    <div className=" w-full bg-black">
      <div className="flex h-full w-full flex-col  items-center justify-center rounded-tl-3xl bg-[#140822] px-8 ">
        <div className="flex w-full items-center justify-between px-2 py-8">
          <h3 className="text-xl font-semibold text-white">Pools</h3>
          <div className="text-textsecondary flex gap-8 font-medium">
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
