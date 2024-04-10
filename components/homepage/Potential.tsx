import * as React from 'react'
import PrimaryBtn from '../PrimaryBtn'
import SecondaryBtn from '../SecondaryBtn'
import Image from 'next/image'

interface EcosystemItemProps {
  title: string
}

const EcosystemItem: React.FC<EcosystemItemProps> = ({ title }) => {
  return <div className="mt-7">{title}</div>
}

interface PartnerItemProps {
  name: string
}

const PartnerItem: React.FC<PartnerItemProps> = ({ name }) => {
  return <div className="mt-6">{name}</div>
}

const ecosystemItems = [
  'Governance',
  'Governance',
  'Governance',
  'Governance',
  'Governance',
  'Governance',
]

const partnerItems = [
  'Appolo X',
  'Appolo X',
  'Appolo X',
  'Appolo X',
  'Appolo X',
  'Appolo X',
]

function Potential() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-16 text-center text-5xl font-bold  text-white md:mt-44 lg:text-6xl lg:leading-[100px]">
        <span className="font-extrabold">
          Unlock the Full Potential of Defi with
        </span>
        <span className="font-extrabold text-lime-400"> FOMO</span>
      </div>{' '}
      <div className="mt-10 text-center text-xl leading-8 text-white max-md:mt-10 max-md:max-w-full">
        Experience the power of community ownership, global governance, and
        explore infinite use cases with the FOMO ecosystem
      </div>
      <div className="mt-12 flex justify-between gap-5 text-base font-medium capitalize leading-6 max-md:mt-10">
        <PrimaryBtn>Buy FOMO</PrimaryBtn>
        <SecondaryBtn>Learn More</SecondaryBtn>
      </div>
      {/* Ecosystem */}
      <div className="max-w- mx-auto mt-28 w-full   max-md:mt-10">
        <div className=" flex items-center gap-5 max-md:flex-col max-md:gap-0">
          <div className=" flex w-[65%] flex-col max-md:ml-0 max-md:w-full">
            <div className="px-px max-md:mt-10 max-md:max-w-full ">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 ">
                <div className=" flex w-3/12 flex-col pr-1 max-md:ml-0 max-md:w-full">
                  <div className=" flex grow flex-col whitespace-nowrap text-xl text-white max-md:mt-8">
                    <h2 className=" text-3xl font-extrabold">Ecosystem</h2>
                    {ecosystemItems.map((item, index) => (
                      <EcosystemItem key={index} title={item} />
                    ))}
                  </div>
                </div>
                <div className="ml-5 flex w-[39%] flex-col max-md:ml-0 max-md:w-full">
                  <div className="flex grow gap-0 max-md:mt-9">
                    <div className="hidden h-[296px] w-px shrink-0 border border-solid border-white border-opacity-60 bg-white bg-opacity-60 lg:flex" />
                    <div className="mt-36 hidden h-px flex-auto self-start border border-solid border-white border-opacity-60 bg-white bg-opacity-60 max-md:mt-10 lg:flex" />
                  </div>
                </div>
                <div className="-mt-10 ml-5 flex w-[36%] flex-col max-md:ml-0 max-md:w-full">
                  <div className="relative my-auto flex aspect-[1.1] flex-col items-center self-stretch overflow-hidden px-6 pb-3 pt-1 max-md:mt-10 max-md:pl-5">
                    <Image
                      loading="lazy"
                      src="/potential.png"
                      alt=""
                      className=" aspect-[1.02] w-24 xl:w-[197px]"
                      width={197}
                      height={197}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-5 flex w-[50%] flex-col max-md:ml-0 max-md:w-full">
            <div className="flex grow justify-between gap-5 max-md:mt-10">
              <div className="flex gap-0">
                <div className="my-36 hidden h-px w-[221px] shrink-0 border border-solid border-white border-opacity-60 bg-white bg-opacity-60 lg:flex" />
                <div className="hidden h-[296px] w-px shrink-0 border border-solid border-white border-opacity-60 bg-white bg-opacity-60 lg:flex" />
              </div>
              <div className="flex flex-col text-white">
                <h2 className="text-3xl font-extrabold">Partners</h2>
                <div className="mt-10 flex flex-col items-start pl-11 text-xl max-md:mt-10 max-md:pl-5">
                  {partnerItems.map((item, index) => (
                    <PartnerItem key={index} name={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Potential
