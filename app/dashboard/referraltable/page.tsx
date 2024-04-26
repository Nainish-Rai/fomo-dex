import DashBoard from '@/components/DashBoard'
import DashBoardComponent from '@/components/DashBoard'
import ReferralContainer from '@/components/dashboard/ReferralContainer'
import React from 'react'

type Props = {}

function ReferralTable({}: Props) {
  return (
    <div className=" hide-scrollbar w-full overflow-scroll bg-black">
      <div className="flex h-fit w-full justify-center  rounded-tl-3xl bg-[#140822] px-8 pb-16 pt-32">
        <DashBoard />
      </div>
    </div>
  )
}

export default ReferralTable
