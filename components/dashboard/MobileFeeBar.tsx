'use client'
import Image from 'next/image'
import { useState } from 'react'
import PrimaryBtn from '../PrimaryBtn'
import { IoMdInformationCircleOutline } from 'react-icons/io'
import { FaAngleDown } from 'react-icons/fa6'
type Props = {
  Prices: string[]
}

interface IconProps {
  src: string
  alt: string
  className?: string
}

const Icon: React.FC<IconProps> = ({ src, alt, className }) => (
  <Image
    src={src}
    alt={alt}
    width={48}
    height={48}
    className={` border-none ${className}`}
  />
)

interface PriceProps {
  price: string
  index: number
}

const Price: React.FC<PriceProps> = ({ price, index }) => (
  <div className="my-3 flex w-1/2 flex-col gap-2">
    <div>
      {index === 0 && <div className="text-neutral-500">User ID</div>}
      {index === 1 && <div className="text-neutral-500">Amount Traded</div>}
      {index === 2 && (
        <div className="text-neutral-500">Commision Recieved</div>
      )}{' '}
      {index === 3 && <div className="text-neutral-500"> Transaction</div>}
      {/* {index === 4 && <div className="text-neutral-500"> Time Stamp</div>} */}
    </div>
    <div className="flex w-1/2 items-center justify-start text-sm">{price}</div>
  </div>
)

// const prices = ['$100,000,000', '$100,000,000', '$100,000,000']

function MobileFeeBar({ Prices }: Props) {
  const [active, setActive] = useState(false)
  return (
    <section
      onClick={() => setActive(!active)}
      className="mt-2 flex h-fit w-full cursor-pointer flex-col items-center justify-center   gap-5 overflow-hidden  rounded-xl bg-[#260F41]/50  bg-opacity-50 pt-3 text-white transition-all duration-200 hover:bg-purple-950 lg:hidden lg:max-w-full lg:flex-row lg:flex-wrap lg:px-4 lg:py-3 "
    >
      <div className="m-0 flex w-full flex-wrap justify-center p-0 px-4">
        {active ? (
          <div className="flex w-full flex-wrap items-center px-4 pb-4">
            <div className="my-2 flex w-1/2  flex-auto flex-col items-start justify-center gap-2 text-left text-sm font-medium text-textsecondary">
              Your Liquidity
              <span className="font-semibold text-white">$100,000,000 </span>
              0LP
            </div>
            <div className="my-2 flex w-1/2 flex-auto flex-col  items-start justify-center gap-2 text-left text-sm font-medium text-textsecondary">
              Assets Pooled
              <span className="font-semibold text-white">0.8 XYZ </span>
              <span className="font-semibold text-white">0 LP </span>
            </div>
            <div className="my-2 flex w-full  flex-auto flex-col items-start justify-center gap-2 text-left text-sm font-medium text-textsecondary">
              Your Share
              <span className="font-semibold text-white">0%</span>
              {/* <span className="font-semibold text-white">0%</span> */}
            </div>
            <div className="my-2 mt-4 w-2/3 items-center justify-center   text-left text-sm">
              <PrimaryBtn className="w-full">Add Liquidity</PrimaryBtn>
            </div>
            <div className="my-2 flex w-1/3 items-center justify-center  gap-4 pl-8 text-left text-sm">
              <Icon
                src="/swapicon.png"
                alt="Icon 0"
                className="my-auto h-8 w-8    fill-white"
              />
              <Icon
                src="/minus.png"
                alt="Icon 1"
                className="my-auto h-8 w-8    fill-white"
              />
            </div>
          </div>
        ) : (
          <>
            <div className="mb-4 flex w-full flex-col items-start">
              <div className="text-neutral-400">Pool</div>
              <div className="mt-3  flex items-center justify-start gap-5">
                <div className="flex flex-col items-start">
                  <div className="flex gap-3 md:pr-5">
                    <Icon
                      src="/solanabg.png"
                      alt="Icon 1"
                      className="aspect-square w-7"
                    />
                    <Icon
                      src="/solanabg.png"
                      alt="Icon 2"
                      className="aspect-square w-7"
                    />
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 whitespace-nowrap text-base font-medium leading-6 text-white">
                    <div className="grow text-sm">MENS-SOL</div>
                    <IoMdInformationCircleOutline />
                  </div>
                </div>
              </div>
            </div>

            {Prices.map((price, index) => (
              <Price key={index} index={index} price={price} />
            ))}
            <div className="my-4 flex w-full flex-col gap-2">
              <div className="text-neutral-500"> Timestamp</div>{' '}
              <div className="flex w-1/2 items-center justify-start gap-8 text-sm">
                HH:MM:SS <FaAngleDown />
              </div>
            </div>
          </>
        )}
      </div>
      {/* {!active && (
        <div className="px-auto flex w-full justify-center bg-[#402065]/50 p-2  text-sm underline">
          View Details
        </div>
      )} */}
    </section>
  )
}

export default MobileFeeBar
