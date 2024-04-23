import React from 'react'
import FigureItem from './FigureItem'

type Props = {}

function Stats({}: Props) {
  return (
    <div className="mx-auto mt-28 flex w-full max-w-7xl  flex-col items-center justify-center  gap-5 max-md:flex-wrap md:mt-28 lg:flex-row">
      <FigureItem title=" User Active" stat="3800+" />
      <FigureItem title="Total Trading Volume" stat="$1M+" />
      <FigureItem title="Transaction" stat="$230M+" hidden={true} />
    </div>
  )
}

export default Stats
