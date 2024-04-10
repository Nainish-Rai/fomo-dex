import * as React from 'react'

interface HeadingProps {
  text: string
  className?: string
}

const Heading: React.FC<HeadingProps> = ({ text, className }) => {
  return (
    <h1
      className={`text-3xl font-extrabold leading-[60px] text-neutral-200 max-md:max-w-full 2xl:text-4xl ${className}`}
    >
      {text}
    </h1>
  )
}

interface ParagraphProps {
  text: string
  className?: string
}

const Paragraph: React.FC<ParagraphProps> = ({ text, className }) => {
  return (
    <p
      className={`mt-16 text-lg leading-7 text-white max-md:mt-10 max-md:max-w-full 2xl:text-xl ${className}`}
    >
      {text}
    </p>
  )
}

type props = {
  title: string
  paragraph: string
}
function FeatureCard({ title, paragraph }: props) {
  return (
    <section className="flex w-full max-w-none flex-col items-start rounded-3xl border border-solid border-stone-500 bg-neutral-900 px-12 pb-20 pt-12 max-md:px-5 lg:max-w-xl  xl:max-w-xl">
      <Heading text={title} />
      <Paragraph text={paragraph} />
    </section>
  )
}

export default FeatureCard
