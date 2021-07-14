import Image from 'next/image'
import Bubble1Image from 'public/icons/bubble-1.svg'
import styles from './AboutIntro.module.css'

const AboutIntro = () => (
  <div className='p-8 pb-32 pt-32 relative lg:flex lg:flex-row lg:pr-32 lg:pb-56 lg:pl-28 lg:pt-56'>
    <div
      className={`absolute w-1/4 h-fit order-2 lg:relative lg:w-1/3 ${styles.bubble1}`}
      style={{ minWidth: '240px' }}
    >
      <Image src={Bubble1Image} alt='Bubble Image' />
    </div>
    <div className='flex-1 order-1 mt-44 lg:mt-0'>
      <h3 className='text-hs-2xl lg:text-hs-4xl mb-12 font-semibold'>
        HighStreet believes real life and virtual
        are not distinct concepts. They are equal parts to our lives.
      </h3>
      <p className='text-hs-lg w-full lg:text-hs-xl'>
        In this hybrid life, HighStreet aims to
        redefine how products should be
        consumed and how markets should sell these products.
      </p>
    </div>
  </div>
)

export default AboutIntro
