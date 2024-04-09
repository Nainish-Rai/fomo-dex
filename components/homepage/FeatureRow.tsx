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
  <div className="mb-16 flex w-full items-center justify-evenly gap-5 max-md:flex-col max-md:text-center md:w-1/3">
    <Image
      src={imageSrc}
      alt=""
      width={80}
      height={80}
      className="w-14 shrink-0 fill-white"
    />
    <div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-3.5 text-lg">{description}</p>
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
    <section className="mt-16 flex flex-col justify-between gap-5 px-5 text-white max-md:flex-wrap md:flex-row">
      {features.map((feature, index) => (
        <FeatureItem key={index} {...feature} />
      ))}
    </section>
  )
}

export default FeatureRow
