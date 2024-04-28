import * as React from 'react'
import Image from 'next/image'

import SideBarItem from './DashboardSideBarItem'

function DashboardSideBar() {
  const SideBarItemInfo = [
    {
      title: 'Wallet Overview',
      icon: <Image src="/swapicon.png" alt="Swap" width={28} height={28} />,
    },
    {
      title: 'History',
      icon: (
        <Image
          src="/liquidityicon.png"
          alt="Liquidity"
          width={28}
          height={28}
        />
      ),
    },
    {
      title: 'LP',
      icon: <Image src="/poolsicon.png" alt="Pools" width={28} height={28} />,
    },
  ]
  const SideBarItemInfo2 = [
    {
      title: 'Generate Referral',
      icon: <Image src="/docsicon.png" alt="Docs" width={28} height={28} />,
    },
    {
      title: 'Referral Earning',
      icon: <Image src="/docsicon.png" alt="Docs" width={28} height={28} />,
    },
  ]
  const SideBarItemInfo3 = [
    {
      title: 'Help & Support',
      icon: <Image src="/docsicon.png" alt="Docs" width={28} height={28} />,
    },
  ]
  return (
    <div className=" mr-6 hidden w-full max-w-60 flex-col items-center whitespace-nowrap text-base lg:flex">
      <div className=" mt-12 flex w-full max-w-full flex-col px-4  font-medium text-neutral-400">
        {SideBarItemInfo.map((item, index) => (
          <SideBarItem key={index} title={item.title} icon={item.icon} />
        ))}
      </div>
      <hr className="mt-6 w-48 border border-white/10" />
      <div className=" mt-6 flex w-full max-w-full flex-col px-4 font-medium text-neutral-400">
        {SideBarItemInfo2.map((item, index) => (
          <SideBarItem key={index} title={item.title} icon={item.icon} />
        ))}
      </div>
      <hr className="mt-6 w-48 border border-white/10" />
      <div className=" mt-6 flex w-full max-w-full flex-col px-4 font-medium text-neutral-400">
        {SideBarItemInfo3.map((item, index) => (
          <SideBarItem key={index} title={item.title} icon={item.icon} />
        ))}
      </div>
    </div>
  )
}

export default DashboardSideBar
