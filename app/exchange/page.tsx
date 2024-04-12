import ExchangeContainer from '@/components/exchange/ExchangeContainer'
import GraphContainer from '@/components/exchange/GraphContainer'
import React from 'react'

type Props = {}

function Exchange({}: Props) {
  return (
    <div className=" h-full w-full  bg-black">
      <div className=" flex h-full w-full flex-col items-center justify-center overflow-scroll overflow-x-hidden rounded-tl-3xl bg-[#140822] pb-8 pt-48">
        <ExchangeContainer />
        <GraphContainer />
      </div>
    </div>
  )
}

export default Exchange
