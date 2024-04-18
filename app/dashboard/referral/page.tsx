import ReferralContainer from '@/components/dashboard/ReferralContainer'
import React from 'react'

type Props = {}

function Pool({}: Props) {
  return (
    <div className=" w-full bg-black">
      <div className="flex h-full w-full justify-center  rounded-tl-3xl bg-[#140822] px-8 pt-16">
        <ReferralContainer />
      </div>
    </div>
  )
}

export default Pool
