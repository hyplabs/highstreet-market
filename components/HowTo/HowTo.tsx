import Image from 'next/image'
import HowImage1 from '../../public/images/how-1.png'
import HowImage2 from '../../public/images/how-2.png'
import HowImage3 from '../../public/images/how-3.png'

const HowTo = () => (
  <div className={'bg-purple1'}>
    <div className='text-center px-2 md:rounded-xxl md:px-12' style={{backgroundColor: '#E7DFFF'}}>
      <h3 className='text-hs-3xl lg:text-hs-4xl py-16 font-bold'>
        How it works
      </h3>
      <div className='flex flex-col md:flex-row text-left'>
        <div className='flex-1 px-6 lg:pt-0 pt-12'>
          <Image
            src={HowImage1}
          />
          <p className='text-hs-lg pt-8'>
            <strong>LOGIN</strong> to HighStreet via Web Portal or VR
            and load your wallet with $HIGH tokens.
          </p>
        </div>
        <div className='flex-1 px-6 lg:pt-0 pt-12'>
          <Image
            src={HowImage2}
          />
          <p className='text-hs-lg pt-8'>
            <strong>BUY</strong> product tokens that you can redeem to
            own the product or resell the tokens back to
            market.
          </p>
        </div>
        <div className='flex-1 px-6 lg:pt-0 pt-12'>
          <Image
            src={HowImage3}
          />
          <p className='text-hs-lg pt-8'>
            <strong>REDEEM</strong> the token to have the product
            delivered to you and use in real life.
          </p>
        </div>
      </div>
      <button
        type='submit'
        className='my-24 px-10 py-4 rounded-xl text-white bg-gradient-to-b from-purple to-darkishpurple'
        style={{ width: '80%', height: '56px', maxWidth: '392px' }}
      >
        <a href={'/#join-metaverse-form'}>
          Join Our Alpha
        </a>
      </button>
    </div>
  </div>
)

export default HowTo
