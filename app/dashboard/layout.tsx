import DashboardSideBar from '@/components/dashboard/dashboardSideBar'

export default function ExchangeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className=" flex h-screen overflow-hidden">
      <DashboardSideBar />
      {children}
    </div>
  )
}
