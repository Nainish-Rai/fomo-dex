import * as React from 'react'

interface StatsCardProps {
  label: string
  value: string
}

const StatsCard: React.FC<StatsCardProps> = ({ label, value }) => {
  return (
    <section className="flex h-24 w-1/2 p-1 lg:w-64">
      <div className="flex w-full flex-col items-start justify-center rounded-2xl border border-solid border-border bg-cardbg p-3 px-4 lg:p-4 lg:px-6 ">
        <h2 className="text-[0.7rem] font-medium leading-6 text-neutral-400 lg:text-sm">
          {label}
        </h2>
        <p className="mt-1.5 text-base font-bold leading-6 text-white lg:mt-2.5 lg:text-3xl">
          {value}
        </p>
      </div>
    </section>
  )
}

export default StatsCard
