function FeatureCard({ title, paragraph }: any) {
  return (
    <section className="bg-cardbg border-border flex w-full max-w-none flex-col items-start rounded-3xl border border-solid px-12 pb-20 pt-12 max-md:px-5 lg:max-w-xl  xl:max-w-xl">
      <h1
        className={`text-3xl font-extrabold leading-[60px] text-neutral-200 max-md:max-w-full 2xl:text-4xl`}
      >
        {title}
      </h1>
      <p
        className={`mt-16 text-lg leading-7 text-white max-md:mt-10 max-md:max-w-full 2xl:text-xl `}
      >
        {paragraph}
      </p>
    </section>
  )
}

export default FeatureCard
