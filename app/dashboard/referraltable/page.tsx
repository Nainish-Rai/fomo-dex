import DashBoardComponent from '@/components/DashBoard'
import ReferralContainer from '@/components/dashboard/ReferralContainer'
import React from 'react'

type Props = {}

function ReferralTable({}: Props) {
  return (
    <div className=" w-full bg-black">
      <div className="flex h-full w-full justify-center  rounded-tl-3xl bg-[#140822] px-8 pt-16">
        <DashBoardComponent />
      </div>
    </div>
  )
}

export default ReferralTable
