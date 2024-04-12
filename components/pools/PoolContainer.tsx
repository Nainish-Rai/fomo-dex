import React from 'react'

import Image from 'next/image'
import LiquidityBar from './LiquidityBar'

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
    <div className="  w-full   rounded-2xl bg-[#141217] px-4 pt-12 lg:px-8">
      {' '}
      <div className="flex w-full items-start justify-between gap-5 font-medium sm:max-w-full sm:flex-wrap ">
        <div className="flex flex-col">
          <h2 className="text-base leading-6 text-white">Liquidity Pools</h2>
          <p className="mt-3.5 text-sm leading-6 text-neutral-400">
            Earn yield on trading fees by providing liquidity
          </p>
        </div>
        <div className="mt-3.5 flex justify-between gap-5 text-base">
          <div className="my-auto flex gap-4 leading-5 text-white">
            <span className="flex-auto">
              Time Basis: <span className="text-white">24HR</span>
            </span>
            <IconButton src="/downarr.png" alt="Icon" />
          </div>
          {/* Seach BTN */}
          <button className="flex items-center gap-3 whitespace-nowrap rounded-3xl border border-solid border-stone-500 bg-neutral-900 px-5 py-2.5 text-neutral-400">
            <Image
              loading="lazy"
              src="/search.png"
              alt="search"
              className="aspect-square w-5 shrink-0  "
              width={22}
              height={22}
            />
            <span className="my-auto flex-auto">Search</span>
          </button>
        </div>
      </div>
      {/*  */}
      <section className="mt-6 flex w-full items-start justify-between gap-5 rounded-xl bg-zinc-800 bg-opacity-50 px-20 py-6 lg:max-w-full lg:flex-wrap lg:px-5">
        <div className="mx-12 flex items-center gap-3.5 whitespace-nowrap text-sm font-medium leading-6 text-neutral-400">
          <div className="my-auto">Pool</div>
          <CurrencyImage
            src="/updownarr.png"
            className="stroke-opacity-50 aspect-[0.7] h-4 w-4 shrink-0"
          />
        </div>
        {infoItems.map((item, index) => (
          <InfoItem key={index} label={item.label} />
        ))}
      </section>
      {/*  */}
      <div className="hide-scrollbar flex h-[80%] scroll-my-8 flex-col overflow-scroll overflow-x-hidden">
        <LiquidityBar />
        <LiquidityBar />
        <LiquidityBar />
        <LiquidityBar />
        <LiquidityBar />
        <LiquidityBar />
        <LiquidityBar />
        <LiquidityBar />
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
  <div className="flex items-center gap-2">
    <div className="my-auto grow text-sm font-medium leading-6 text-neutral-400">
      {label}
    </div>

    <CurrencyImage
      src="/updownarr.png"
      className={` aspect-[0.7] h-4 w-5 shrink-0`}
    />
    <CurrencyImage
      src="/filter.png"
      className={` aspect-[0.7] h-4 w-4 shrink-0`}
    />
  </div>
)
