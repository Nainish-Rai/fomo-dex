import React from 'react'

import Image from 'next/image'
import LiquidityBar from './LiquidityBar'
import { FaAngleDown, FaFilter } from 'react-icons/fa6'
import { FiFilter } from 'react-icons/fi'
import { TbArrowsUpDown } from 'react-icons/tb'

type Props = {}

function PoolContainer({}: Props) {
  const infoItems: InfoItemProps[] = [
    {
      label: 'Liquidity',
    },
    {
      label: 'Volume 24H',
    },
    {
      label: 'Fees 24H',
    },
    {
      label: 'APR 24H',
    },
  ]
  return (
    <div className="  mb-16 max-h-[900px] w-full   overflow-hidden rounded-2xl border border-border bg-cardbg px-4 pt-12 lg:px-8">
      {' '}
      <div className="flex w-full flex-col items-start justify-between gap-5 font-medium sm:max-w-full sm:flex-wrap lg:flex-row ">
        <div className="flex flex-col">
          <div className="flex lg:block">
            <h2 className="text-base leading-6 text-white">Liquidity Pools</h2>{' '}
          </div>
          <p className="mt-3.5 text-sm leading-6 text-neutral-400">
            Earn yield on trading fees by providing liquidity
          </p>
        </div>

        <div className="mt-3.5 flex w-full justify-between gap-5 text-base lg:w-fit">
          <div className="my-auto hidden gap-4 leading-5 text-white lg:flex">
            <span className="flex-auto">
              Time Basis: <span className="text-white">24HR</span>
            </span>
            <FaAngleDown />
          </div>
          {/* Seach BTN */}
          <button className="flex w-full items-center gap-3 whitespace-nowrap rounded-3xl border border-solid border-stone-500 bg-neutral-900 px-4 py-1.5 pr-14 text-neutral-400 lg:w-fit">
            <Image
              loading="lazy"
              src="/search.png"
              alt="search"
              className="aspect-square w-4 shrink-0  "
              width={22}
              height={22}
            />
            <span className="my-auto flex-auto text-sm">Search</span>
          </button>
        </div>
      </div>
      {/*  */}
      <section className="mt-6 hidden w-full items-center justify-between rounded-xl  bg-zinc-800 bg-opacity-50 px-20 py-6 lg:flex lg:max-w-full lg:flex-wrap lg:px-5">
        <div className=" flex w-1/5 items-center justify-center gap-5 whitespace-nowrap text-sm font-medium leading-6 text-neutral-400">
          <div className="my-auto ">Pool</div>
          <TbArrowsUpDown />
        </div>
        {infoItems.map((item, index) => (
          <InfoItem key={index} label={item.label} />
        ))}
      </section>
      {/*  */}
      <div className="hide-scrollbar mt-8 flex h-full scroll-my-8 flex-col  overflow-scroll overflow-x-hidden lg:mt-0 lg:h-[48rem]">
        <LiquidityBar
          Prices={['$100,000,000', '$100,000,000', '$100,000,000']}
        />
        <LiquidityBar
          Prices={['$100,000,000', '$100,000,000', '$100,000,000']}
        />
        <LiquidityBar
          Prices={['$100,000,000', '$100,000,000', '$100,000,000']}
        />
        <LiquidityBar
          Prices={['$100,000,000', '$100,000,000', '$100,000,000']}
        />
        <LiquidityBar
          Prices={['$100,000,000', '$100,000,000', '$100,000,000']}
        />
        <LiquidityBar
          Prices={['$100,000,000', '$100,000,000', '$100,000,000']}
        />
        <LiquidityBar
          Prices={['$100,000,000', '$100,000,000', '$100,000,000']}
        />
        <LiquidityBar
          Prices={['$100,000,000', '$100,000,000', '$100,000,000']}
        />
        <LiquidityBar
          Prices={['$100,000,000', '$100,000,000', '$100,000,000']}
        />
        <LiquidityBar
          Prices={['$100,000,000', '$100,000,000', '$100,000,000']}
        />
      </div>
    </div>
  )
}

export default PoolContainer

interface IconButtonProps {
  src: string
  alt: string
}

const IconButton: React.FC<IconButtonProps> = ({ src, alt }) => {
  return (
    <Image
      loading="lazy"
      src={src}
      alt={alt}
      className="my-auto aspect-[2] h-2 w-3 shrink-0 "
      width={2}
      height={1}
    />
  )
}

type CurrencyImageProps = {
  src: string
  className?: string
}

const CurrencyImage: React.FC<CurrencyImageProps> = ({ src, className }) => (
  <Image src={src} alt="" className={className} width={12} height={12} />
)

type InfoItemProps = {
  label: string
}

const InfoItem: React.FC<InfoItemProps> = ({ label }) => (
  <div className="flex w-1/5 items-center justify-center gap-5 ">
    <div className="my-auto text-sm font-medium leading-6 text-neutral-400">
      {label}
    </div>
    <div className="flex">
      <TbArrowsUpDown style={{ color: '#a3a3a3' }} />
      <FiFilter style={{ color: '#a3a3a3' }} />
    </div>
  </div>
)
