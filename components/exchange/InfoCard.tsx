import React from 'react'
import Image from 'next/image'
import { IoMdInformationCircleOutline } from 'react-icons/io'
import { FaAngleDown } from 'react-icons/fa6'

type Props = {}

function InfoCard({}: Props) {
  return (
    <div className="mt-5 rounded-3xl border border-solid border-stone-500 px-7 py-6 text-white">
      <div className="flex gap-5">
        <div className="flex w-full flex-col">
          <div className="flex w-full grow flex-col text-sm leading-4 text-white">
            <div className="flex w-full justify-between">
              <div className="flex items-center gap-2">
                Swapping Through <IoMdInformationCircleOutline />
              </div>
              <div className="text-base font-semibold leading-4 text-white">
                Raydiuum Pool
              </div>
            </div>
            <div className="mt-3 flex w-full items-center justify-between">
              <div className=" flex items-center gap-2">
                Minimum Received <IoMdInformationCircleOutline />
              </div>
              <div className="text-base font-semibold leading-4 text-white">
                100 RAY
              </div>
            </div>
            <div className="mt-3 flex w-full items-center justify-between">
              <div className=" flex items-center gap-2">
                Price Impact <IoMdInformationCircleOutline />
              </div>
              <div className="text-base font-semibold leading-4 text-white">
                {'<'} 1%
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2">
              More Information
              <FaAngleDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoCard
