import React from 'react'
import { FigureItem } from './Figures'

type Props = {}

function Stats({}: Props) {
  return (
    <div className="mx-auto mt-28 flex w-full flex-col  items-center justify-center gap-5  max-md:max-w-full max-md:flex-wrap md:mt-28 lg:flex-row">
      <FigureItem title=" User Active" stat="3800+" />
      <FigureItem title="Total Trading Volume" stat="$1M+" />
      <FigureItem title="Transaction" stat="$230M+" />
    </div>
  )
}

export default Stats
