import * as React from 'react'
import Image from 'next/image'

const SideBarItem = ({ title, icon }: { title: string; icon: any }) => {
  return (
    <div className=" my-1 flex cursor-pointer gap-3.5 rounded-xl p-3 px-6 text-neutral-400 duration-200 hover:bg-purple-900 hover:text-white">
      {icon}
      <div className="my-auto">{title}</div>
    </div>
  )
}

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
          src="/liquidityIcon.png"
          alt="Liquidity"
          width={28}
          height={28}
        />
      ),
    },
    {
      title: 'LP',
      icon: <Image src="/poolsIcon.png" alt="Pools" width={28} height={28} />,
    },
  ]
  const SideBarItemInfo2 = [
    {
      title: 'Docs',
      icon: <Image src="/docsIcon.png" alt="Docs" width={28} height={28} />,
    },
    {
      title: 'Settings',
      icon: <Image src="/docsIcon.png" alt="Docs" width={28} height={28} />,
    },
  ]
  return (
    <div className=" flex w-full max-w-60 flex-col items-center  whitespace-nowrap text-base">
      <div className=" mt-12 flex w-full max-w-full flex-col px-4 font-medium text-neutral-400">
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
    </div>
  )
}

export default DashboardSideBar
