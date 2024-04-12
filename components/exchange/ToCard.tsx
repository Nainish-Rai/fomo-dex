import Image from 'next/image'
import PrimaryBtn from '../PrimaryBtn'
export default function ToCard() {
  return (
    <div className="fle2 mt-5 flex-col rounded-xl bg-[#140822] bg-opacity-50 px-8 py-6">
      <div className="flex gap-5 text-sm leading-4">
        <div className="text-white">TO</div>
        <div className="flex-auto font-medium text-neutral-400">
          Balance: $100,000,000
        </div>
      </div>
      <div className="mt-6 flex items-start justify-between gap-4 ">
        <div className=" flex items-center gap-2 text-base font-medium leading-6 text-white">
          <Image src="/solana.png" alt="Solana" width={24} height={24} />
          <div>FOMO</div>
          <div className="flex h-full items-center">
            <Image src="/downarr.png" alt="Solana" width={12} height={12} />
          </div>
        </div>
        <div className="flex items-center gap-3 px-0.5 text-sm font-medium capitalize leading-5 text-white">
          <div className="h-8 w-px shrink-0 self-stretch border-r border-solid border-indigo-300 border-opacity-50" />
          <PrimaryBtn className="my-auto items-start justify-center self-stretch rounded-[40px] px-1  py-0 text-xs">
            <div className="m-2">Max</div>
          </PrimaryBtn>
          <PrimaryBtn className=" my-auto justify-center self-stretch rounded-[40px]  px-1 py-0 text-xs">
            <div className="m-2"> Half</div>
          </PrimaryBtn>
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
