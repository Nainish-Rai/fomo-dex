import Image from 'next/image'
import { SelectToken } from './SelectToken'
import GradientDiv from '../GradientDiv'
import { FaAngleDown } from 'react-icons/fa6'
export default function FromCard() {
  return (
    <div className="mt-2 flex flex-col rounded-xl bg-[#140822] bg-opacity-50 px-6 py-6 lg:mt-0 lg:px-8">
      <div className="flex w-full justify-between gap-5 text-sm leading-4">
        <div className="text-white">From</div>
        <div className=" font-medium text-neutral-400">
          Balance: $100,000,000
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-2 lg:gap-4 ">
        <SelectToken>
          <div className=" flex cursor-pointer items-center gap-2 text-base font-medium leading-6 text-white">
            <Image src="/solana.png" alt="Solana" width={24} height={24} />
            <div className="text-sm lg:text-base">SOL</div>
            <div className="flex h-full items-center">
              <FaAngleDown />
            </div>
          </div>
        </SelectToken>
        <div className="flex items-start gap-2  px-0.5 text-sm font-medium capitalize leading-5 text-white lg:gap-3">
          <div className="h-8 w-px shrink-0 self-stretch border-r border-solid border-indigo-300 border-opacity-50" />
          <GradientDiv className=" items-start justify-center  rounded-[40px] px-1  py-0 text-xs">
            <div className="m-1 mx-2">Max</div>
          </GradientDiv>
          <GradientDiv className="  justify-center  rounded-[40px]  px-1 py-0 text-xs">
            <div className="m-1 mx-2"> Half</div>
          </GradientDiv>
        </div>
        <div className=" flex flex-col">
          <div className="self-end text-sm font-semibold leading-4 text-white lg:text-lg">
            1,000
          </div>
          <div className="mt-2.5 text-xs font-medium leading-4 text-neutral-400 lg:text-sm">
            $100,000,000
          </div>
        </div>
      </div>
    </div>
  )
}
