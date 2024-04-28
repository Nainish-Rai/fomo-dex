import ExchangeContainer from '@/components/exchange/ExchangeContainer'
import GraphContainer from '@/components/exchange/GraphContainer'
import React from 'react'

type Props = {}

function Exchange({}: Props) {
  return (
    <div className="hide-scrollbar w-full overflow-scroll bg-black  ">
      <div className=" hide-scrollbar mt-16 flex h-fit  w-full  flex-col items-center justify-center overflow-scroll overflow-x-hidden rounded-tl-3xl bg-black lg:bg-secondarybg   ">
        <div className=" w-full px-4 py-8 lg:w-fit lg:px-0 lg:py-16">
          <ExchangeContainer />
          <GraphContainer />
        </div>
      </div>
    </div>
  )
}

export default Exchange
