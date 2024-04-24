const FigureItem = ({
  title,
  stat,
  hidden,
}: {
  title: string
  stat: string
  hidden?: boolean
}) => {
  return (
    <div className=" mt-0 flex w-full flex-col items-center justify-center gap-8 px-4 lg:mt-12 lg:w-1/3 lg:flex-row ">
      <div className="my-2 flex  w-full flex-col items-center gap-2 self-stretch px-5 leading-[130%]  lg:my-5 lg:flex-row">
        <div className="grow text-3xl font-extrabold text-white  xl:text-4xl 2xl:text-5xl">
          {stat}
        </div>
        <div className="text-md lg:text-md  my-auto flex-auto capitalize text-white">
          {title}
        </div>
      </div>
      {!hidden && (
        <div className="mx-4 my-auto  hidden h-14 w-0.5 shrink-0 flex-col self-stretch border-2 border-solid border-white bg-white bg-opacity-60 opacity-50 lg:flex lg:flex-row" />
      )}
      {/* <hr className="w-48 border border-white lg:hidden " /> */}
    </div>
  )
}

export default FigureItem
