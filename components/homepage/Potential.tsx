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
      <div className="mt-16 text-center text-5xl font-bold  text-white md:mt-44 lg:text-5xl lg:leading-[100px]">
        <span className="font-extrabold">
          Unlock the Full Potential of Defi with
        </span>
        <span className="text-accent font-extrabold"> FOMO</span>
      </div>{' '}
      <div className="mt-6 text-center text-xl leading-8 text-white max-md:mt-10 max-md:max-w-full">
        Experience the power of community ownership, global governance, and
        explore infinite use cases with the FOMO ecosystem
      </div>
      <div className="mt-12 flex justify-between gap-5 text-base font-medium capitalize leading-6 max-md:mt-10">
        <PrimaryBtn className="">
          <div className="px-2">Buy FOMO</div>
        </PrimaryBtn>
        <SecondaryBtn>Learn More</SecondaryBtn>
      </div>
      {/* Ecosystem */}
      <div className="mt-48 flex w-full max-w-6xl flex-col items-center justify-between lg:flex-row">
        <div className="flex flex-col text-white">
          <h2 className="text-2xl font-extrabold">Ecosystem</h2>
          <div className=" flex flex-col items-start  text-lg  max-md:pl-5">
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
            className="h-full w-full"
          />
        </div>
        <div className="flex flex-col text-white">
          <h2 className="text-right text-2xl font-extrabold">Partners</h2>
          <div className=" flex flex-col items-start pl-11 text-lg">
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
