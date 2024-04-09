import React from 'react'

type Props = {}

function Stats({}: Props) {
  return (
    <div className="mx-auto mt-28 flex w-full  flex-col items-center justify-center gap-5  max-md:mt-10 max-md:max-w-full max-md:flex-wrap lg:flex-row">
      <div className="my-auto flex flex-col items-center gap-5 self-stretch leading-[130%] lg:flex-row">
        <div className="grow text-6xl font-extrabold text-white max-md:text-4xl">
          3800+
        </div>
        <div className="my-auto flex-auto bg-clip-text text-xl capitalize text-white">
          User Active
        </div>
      </div>
      <div className="my-auto flex h-10 w-0.5 shrink-0 flex-col self-stretch border-2 border-solid border-white border-opacity-60 bg-white bg-opacity-60 lg:flex-row" />
      <div className="flex flex-col items-center gap-5 self-stretch whitespace-nowrap leading-[130%] text-white lg:flex-row">
        <div className="grow text-6xl font-extrabold leading-[78px] max-md:text-4xl">
          $1M+
        </div>
        <div className="my-auto flex-auto text-xl capitalize">
          Total Trading Volume{' '}
        </div>
      </div>
      <div className="my-auto h-10 w-0.5 shrink-0 self-stretch border-2 border-solid border-white border-opacity-60 bg-white bg-opacity-60" />
      <div className="flex flex-col items-center gap-5 self-stretch whitespace-nowrap leading-[130%] lg:flex-row">
        <div className="flex-auto  text-6xl font-extrabold text-white max-md:text-4xl">
          $230M+
        </div>
        <div className="my-auto flex-auto bg-clip-text text-xl capitalize text-white">
          Transaction
        </div>
      </div>
    </div>
  )
}

export default Stats
