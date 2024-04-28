import * as React from 'react'
import Image from 'next/image'
import PrimaryBtn from '../PrimaryBtn'
import FromCard from './FromCard'
import ToCard from './ToCard'
import InfoCard from './InfoCard'

function ExchangeContainer() {
  return (
    <div className=" flex w-full flex-col rounded-3xl border border-solid border-border bg-cardbg py-4 md:max-w-lg lg:p-8">
      {/* From Card */}
      <FromCard />
      {/* FROM CARD */}
      <div className="ml-4 mt-5 flex gap-3.5 self-start text-base font-semibold leading-4 text-white">
        <Image src="/exchangelogo.png" alt="Swap" width={28} height={28} />
        <div className="my-auto flex-auto">1 SOL = 81.77 FOMO</div>
      </div>
      {/* TO CARD */}
      <ToCard />
      {/* TO CARD */}
      <div className="px-4 lg:px-0">
        <InfoCard />

        <PrimaryBtn className="mt-6 w-full py-0">
          <div className=""> Connect Wallet</div>
        </PrimaryBtn>
      </div>
    </div>
  )
}

export default ExchangeContainer
