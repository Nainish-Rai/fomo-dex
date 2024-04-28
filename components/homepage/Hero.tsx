import React from 'react'
import PrimaryBtn from '../PrimaryBtn'
import SecondaryBtn from '../SecondaryBtn'
import Link from 'next/link'

type Props = {}

function Hero({}: Props) {
  return (
    <>
      <div className="mt-32 text-center text-4xl font-bold text-white  md:mt-44  lg:text-7xl lg:leading-[100px]">
        <span className="font-extrabold">An Avenue for </span>
        <br />
        <span className="font-extrabold">Evolution of </span>
        <span className="font-extrabold text-accent">Defi</span>
      </div>{' '}
      <div className="mt-6 max-w-[120px] text-center  text-xs leading-8 text-white  max-md:mt-10 md:max-w-full lg:mt-14 lg:text-2xl">
        Light-speed swaps. Next-level liquidity. Friction-less yield.
      </div>
      <div className="mt-12 flex flex-col justify-between gap-5 text-base font-medium capitalize leading-6 max-md:mt-10 lg:flex-row">
        <Link href="/exchange">
          <PrimaryBtn className="">Launch App</PrimaryBtn>
        </Link>
        <SecondaryBtn>Read Docs</SecondaryBtn>
      </div>
    </>
  )
}

export default Hero
