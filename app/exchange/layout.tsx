import SideBar from '@/components/exchange/SideBar'

export default function ExchangeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className=" flex h-[93vh] overflow-hidden ">
      <SideBar />
      {children}
    </div>
  )
}
