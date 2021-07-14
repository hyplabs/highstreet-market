import Head from 'next/head'
import Image from 'next/image'
import HeroBanner from 'components/HeroBanner/HeroBanner'
import Footer from 'components/Footer/Footer'
import Nav from 'components/Nav/Nav'
import VideoSection from 'components/VideoSection/VideoSection'
import Highlights from 'components/Highlights/Highlights'
import Partners from 'components/Partners/Partners'
import BlogGrid from 'components/BlogGrid/BlogGrid'
import WaveDivider, { WaveStyle } from 'components/WaveDivider/WaveDivider'

import VR1 from 'public/images/vr-1.png'
import VR2 from 'public/images/vr-2.png'
import VR3 from 'public/images/vr-3.png'

export default function Home() {
  return (
    <div className='overflow-x-hidden'>
      <Head>
        <title>HighStreet Market</title>
        <meta name="description" content="Always Authentic, Liquid Whenever" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <HeroBanner
        smallText={'Always Authentic, Liquid Whenever'}
        largeText={'The most 🔥 products on the most 💧 market'}
      />
      <VideoSection
        sectionTitle={'How Highstreet Works'}
        sectionSubtitle={'Whether you invest or collect - Ride any 🌊 with confidence on our StreetSmart™ Bonding Curves'}
      />
      <Highlights
        data={[
          {
            title: 'Hybrid Products',
            text:
              <>
                <span className='font-bold'>We already live our life half online and half in real life.</span> The products on our market are crafted to exist both in physical and virtual form and always come straight from the brands.
              </>,
            iconUrl: '/icons/highlights-1.png'
          },
          {
            title: 'Instant Liquidity',
            text:
              <>
                <span className='font-bold'>Never wait for buyers and sellers.</span> Our StreetSmart™ Bonding Curves enable our marketplace to directly buy and sell product tokens at a dynamic fair market value 24/7.
              </>,
            iconUrl: '/icons/highlights-2.png'
          },
          {
            title: 'Guaranteed Authenticity',
            text:
              <>
                <span className='font-bold'>Goodbye Fakes.</span> Product tokens are linked directly to the brands and creators you love. Products redeemed on HighStreet will always come directly from the source. Fresh out the oven.
              </>,
            iconUrl: '/icons/highlights-3.png'
          }
        ]}
      />
      <div className='bg-gradient-to-b from-yellow to-beige py-24'>
        <h3 className='text-hs-2xl lg:text-hs-4xl text-center pt-0 lg:py-12 p-4 font-bold lg:w-2/3 mx-auto'>
          HighStreet is the bridge between Virtual Worlds, Real life, and  Web
        </h3>
        <div className='flex lg:flex-row flex-col'>
          <div className='flex-1 text-center'>
            <Image src={VR1} className='mx-auto' alt='VR1' />
          </div>
          <div className='flex-1 text-center'>
            <Image src={VR2} className='mx-auto' alt='VR2' />
          </div>
          <div className='flex-1 text-center'>
            <Image src={VR3} className='mx-auto' alt='VR3' />
          </div>
        </div>
      </div>
      <WaveDivider color='beige' waveColor='#FCC0B3' waveOffsetClass='right-wave-right' waveStyle={WaveStyle.SM} />
      <BlogGrid
        feedUrl={'https://medium.com/feed/highstreet-market'}
        itemsPerPage={3}
      />
      <Partners
        data={[
          {
            src: '/images/investors/Cherubic.png'
          },
          {
            src: '/images/investors/HTC.png'
          },
          {
            src: '/images/investors/Mechanism.png'
          },
          {
            src: '/images/investors/Mr_Block.png'
          },
          {
            src: '/images/investors/Palmdrive.png'
          },
          {
            src: '/images/investors/R8.png'
          },
          {
            src: '/images/investors/GBV.png'
          },
          {
            src: '/images/investors/Jump.png'
          },
          {
            src: '/images/investors/Morningstar.png'
          },
          {
            src: '/images/investors/NGC.png'
          },
          {
            src: '/images/investors/Panony_1.png'
          },
          {
            src: '/images/investors/Shima.png'
          }
        ]}
      />
      <Footer waveBgColor='darkblue' />
    </div>
  )
}
