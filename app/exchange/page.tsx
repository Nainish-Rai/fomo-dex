import ExchangeContainer from '@/components/exchange/ExchangeContainer'
import GraphContainer from '@/components/exchange/GraphContainer'
import React from 'react'

type Props = {}

function Exchange({}: Props) {
  return (
    <div className="w-full  bg-black">
      <div className=" hide-scrollbar flex h-full w-full   flex-col items-center justify-center overflow-scroll overflow-x-hidden rounded-tl-3xl bg-secondarybg py-32 ">
        <div>
          <ExchangeContainer />
          <GraphContainer />
        </div>
      </div>
    </div>
  )
}

export default Exchange
