import Image from 'next/image'
interface FeatureItemProps {
  imageSrc: string
  title: string
  description: string
}

function FeatureItem({ imageSrc, title, description }: FeatureItemProps) {
  return (
    <div className=" my-2 mb-16 mt-8 flex h-14 w-full max-w-md items-center justify-center gap-9 px-2 py-0  lg:h-16  lg:w-1/3">
      <div className="relative h-full w-16 ">
        <Image
          src={imageSrc}
          alt=""
          fill
          className="h-full w-auto  fill-white"
        />
      </div>
      <div className="w-64">
        <h3 className="text-lg font-bold 2xl:text-lg">{title}</h3>
        <p className="mt-1 text-sm">{description}</p>
      </div>
    </div>
  )
}
export default FeatureItem
