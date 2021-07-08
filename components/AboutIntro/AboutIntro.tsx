import Image from 'next/image'
import Bubble1Image from '../../public/icons/bubble-1.svg'

const AboutIntro = () => (
  <div className='flex flex-row p-8 pb-32 pt-32 lg:pr-32 lg:pb-56 lg:pl-28 lg:pt-56'>
    <div className='flex-1'>
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
    <div className='w-0 lg:w-1/3'>
      <Image src={Bubble1Image} />
    </div>
  </div>
)

export default AboutIntro
