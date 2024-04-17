import * as React from 'react'
import Image from 'next/image'
import PrimaryBtn from '../PrimaryBtn'
import FromCard from '../exchange/FromCard'
import ToCard from '../exchange/ToCard'

function ReferralContainer() {
  return (
    <div className="flex h-fit w-full max-w-[490px] flex-col rounded-3xl border border-solid border-stone-500 bg-neutral-900 px-8 py-6">
      {/* From Card */}
      <div className="bg-secondarybg">
        <div className=" flex items-center gap-2 text-base font-medium leading-6 text-white">
          <Image src="/solana.png" alt="Solana" width={24} height={24} />
          <div>SOL</div>
          <div className="flex h-full items-center">
            <Image src="/downarr.png" alt="Solana" width={12} height={12} />
          </div>
        </div>
      </div>
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
