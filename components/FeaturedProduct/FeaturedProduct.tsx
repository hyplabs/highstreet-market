import Countdown from 'components/Countdown/Countdown'

type FeaturedProductProps = {
  imageSrc: string
  productName: string
  dateTo: string | Date

}

const FeaturedProduct: React.FC<FeaturedProductProps> = ({ imageSrc, productName, dateTo }: FeaturedProductProps) => (
  <div className='flex flex-col items-center py-8'>
    <img src={imageSrc} alt='featured' className='w-1/2' />
    <span className='text-hs-xl pt-8'>NEW DROP</span>
    <span className='text-hs-6xl font-bold'>{productName}</span>
    <Countdown
      dateTo={dateTo}
      className='bg-hs-silver rounded-lg mb-16 flex justify-center py-6 px-32'
    />
    <button
      className='flex justify-center items-center text-hs-md uppercase bg-purple1 text-white rounded-3xl hover:opacity-75'
      style={{ width: 288, height: 53 }}
    >
      Cop
    </button>
  </div>
)

export default FeaturedProduct
