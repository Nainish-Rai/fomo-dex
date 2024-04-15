import * as React from 'react'

interface StatsCardProps {
  label: string
  value: string
}

const StatsCard: React.FC<StatsCardProps> = ({ label, value }) => {
  return (
    <section className="flex flex-col items-start rounded-3xl border border-solid border-stone-500/40 bg-[#141217] pb-7 pl-9 pr-16 pt-7">
      <h2 className="text-sm font-medium leading-6 text-neutral-400">
        {label}
      </h2>
      <p className="mt-2.5 text-3xl font-bold leading-6 text-white">{value}</p>
    </section>
  )
}

export default StatsCard
