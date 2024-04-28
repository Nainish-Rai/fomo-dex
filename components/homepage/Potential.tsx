import * as React from 'react'
import PrimaryBtn from '../PrimaryBtn'
import SecondaryBtn from '../SecondaryBtn'
import Image from 'next/image'

interface EcosystemItemProps {
  title: string
}

const EcosystemItem: React.FC<EcosystemItemProps> = ({ title }) => {
  return <div className="mt-4">{title}</div>
}

interface PartnerItemProps {
  name: string
}

const PartnerItem: React.FC<PartnerItemProps> = ({ name }) => {
  return <div className="mt-4">{name}</div>
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
      <div className="mt-16 text-center text-3xl font-bold  text-white md:mt-44 lg:text-5xl lg:leading-[100px]">
        <span className="font-extrabold">
          Unlock the Full Potential of Defi with
        </span>
        <span className="font-extrabold text-accent"> FOMO</span>
      </div>{' '}
      <div className="mt-6 text-center text-sm text-white max-md:mt-10 max-md:max-w-full lg:text-xl lg:leading-8">
        Experience the power of community ownership, global governance, and
        explore infinite use cases with the FOMO ecosystem
      </div>
      <div className="mt-12 flex flex-col justify-between gap-5 text-base font-medium capitalize leading-6 max-md:mt-10 lg:flex-row">
        <PrimaryBtn className="">
          <div className="px-2">Buy FOMO</div>
        </PrimaryBtn>
        <SecondaryBtn>Learn More</SecondaryBtn>
      </div>
      {/* Ecosystem */}
      <div className="mt-48 flex w-full max-w-6xl flex-row items-center justify-between gap-4 lg:flex-row">
        <div className="flex flex-col text-xs text-white">
          <h2 className="text-lg font-extrabold lg:text-2xl">Ecosystem</h2>
          <div className=" flex flex-col items-start  text-sm    md:text-lg">
            {ecosystemItems.map((title, index) => (
              <EcosystemItem key={index} title={title} />
            ))}
          </div>
        </div>
        <div>
          <Image
            src="/potentialgroup.png"
            alt=""
            width={1430}
            height={800}
            className="hidden h-full w-full md:block"
          />
          <Image
            src="/potentialmobile.png"
            width={240}
            height={224}
            alt=""
            className="mt-12 h-[13rem] w-full md:hidden"
          />
        </div>
        <div className="flex flex-col text-white">
          <h2 className="-ml-2 text-left text-lg font-extrabold lg:ml-0 lg:text-right lg:text-2xl">
            Partners
          </h2>
          <div className=" flex flex-col items-end text-sm lg:items-start lg:pl-11 lg:text-lg">
            {partnerItems.map((item, index) => (
              <PartnerItem key={index} name={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Potential
