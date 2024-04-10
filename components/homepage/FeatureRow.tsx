import * as React from 'react'
import Image from 'next/image'

interface FeatureItemProps {
  imageSrc: string
  title: string
  description: string
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  imageSrc,
  title,
  description,
}) => (
  <div className="mx-auto my-2 mb-16 mt-8 flex h-14 w-full max-w-md items-center justify-center gap-5 px-2  lg:h-16  lg:w-1/3">
    <div className="relative h-full w-20 lg:w-24">
      <Image src={imageSrc} alt="" fill className="h-full w-auto  fill-white" />
    </div>
    <div>
      <h3 className="text-lg font-bold 2xl:text-xl">{title}</h3>
      <p className="text-md mt-1">{description}</p>
    </div>
  </div>
)

const FeatureRow: React.FC = () => {
  const features: FeatureItemProps[] = [
    {
      imageSrc: '/secure.png',
      title: '100% Secure',
      description:
        'Lorem Ipsum is dummy text often used in printing and web design',
    },
    {
      imageSrc: '/trade.png',
      title: 'Easy to Trade',
      description:
        'Lorem Ipsum is dummy text often used in printing and web design',
    },
    {
      imageSrc: '/payment.png',
      title: 'Many Payment Methods',
      description:
        'Lorem Ipsum is dummy text often used in printing and web design',
    },
  ]

  return (
    <section className="mt-16 flex w-full flex-col items-center justify-between   text-white max-md:flex-wrap lg:flex-row">
      {features.map((feature, index) => (
        <FeatureItem key={index} {...feature} />
      ))}
    </section>
  )
}

export default FeatureRow
