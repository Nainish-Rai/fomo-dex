import React from 'react'

import Image from 'next/image'
import LiquidityBar from '../pools/LiquidityBar'
import PrimaryBtn from '../PrimaryBtn'
import { FaAngleDown } from 'react-icons/fa6'

import { TbArrowsUpDown } from 'react-icons/tb'
import { FiFilter } from 'react-icons/fi'
type Props = {}

function FeeContainer({}: Props) {
  const infoItems: InfoItemProps[] = [
    {
      label: 'User ID',
    },
    {
      label: 'Amount Traded',
    },
    {
      label: 'Commission Recieved',
    },
    {
      label: 'Transaction',
    },
    {
      label: 'Timestamp',
    },
  ]
  return (
    <div className="   h-full   min-h-[600px] w-full overflow-hidden rounded-2xl border border-border bg-cardbg px-4 pt-12 lg:px-8">
      {' '}
      <div className="flex w-full items-start justify-between gap-5 font-medium sm:max-w-full sm:flex-wrap ">
        <div className="flex flex-col">
          <h2 className="text-base leading-6 text-white">Fee Earned</h2>
          <p className="mt-3.5 text-sm leading-6 text-neutral-400">
            Claimable Fee: <span className="text-[#BFF400]"> $100,000</span>
          </p>
        </div>
        <div className="mt-3.5 flex justify-between gap-5 text-base">
          <PrimaryBtn className="px-8 py-2">Claim Amount</PrimaryBtn>
        </div>
      </div>
      {/*  */}
      <section className="mt-6 flex w-full items-start justify-between gap-5 rounded-xl bg-cardbg bg-opacity-50 px-20 py-6 lg:max-w-full lg:flex-wrap lg:px-5">
        <div className="mx-12 flex items-center gap-3.5 whitespace-nowrap text-sm font-medium leading-6 text-neutral-400">
          <div className="my-auto">Pool</div>
          <FaAngleDown />
        </div>
        {infoItems.map((item, index) => (
          <InfoItem key={index} label={item.label} />
        ))}
      </section>
      {/*  */}
      <div className="hide-scrollbar flex h-full scroll-my-8  flex-col overflow-scroll overflow-x-hidden lg:h-[48rem]">
        <LiquidityBar
          Prices={[
            '$100,000,000',
            '$100,000,000',
            '$100,000,000',
            '$100,000,000',
          ]}
        />
        <LiquidityBar
          Prices={[
            '$100,000,000',
            '$100,000,000',
            '$100,000,000',
            '$100,000,000',
          ]}
        />
        <LiquidityBar
          Prices={[
            '$100,000,000',
            '$100,000,000',
            '$100,000,000',
            '$100,000,000',
          ]}
        />
        <LiquidityBar
          Prices={[
            '$100,000,000',
            '$100,000,000',
            '$100,000,000',
            '$100,000,000',
          ]}
        />
        <LiquidityBar
          Prices={[
            '$100,000,000',
            '$100,000,000',
            '$100,000,000',
            '$100,000,000',
          ]}
        />
        <LiquidityBar
          Prices={[
            '$100,000,000',
            '$100,000,000',
            '$100,000,000',
            '$100,000,000',
          ]}
        />
        <LiquidityBar
          Prices={[
            '$100,000,000',
            '$100,000,000',
            '$100,000,000',
            '$100,000,000',
          ]}
        />
        <LiquidityBar
          Prices={[
            '$100,000,000',
            '$100,000,000',
            '$100,000,000',
            '$100,000,000',
          ]}
        />
      </div>
    </div>
  )
}

export default FeeContainer

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

    <TbArrowsUpDown style={{ color: 'white' }} />
    <FiFilter style={{ color: 'white' }} />
  </div>
)
