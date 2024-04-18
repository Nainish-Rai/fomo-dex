import React from 'react'
import PrimaryBtn from '../PrimaryBtn'

type Props = {}

function CTA({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center">
      {' '}
      <div className="mt-16 text-center text-5xl font-bold  text-white md:mt-44 lg:text-6xl lg:leading-[100px]">
        Let&apos;s try our{' '}
        <span className="font-extrabold text-lime-400"> Service Now</span>
      </div>{' '}
      <div className="mt-10 text-center text-xl leading-8 text-white max-md:mt-10 max-md:max-w-full">
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </div>
      <PrimaryBtn className="mt-16">Get Started</PrimaryBtn>
    </div>
  )
}

export default CTA
