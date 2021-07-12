import Image from 'next/image'
import Bubble2Image from '../../public/icons/bubble-2.svg'
import styles from './Story.module.css'

const Story = () => (
  <div className='bg-gradient-to-b from-purpledark to-purple1 pb-12 relative'>
    <div className='flex flex-col lg:flex-row p-8 pt-0 lg:h-500px'>
      <div className={`w-1/3 lg:w-1/2 absolute lg:relative ${styles.bubble2}`}
        style={{ minWidth: '325px' }}
      >
        <Image src={Bubble2Image} className='lg:absolute' alt='Bubble Image' />
      </div>
      <div className='flex-1'>
        <h3 className='text-hs-4xl w-full mb-12 font-bold text-white'>
          Our Story
        </h3>
        <p className='text-hs-lg mb-12 text-white'>
          HighStreet began when our unlikely team of
          veterans from VR, defi, fine art, and hype
          markets came together to see how we can
          redefine the future of collectible product
          markets.
        </p>
        <p className='text-hs-lg text-white'>
          From reseller trust to liquidity constraints we saw where smart contracts and bonding
          curves could do away with market
          deficiencies and logistic complexities that
          have been around for centuries.
        </p>
      </div>
    </div>
    <div
      className='rounded-xxl border-yellow text-center text-white p-12 px-4 mt-6 w-full lg:w-2/3 mx-auto border-8 flex flex-col justify-center'
      style={{ minHeight: '417px' }}
    >
      <p className='text-hs-large lg:text-hs-xl mb-12'>
        We saw the chance to not just improve a market, <br/>
        but to reimagine the market completely...
      </p>
      <h4 className='text-hs-3xl lg:text-hs-4xl font-bold'>
        And so, HighStreet was born.
      </h4>
    </div>
  </div>
)

export default Story
