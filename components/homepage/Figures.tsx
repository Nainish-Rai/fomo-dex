import React from 'react'
import FigureItem from './FigureItem'

type Props = {}

function Figures({}: Props) {
  return (
    <div>
      {' '}
      <div className="mt-16 text-center text-5xl font-bold  text-white md:mt-44 lg:text-5xl lg:leading-[100px]">
        <span className="text-accent font-extrabold"> FOMO</span> Figures
      </div>{' '}
      <div className="flex-w mx-auto mt-28 flex w-full max-w-7xl flex-col flex-wrap  items-center justify-center   max-md:max-w-full max-md:flex-wrap md:mt-12 lg:flex-row">
        <FigureItem title="User Active" stat="3800+" />
        <FigureItem title="Total Trading Volume" stat="$1M+" />
        <FigureItem title="Transaction" stat="$230M+" hidden={true} />
        <FigureItem title="Market Cap" stat="$230M+" />
        <FigureItem title="Total Liquidity" stat="$230M+" hidden={true} />
      </div>
    </div>
  )
}

export default Figures
