import * as React from 'react'
import FeatureItem from './FeatureItem'

const FeatureRow: React.FC = () => {
  const features = [
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
