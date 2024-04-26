import DashBoardComponent from '@/components/DashBoard'
import React from 'react'

type Props = {}

function page({}: Props) {
  return (
    <div className="mt-64 w-full overflow-scroll ">
      <DashBoardComponent />
    </div>
  )
}

export default page
