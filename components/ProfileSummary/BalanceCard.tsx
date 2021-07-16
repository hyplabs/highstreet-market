import Image from 'next/image'

type BalanceCardProps = {
  symbolImage: StaticImageData
  symbol: string
  value: string | number
  balance: string
  className?: string
}

const BalanceCard: React.FC<BalanceCardProps> = ({ symbolImage, symbol, value, balance, className }) => (
  <div
    className={`flex flex-col items-center rounded-32px ${className}`}
    style={{ width: 160, height: 305 }}
  >
    <div className='pt-16 pb-12'>
      <div className='flex justify-center' style={{ height: 42 }}>
        <Image src={symbolImage} alt='currency icon' />
      </div>
      <span className='text-hs-md font-bold'>{symbol}</span>
    </div>
    <span className='text-hs-3lg font-medium'>$ {value}</span>
    <span className='text-hs-md'>{balance} coin</span>
  </div>
)

export default BalanceCard
