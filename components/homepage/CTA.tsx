import React from 'react'
import PrimaryBtn from '../PrimaryBtn'

type Props = {}

function CTA({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center">
      {' '}
      <div className="mt-16 text-center text-2xl font-bold  text-white md:mt-44 lg:text-5xl lg:leading-[100px]">
        Let&apos;s try our{' '}
        <span className="font-extrabold text-accent"> Service Now</span>
      </div>{' '}
      <div className="mt-4 text-center text-sm text-white max-md:max-w-full lg:mt-10 lg:text-xl lg:leading-8">
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </div>
      <PrimaryBtn className="mt-8">Get Started</PrimaryBtn>
    </div>
  )
}

export default CTA
