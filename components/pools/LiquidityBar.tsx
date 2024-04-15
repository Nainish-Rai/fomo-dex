import React from 'react'
import Image from 'next/image'

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
    width={12}
    height={12}
    className={`shrink-0 border-none ${className}`}
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
  return (
    <section className="mt-6 flex w-full cursor-pointer  items-center justify-between gap-5 rounded-xl bg-[#260F41]/50 bg-opacity-50 px-4 py-3 text-white transition-all duration-200 hover:bg-purple-950 lg:max-w-full lg:flex-wrap lg:px-12 ">
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
              <Icon
                src="/info.png"
                alt="Icon 3"
                className="aspect-square h-3 w-3"
              />
            </div>
          </div>
        </div>
      </div>

      {Prices.map((price, index) => (
        <Price key={index} price={price} />
      ))}
      <div className="my-auto">20%</div>
      <Icon
        src="/downarr.png"
        alt="Icon 4"
        className="my-auto aspect-[1.75] w-3.5 border border-solid border-white stroke-white stroke-[1px]"
      />
    </section>
  )
}

export default LiquidityBar
