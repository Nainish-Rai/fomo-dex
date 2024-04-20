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
}

const Price: React.FC<PriceProps> = ({ price }) => (
  <div className="flex-auto">{price}</div>
)

// const prices = ['$100,000,000', '$100,000,000', '$100,000,000']

function LiquidityBar({ Prices }: Props) {
  const [active, setActive] = useState(false)
  return (
    <section
      onClick={() => setActive(!active)}
      className="mt-6 flex w-full cursor-pointer   items-center justify-between gap-5 rounded-xl bg-[#260F41]/50 bg-opacity-50 px-4 py-3 text-white transition-all duration-200 hover:bg-purple-950 lg:max-w-full lg:flex-wrap lg:px-12 "
    >
      {active ? (
        <div className="flex w-full items-center">
          <div className="flex flex-auto flex-col gap-2 font-medium text-textsecondary">
            Your Liquidity
            <span className="font-semibold text-white">$100,000,000 </span>
            0LP
          </div>
          <div className="flex flex-auto flex-col gap-2 font-medium text-textsecondary">
            Assets Pooled
            <span className="font-semibold text-white">0.8 XYZ </span>
            <span className="font-semibold text-white">0 LP </span>
          </div>
          <div className="flex flex-auto flex-col gap-2 font-medium text-textsecondary">
            Your Share
            <span className="font-semibold text-white">0%</span>
            {/* <span className="font-semibold text-white">0%</span> */}
          </div>
          <div className="px-8">
            <PrimaryBtn className="w-full">Add Liquidity</PrimaryBtn>
          </div>
          <div className="flex gap-2">
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
          <div className="flex flex-auto  justify-start">
            <div className="flex grow items-center  gap-5">
              <Icon
                src="/star.png"
                alt="Icon 0"
                className="my-auto  w-4 fill-white"
              />
              <div className="flex flex-col items-center">
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
                  <div className="grow">MENS-SOL</div>
                  <IoMdInformationCircleOutline />
                </div>
              </div>
            </div>
          </div>

          {Prices.map((price, index) => (
            <Price key={index} price={price} />
          ))}
          <div className="my-auto">20%</div>
          <FaAngleDown />
        </>
      )}
    </section>
  )
}

export default LiquidityBar
