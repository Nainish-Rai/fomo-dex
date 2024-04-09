import * as React from 'react'
import Image from 'next/image'
import Hero from '@/components/homepage/Hero'
import Stats from '@/components/homepage/Stats'
import Features from '@/components/homepage/Features'
import FeatureCard from '@/components/homepage/FeatureCard'
import Potential from '@/components/homepage/Potential'
import Figures from '@/components/homepage/Figures'
import CTA from '@/components/homepage/CTA'
import Footer from '@/components/Footer'

const HomePage: React.FC = () => {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center self-stretch  overflow-hidden px-8 lg:px-20">
      <Hero />
      <Stats />
      <Features />
      <Potential />
      <Figures />
      <CTA />
    </div>
  )
}

export default HomePage
