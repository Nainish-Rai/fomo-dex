'use client'
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
import { ParticleComponent } from '@/lib/Particles'

const HomePage: React.FC = () => {
  return (
    <>
      {' '}
      <ParticleComponent />
      <div className="z-50 mx-auto flex  w-full flex-col items-center self-stretch overflow-hidden  px-8  lg:max-w-7xl xl:max-w-screen-lg 2xl:max-w-screen-2xl">
        <Hero />
        <Stats />
        <Features />
        <Potential />
        <Figures />
        <CTA />
      </div>
      <Footer />
    </>
  )
}

export default HomePage
