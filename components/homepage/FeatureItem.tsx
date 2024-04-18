import Image from 'next/image'
interface FeatureItemProps {
  imageSrc: string
  title: string
  description: string
}

function FeatureItem({ imageSrc, title, description }: FeatureItemProps) {
  return (
    <div className="mx-auto my-2 mb-16 mt-8 flex h-14 w-full max-w-md items-center justify-center gap-5 px-2  lg:h-16  lg:w-1/3">
      <div className="relative h-full w-20 lg:w-24">
        <Image
          src={imageSrc}
          alt=""
          fill
          className="h-full w-auto  fill-white"
        />
      </div>
      <div>
        <h3 className="text-lg font-bold 2xl:text-xl">{title}</h3>
        <p className="text-md mt-1">{description}</p>
      </div>
    </div>
  )
}
export default FeatureItem
