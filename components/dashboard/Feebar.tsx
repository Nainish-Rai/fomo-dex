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
  <div className="flex w-1/6 items-center justify-center text-sm">{price}</div>
)

// const prices = ['$100,000,000', '$100,000,000', '$100,000,000']

function FeeBar({ Prices }: Props) {
  const [active, setActive] = useState(false)
  return (
    <section
      onClick={() => setActive(!active)}
      className="mt-2 flex w-full cursor-pointer   items-center justify-center  gap-5 rounded-xl bg-[#260F41]/50 bg-opacity-50 px-4 py-3 text-white transition-all duration-200 hover:bg-purple-950 lg:max-w-full lg:flex-wrap lg:px-4 "
    >
      <div className="m-0 flex w-full justify-center p-0">
        <div className="flex w-1/6 items-center  justify-center gap-5">
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
              <div className="grow text-sm">MENS-SOL</div>
              <IoMdInformationCircleOutline />
            </div>
          </div>
        </div>

        {Prices.map((price, index) => (
          <Price key={index} price={price} />
        ))}
        <div className="flex w-1/6 items-center justify-center gap-8 text-sm">
          HH:MM:SS <FaAngleDown />
        </div>
      </div>
    </section>
  )
}

export default FeeBar
