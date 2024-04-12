import Image from 'next/image'
type TokenCardProps = {
  name: string
  price: string
  percentChange: string
  isPositiveChange: boolean
  chartImageSrc: string
}

const TokenCard: React.FC<TokenCardProps> = ({
  name,
  price,
  percentChange,
  isPositiveChange,
  chartImageSrc,
}) => (
  <div className="ml-16 flex w-full justify-between gap-5">
    <div className="flex flex-col">
      <div className="ml-5 self-start text-sm font-medium leading-4 text-neutral-400 md:ml-2.5">
        Price
      </div>
      <div className="mt-3.5 text-base font-semibold leading-4 text-white">
        {price}
      </div>
    </div>
    <div className="flex flex-col self-start">
      <div className="text-sm font-medium leading-4 text-neutral-400">24H%</div>
      <div
        className={`mt-4 text-base font-semibold leading-4 ${
          isPositiveChange ? 'text-green-300' : 'text-rose-500'
        }`}
      >
        {percentChange}
      </div>
    </div>
    <Image
      src={chartImageSrc}
      alt={`${name} price chart`}
      className="my-auto aspect-[5.26] w-[103px] max-w-full shrink-0"
      width={103}
      height={20}
    />
  </div>
)

const TokenIcon: React.FC<{ src: string; name: string }> = ({ src, name }) => (
  <div className="flex flex-col self-start text-sm font-medium leading-6 text-white">
    <Image
      src={src}
      alt={`${name} icon`}
      className="aspect-[1.16] h-5 w-5 self-center"
      width={37}
      height={32}
    />
    <div className="mt-2 text-sm">{name}</div>
  </div>
)

const tokenData = [
  {
    name: 'FOMO',
    iconSrc: '/solana.png',
    price: '$1,000',
    percentChange: '+2%',
    isPositiveChange: true,
    chartImageSrc: '/upgraph.png',
  },
  {
    name: 'FOMO',
    iconSrc: '/solana.png',
    price: '$1,000',
    percentChange: '-2%',
    isPositiveChange: false,
    chartImageSrc: '/downgraph.png',
  },
]

export default function GraphContainer() {
  return (
    <div className="mt-6 flex w-full max-w-[490px] items-start gap-5 whitespace-nowrap rounded-3xl border border-solid border-stone-500 bg-neutral-900 px-12 py-9 md:flex-wrap md:px-8">
      <div className="flex w-full items-center">
        <div className="my-auto flex w-full shrink-0 grow basis-0 flex-col">
          {tokenData.map((token) => (
            <div key={token.name} className="my-3 flex w-full gap-2  ">
              <TokenIcon src={token.iconSrc} name={token.name} />
              <TokenCard
                key={token.name}
                name={token.name}
                price={token.price}
                percentChange={token.percentChange}
                isPositiveChange={token.isPositiveChange}
                chartImageSrc={token.chartImageSrc}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
