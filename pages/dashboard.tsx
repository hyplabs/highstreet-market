import Nav from 'components/Nav/Nav'
import ProfileSummary from 'components/ProfileSummary/ProfileSummary'
import WaveDivider, { WaveStyle } from 'components/WaveDivider/WaveDivider'
import FeaturedProduct from 'components/FeaturedProduct/FeaturedProduct'
import Head from 'next/head'

// TODO: need to be authenticated
export default function Dashboard() {
  return (
    <div>
      <Head>
        <title>HighStreet Market | Dashboard</title>
        <meta name='description' content='Always Authentic, Liquid Whenever'/>
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <Nav excludeMiddle/>
      <ProfileSummary />
      <WaveDivider viewBox='0 484 1440 148' color='#555555' waveStyle={WaveStyle.NO_LAYER2} />
      <FeaturedProduct
        imageSrc='/images/placeholder_product.png'
        productName="FOMO'S Secret"
        dateTo='August 5, 2021 00:00:00'
      />
    </div>
  )
}
