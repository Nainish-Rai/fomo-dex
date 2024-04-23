function FeatureCard({ title, paragraph }: any) {
  return (
    <section className="flex w-full max-w-none flex-col items-start rounded-3xl border border-solid border-border bg-cardbg px-12 pb-20 pt-12 max-md:px-5 lg:max-w-xl  xl:max-w-xl">
      <h1
        className={`text-3xl font-extrabold leading-[60px] text-neutral-200 max-md:max-w-full 2xl:text-4xl`}
      >
        {title}
      </h1>
      <p
        className={`font-norm mt-16 text-lg leading-7 text-white max-md:mt-10 max-md:max-w-full 2xl:text-lg `}
      >
        {paragraph}
      </p>
    </section>
  )
}

export default FeatureCard
