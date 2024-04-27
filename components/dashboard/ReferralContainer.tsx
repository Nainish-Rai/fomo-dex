import * as React from 'react'
import Image from 'next/image'
import PrimaryBtn from '../PrimaryBtn'
import FromCard from '../exchange/FromCard'
import ToCard from '../exchange/ToCard'
import { SelectToken } from '../exchange/SelectToken'
import { SelectTokenDisclaimer } from '../exchange/SelectTokenDisclaimer'
import { FaAngleDown } from 'react-icons/fa6'

function ReferralContainer() {
  return (
    <div className="flex h-fit w-full max-w-[490px] flex-col rounded-3xl border border-solid border-border bg-cardbg p-8 ">
      {/* From Card */}
      <div className="flex flex-col items-center rounded-xl bg-secondarybg p-4">
        <div className="text-white">From</div>
        <div className=" flex items-center gap-5 text-base font-medium leading-6 text-white">
          <Image
            src="/solana.png"
            alt="Solana"
            width={24}
            height={24}
            className="w-10"
          />
          <div className=" text-lg">SOL</div>
          <div className="flex h-full items-center">
            <FaAngleDown />
          </div>
        </div>
      </div>
      <div className="my-4 flex items-center justify-center">
        <Image
          src={'/exchangelogo.png'}
          alt="down arrow"
          width={48}
          height={48}
          className="w-10"
        />
      </div>

      {/* <SelectToken /> */}
      {/* From Card */}
      <div className="flex flex-col items-center rounded-xl bg-secondarybg p-4">
        <div className="text-white">To</div>
        <div className=" flex items-center gap-5 text-base font-medium leading-6 text-white">
          <Image
            src="/solana.png"
            alt="Solana"
            width={24}
            height={24}
            className="w-10"
          />
          <div className=" text-lg">SOL</div>
          <div className="flex h-full items-center">
            <FaAngleDown />
          </div>
        </div>
      </div>
      <PrimaryBtn className="mt-6 w-full py-0">
        <div className="">Generate Referral </div>
      </PrimaryBtn>
      <div className="mt-10 flex max-w-[430px] flex-col rounded-md border border-solid border-black border-opacity-30 bg-secondarybg px-2.5 py-6 text-center sm:max-w-full md:max-w-[430px] lg:max-w-[430px]">
        <div className="self-center  leading-8 text-purple-500">
          https://single-sided.the-referral-factory.com
        </div>
        <PrimaryBtn className="mt-3 w-full py-2">Copy Link</PrimaryBtn>
      </div>
      <div className="mt-8 flex w-full flex-col items-center justify-center">
        <h3 className="text-xl font-semibold text-white">
          Share Your Unique Referral Link
        </h3>
        <div className="mt-4 flex cursor-pointer gap-2">
          <Image
            src="/facebook_black.svg"
            alt="referral"
            width={300}
            height={300}
            className="w-8"
          />
          <Image
            src="/twitter_black.svg"
            alt="referral"
            width={300}
            height={300}
            className="w-8"
          />
          <Image
            src="/facebook_black.svg"
            alt="referral"
            width={300}
            height={300}
            className="w-8"
          />
          <Image
            src="/linkedin_black.svg"
            alt="referral"
            width={300}
            height={300}
            className="w-8"
          />
          <Image
            src="/messenger_black.svg"
            alt="referral"
            width={300}
            height={300}
            className="w-8"
          />
          <Image
            src="/sms_black.svg"
            alt="referral"
            width={300}
            height={300}
            className="w-8"
          />

          <Image
            src="/whatsapp_white.svg"
            alt="referral"
            width={300}
            height={300}
            className="w-8"
          />
          <Image
            src="/telegram_black.svg"
            alt="referral"
            width={300}
            height={300}
            className="w-8"
          />
          <Image
            src="/wechat_black.svg"
            alt="referral"
            width={300}
            height={300}
            className="w-8"
          />
          <Image
            src="/line_black.svg"
            alt="referral"
            width={300}
            height={300}
            className="w-8"
          />
          <Image
            src="/messsage_white.svg"
            alt="referral"
            width={300}
            height={300}
            className="w-8"
          />
        </div>
      </div>
    </div>
  )
}

export default ReferralContainer
