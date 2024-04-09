import * as React from 'react'
import Image from 'next/image'
import Hero from '@/components/homepage/Hero'
import Stats from '@/components/homepage/Stats'
import Features from '@/components/homepage/Features'

const MyComponent: React.FC = () => {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center self-stretch  px-20 max-md:max-w-full max-md:px-5">
      <Hero />
      <Stats />
      <Features />
    </div>
  )
}

export default MyComponent
