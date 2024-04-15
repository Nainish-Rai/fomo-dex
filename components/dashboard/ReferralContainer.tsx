import * as React from 'react'
import Image from 'next/image'
import PrimaryBtn from '../PrimaryBtn'
import FromCard from '../exchange/FromCard'
import ToCard from '../exchange/ToCard'

function ReferralContainer() {
  return (
    <div className="flex h-fit w-full max-w-[490px] flex-col rounded-3xl border border-solid border-stone-500 bg-neutral-900 px-8 py-6">
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

      <PrimaryBtn className="mt-6 w-full py-0">
        <div className="my-2">Generate Referral </div>
      </PrimaryBtn>
      <div className="mt-10 flex max-w-[430px] flex-col rounded-md border border-solid border-black border-opacity-30 bg-white px-2.5 py-6 text-center sm:max-w-full md:max-w-[430px] lg:max-w-[430px]">
        <div className="self-center text-sm font-light leading-8 text-purple-500">
          https://single-sided.the-referral-factory.com
        </div>
        <PrimaryBtn className="mt-3 w-full py-2">Copy Link</PrimaryBtn>
      </div>
    </div>
  )
}

export default ReferralContainer
