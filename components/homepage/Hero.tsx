import React from 'react'
import PrimaryBtn from '../PrimaryBtn'
import SecondaryBtn from '../SecondaryBtn'

type Props = {}

function Hero({}: Props) {
  return (
    <>
      <div className="mt-44 text-center text-7xl font-bold leading-[100px] text-lime-400 max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[56px]">
        <span className="font-extrabold">An Avenue for </span>
        <br />
        <span className="font-extrabold">Evolution of </span>
        <span className="font-extrabold text-lime-400">Defi</span>
      </div>{' '}
      <div className="mt-14 text-2xl leading-7 text-white max-md:mt-10 max-md:max-w-full">
        Light-speed swaps. Next-level liquidity. Friction-less yield.
      </div>
      <div className="mt-12 flex justify-between gap-5 text-base font-medium capitalize leading-6 max-md:mt-10">
        <PrimaryBtn>Launch App</PrimaryBtn>
        <SecondaryBtn>Read Docs</SecondaryBtn>
      </div>
    </>
  )
}

export default Hero
