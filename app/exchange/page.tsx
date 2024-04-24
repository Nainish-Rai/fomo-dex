import ExchangeContainer from '@/components/exchange/ExchangeContainer'
import GraphContainer from '@/components/exchange/GraphContainer'
import React from 'react'

type Props = {}

function Exchange({}: Props) {
  return (
    <div className="hide-scrollbar w-full overflow-scroll bg-black  ">
      <div className=" hide-scrollbar mt-16 flex h-fit   w-full flex-col items-center justify-center overflow-scroll overflow-x-hidden rounded-tl-3xl bg-secondarybg ">
        <div className=" py-16">
          <ExchangeContainer />
          <GraphContainer />
        </div>
      </div>
    </div>
  )
}

export default Exchange
