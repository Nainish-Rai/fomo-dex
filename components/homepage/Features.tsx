import React from 'react'
import Image from 'next/image'

type Props = {}

function Features({}: Props) {
  return (
    <div>
      {' '}
      <div className="mt-44 text-center text-6xl font-extrabold leading-[100px] text-lime-400 max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[74px]">
        Features of <span className="text-lime-400">FOMO</span>
      </div>
      <div className="mt-16 text-center text-xl leading-7 text-white max-md:mt-10 max-md:max-w-full">
        Experience the power of community ownership, global governance, and
        explore infinite use cases with the FOMO ecosystem
      </div>
      <div className="mt-20 w-full max-w-[1430px] px-0.5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex w-[55%] flex-col max-md:ml-0 max-md:w-full">
            <div className="my-auto h-[493px] w-[655px] max-w-full shrink-0 self-stretch max-md:mt-10" />
          </div>
          <div className="ml-5 flex w-[45%] flex-col max-md:ml-0 max-md:w-full">
            <Image
              src="/bg.png"
              alt=""
              width={655}
              height={668}
              className="aspect-[0.98] w-full grow max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
