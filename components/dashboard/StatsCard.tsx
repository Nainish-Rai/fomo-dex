import * as React from 'react'

interface StatsCardProps {
  label: string
  value: string
}

const StatsCard: React.FC<StatsCardProps> = ({ label, value }) => {
  return (
    <section className="flex h-24 w-1/2 flex-col items-start justify-center rounded-3xl border border-solid border-border bg-cardbg p-4 px-6 lg:w-64">
      <h2 className="text-sm font-medium leading-6 text-neutral-400">
        {label}
      </h2>
      <p className="mt-2.5 text-3xl font-bold leading-6 text-white">{value}</p>
    </section>
  )
}

export default StatsCard
