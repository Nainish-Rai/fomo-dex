import React from 'react'
import Image from 'next/image'
import FeatureCard from './FeatureCard'
import FeatureRow from './FeatureRow'

type Props = {}

function Features({}: Props) {
  return (
    <div className="mx-auto w-full max-w-7xl">
      {' '}
      <div className="mt-44 text-center text-3xl font-extrabold leading-[100px] text-white max-md:mt-10  max-md:max-w-full max-md:leading-[74px] md:text-4xl lg:text-4xl xl:text-6xl ">
        Features of <span className="text-lime-400">FOMO</span>
      </div>
      <div className="mt-16 leading-7 text-white max-md:mt-10 max-md:max-w-full md:text-center lg:text-lg 2xl:text-xl">
        Experience the power of community ownership, global governance, and
        explore infinite use cases with the FOMO ecosystem
      </div>
      <div className="mt-20 w-full max-w-[1430px] px-0.5 max-md:mt-10 max-md:max-w-full">
        <div className="flex  items-center gap-5 max-lg:flex-col-reverse max-md:gap-0">
          <div className="flex w-[55%] flex-col max-md:ml-0 max-md:w-full">
            <FeatureCard
              title={'Real Time Fee Distribution Liquidity Provider'}
              paragraph={
                'Experience the power of community ownership, global governance, and explore infinite use cases with the FOMO ecosystem'
              }
            />
          </div>
          <div className="ml-5 flex w-[45%] flex-col max-md:ml-0 max-md:w-full">
            <Image
              src="/fomo1.png"
              alt=""
              width={655}
              height={668}
              className="aspect-[0.98] w-full grow max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
        <div className="flex flex-row-reverse items-center gap-5 max-lg:flex-col-reverse max-md:gap-0">
          <div className="flex w-[55%] flex-col max-md:ml-0 max-md:w-full">
            <FeatureCard
              title={'Referral Mechanism'}
              paragraph={
                'Experience the power of community ownership, global governance, and explore infinite use cases with the FOMO ecosystem'
              }
            />
          </div>
          <div className="ml-5 flex w-[45%] flex-col max-md:ml-0 max-md:w-full">
            <Image
              src="/fomo2.png"
              alt=""
              width={800}
              height={668}
              className="aspect-[0.98] w-full grow max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
      <FeatureRow />
    </div>
  )
}

export default Features
