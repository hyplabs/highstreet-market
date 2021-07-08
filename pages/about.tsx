import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav/Nav'
import FAQ from '../components/FAQ/FAQ'
import WaveDivider, { WaveStyle } from '../components/WaveDivider/WaveDivider'

import ProofOfPlayImg from '../public/images/proof-of-play.png'
import Footer from '../components/Footer/Footer'
import Story from '../components/Story/Story'
import AboutIntro from '../components/AboutIntro/AboutIntro'
import HowTo from '../components/HowTo/HowTo'

export default function About() {
	return (
		<div className='overflow-x-hidden'>
			<Head>
				<title>HighStreet Market | About</title>
				<meta name='description' content='Always Authentic, Liquid Whenever'/>
				<link rel='icon' href='/favicon.ico'/>
			</Head>

			<Nav/>

			<AboutIntro />

			<WaveDivider color={'purpledark'} waveStyle={WaveStyle.NO_LAYER} waveOffsetClass='right-wave-right2' />

			<Story />

			<HowTo />

			<div className='flex flex-col lg:flex-row bg-gradient-to-b from-purple1 to-blue'>
				<div className='flex-1 text-white lg:p-36 md:p-12 p-6 pr-0'>
					<h3 className='text-hs-3xl lg:text-hs-4xl py-12 font-bold'>
						Don’t just own the product, own the market
					</h3>
					<p className='text-hs-large lg:text-hs-xl mb-12'>
						As long as you hold an unredeemed product
						token, you are a shareholder of all the transaction fees generated on the market for
						that product token.
					</p>
				</div>
				<div className='lg:w-1/2'>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						src={'/images/big-duck-energy.png'}
						style={{float: 'right', bottom: -10, maxHeight: '768px'}}
					/>
				</div>
			</div>

			<div className='flex flex-col-reverse lg:flex-row p-12 px-8 lg:p24'>
				<div className='w-full lg:w-1/2 lg:block p-12'>
					<Image src={ProofOfPlayImg} />
				</div>
				<div className='flex-1'>
					<h3 className='text-hs-3xl lg:text-hs-4xl py-12 font-bold'>
						Proof of Play
					</h3>
					<p className='text-hs-3md lg:text-hs-lg'>
						But we believe that “play” is more than a pass
						time, it’s a representation of productivity in
						the metaverse.
						<br/><br/>
						{/* eslint-disable-next-line react/no-unescaped-entities */}
						So we created the concept of "Proof of Play" (PoP) where simply living and participating in the Metaverse will allow you to earn $HIGH tokens. 
						<br/><br/>
						Proof of Work always sounded like homework to us. We would rather Proof of Play.
					</p>
				</div>
			</div>

			<FAQ
				items={[
					{
						question: 'Do Product Tokens Ever Expire?',
						answer: 'Some Drops we may design to have an expiration date, in this case they will have a relatively flat curve'
					},
					{
						question: 'Where do the items come from once a product token is redeemed?',
						answer: 'Products on HighStreet always come direct from the Brand themselves and are guaranteed authentic.'
					},
					{
						question: 'Do products come with a warranty?',
						answer: 'All products come with the original manufacturer’s warranty unless otherwise noted in the product description'
					},
					{
						question: 'What happens if for unexpected circumstances we are unable to fulfill our physical product for redemptions?',
						answer: 'An insurance fund is set up built from our transaction fees to specifically address issues like these. It is 100% our fault if our merchants cannot deliver, thus we will refund our users based on their redeemed value and sunset the curves right away'
					},
					{
						question: 'When will I receive my product after redeeming?',
						answer: 'Upon redeeming you will after to KYC to confirm email and address, you will then receive a date for when your product will be shipped'
					}
				]}
			/>

			<Footer waveBgColor='yellow' />
		</div>
	)
}
