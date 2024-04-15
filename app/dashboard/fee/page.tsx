import FeeContainer from '@/components/dashboard/FeesContainer'
import StatsCard from '@/components/dashboard/StatsCard'
import React from 'react'

type Props = {}

function Fee({}: Props) {
  return (
    <div className=" w-full bg-black ">
      <div className="mb-16 flex h-full w-full flex-col items-center rounded-tl-3xl  bg-[#140822] px-8  py-16 ">
        <div className="mb-8 flex w-full gap-10">
          <StatsCard label="Total Fees Claimed" value="$123,456" />
          <StatsCard label="Claimable Fee" value="$123,456" />
          <StatsCard label="Total Liquidity Provided" value="$123,456" />
          <StatsCard label="Fee Rate" value="10%" />
        </div>
        <FeeContainer />
      </div>
    </div>
  )
}

export default Fee
