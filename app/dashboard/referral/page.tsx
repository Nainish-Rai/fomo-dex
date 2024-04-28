import ReferralContainer from '@/components/dashboard/ReferralContainer'
import React from 'react'

type Props = {}

function Pool({}: Props) {
  return (
    <div className=" hide-scrollbar w-full overflow-scroll bg-black">
      <div className="flex h-fit w-full justify-center  rounded-tl-3xl bg-[#140822] px-4 pb-16 pt-32 lg:px-8">
        <ReferralContainer />
      </div>
    </div>
  )
}

export default Pool
