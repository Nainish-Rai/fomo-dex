import ExchangeContainer from '@/components/exchange/ExchangeContainer'
import GraphContainer from '@/components/exchange/GraphContainer'
import React from 'react'

type Props = {}

function Exchange({}: Props) {
  return (
    <div className="h-screen   w-full  bg-black">
      <div className=" bg-secondarybg flex h-full w-full  scroll-p-96 flex-col items-center justify-center overflow-scroll overflow-x-hidden rounded-tl-3xl ">
        <ExchangeContainer />
        <GraphContainer />
      </div>
    </div>
  )
}

export default Exchange
