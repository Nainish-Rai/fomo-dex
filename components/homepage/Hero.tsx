import React from 'react'
import PrimaryBtn from '../PrimaryBtn'
import SecondaryBtn from '../SecondaryBtn'

type Props = {}

function Hero({}: Props) {
  return (
    <>
      <div className="mt-16 text-center text-5xl font-bold  text-white md:mt-44 lg:text-7xl lg:leading-[100px]">
        <span className="font-extrabold">An Avenue for </span>
        <br />
        <span className="font-extrabold">Evolution of </span>
        <span className="text-accent font-extrabold">Defi</span>
      </div>{' '}
      <div className="mt-14 text-center text-2xl leading-8 text-white max-md:mt-10 max-md:max-w-full">
        Light-speed swaps. Next-level liquidity. Friction-less yield.
      </div>
      <div className="mt-12 flex justify-between gap-5 text-base font-medium capitalize leading-6 max-md:mt-10">
        <PrimaryBtn className="">Launch App</PrimaryBtn>
        <SecondaryBtn>Read Docs</SecondaryBtn>
      </div>
    </>
  )
}

export default Hero
