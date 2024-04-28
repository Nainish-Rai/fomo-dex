import SideBarItem from './dashboard/DashboardSideBarItem'
import Image from 'next/image'

type Props = {
  handleClick: () => void
}

function DashBoardHamburger({ handleClick }: Props) {
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
    <div className="fixed left-0  right-0 top-0 z-50  bg-black">
      <div className="w-full  flex-col  items-center whitespace-nowrap pb-12 text-base lg:flex">
        <div
          className="flex w-full justify-end px-6 py-2 text-2xl "
          onClick={handleClick}
        >
          X
        </div>
        <div className="  flex w-full max-w-full flex-col px-4  font-medium text-neutral-400">
          {SideBarItemInfo.map((item, index) => (
            <SideBarItem key={index} title={item.title} icon={item.icon} />
          ))}
        </div>
        <hr className="mt-6 w-full border border-white/10" />
        <div className=" mt-6 flex w-full max-w-full flex-col px-4 font-medium text-neutral-400">
          {SideBarItemInfo2.map((item, index) => (
            <SideBarItem key={index} title={item.title} icon={item.icon} />
          ))}
        </div>
        <hr className="mt-6 w-full border border-white/10" />
        <div className=" mt-6 flex w-full max-w-full flex-col px-4 font-medium text-neutral-400">
          {SideBarItemInfo3.map((item, index) => (
            <SideBarItem key={index} title={item.title} icon={item.icon} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default DashBoardHamburger
