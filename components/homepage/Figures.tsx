import React from 'react'

type Props = {}

export const FigureItem = ({
  title,
  stat,
}: {
  title: string
  stat: string
}) => {
  return (
    <div className=" flex w-full flex-col items-center justify-center gap-2 lg:w-1/3 lg:flex-row ">
      <div className="my-5 flex w-full flex-col items-center gap-2 self-stretch px-5  leading-[130%] lg:flex-row">
        <div className="grow text-3xl font-extrabold text-white  xl:text-4xl 2xl:text-5xl">
          {stat}
        </div>
        <div className="text-md lg:text-md  my-auto flex-auto capitalize text-white">
          {title}
        </div>
      </div>
      <div className="mx-4 my-auto hidden h-14 w-0.5 shrink-0 flex-col self-stretch border-2 border-solid border-white bg-white bg-opacity-60 opacity-50 lg:flex lg:flex-row" />
      <hr className="w-48 border border-white lg:hidden " />
    </div>
  )
}

function Figures({}: Props) {
  return (
    <div>
      {' '}
      <div className="mt-16 text-center text-5xl font-bold  text-white md:mt-44 lg:text-6xl lg:leading-[100px]">
        <span className="font-extrabold text-lime-400"> FOMO</span> Figures
      </div>{' '}
      <div className="mt-10 text-center text-xl leading-8 text-white max-md:mt-10 max-md:max-w-full">
        Experience the power of community ownership, global governance, and
        explore infinite use cases with the FOMO ecosystem
      </div>
      <div className="flex-w mx-auto mt-28 flex w-full flex-col flex-wrap  items-center justify-center gap-5  max-md:max-w-full max-md:flex-wrap md:mt-28 lg:flex-row">
        <FigureItem title="User Active" stat="3800+" />
        <FigureItem title="Total Trading Volume" stat="$1M+" />
        <FigureItem title="Transaction" stat="$230M+" />
        <FigureItem title="Market Cap" stat="$230M+" />
        <FigureItem title="Total Liquidity" stat="$230M+" />
      </div>
    </div>
  )
}

export default Figures
