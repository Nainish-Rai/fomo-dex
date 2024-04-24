import Image from 'next/image'
import { SelectToken } from './SelectToken'
import GradientDiv from '../GradientDiv'
import { FaAngleDown } from 'react-icons/fa6'
export default function FromCard() {
  return (
    <div className="flex  flex-col rounded-xl bg-[#140822] bg-opacity-50 px-8 py-6">
      <div className="flex w-full justify-between gap-5 text-sm leading-4">
        <div className="text-white">From</div>
        <div className=" font-medium text-neutral-400">
          Balance: $100,000,000
        </div>
      </div>
      <div className="mt-6 flex items-start justify-between gap-4 ">
        <SelectToken>
          <div className=" flex cursor-pointer items-center gap-2 text-base font-medium leading-6 text-white">
            <Image src="/solana.png" alt="Solana" width={24} height={24} />
            <div>SOL</div>
            <div className="flex h-full items-center">
              <FaAngleDown />
            </div>
          </div>
        </SelectToken>
        <div className="flex items-center gap-3 px-0.5 text-sm font-medium capitalize leading-5 text-white">
          <div className="h-8 w-px shrink-0 self-stretch border-r border-solid border-indigo-300 border-opacity-50" />
          <GradientDiv className="my-auto items-start justify-center self-stretch rounded-[40px] px-1  py-0 text-xs">
            <div className="m-1 mx-2">Max</div>
          </GradientDiv>
          <GradientDiv className=" my-auto justify-center self-stretch rounded-[40px]  px-1 py-0 text-xs">
            <div className="m-1 mx-2"> Half</div>
          </GradientDiv>
        </div>
        <div className=" flex flex-col">
          <div className="self-end text-lg font-semibold leading-4 text-white">
            1,000
          </div>
          <div className="mt-2.5 text-sm font-medium leading-4 text-neutral-400">
            $100,000,000
          </div>
        </div>
      </div>
    </div>
  )
}
