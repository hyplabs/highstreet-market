import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav/Nav'
import FAQ from '../components/FAQ/FAQ'
import WaveDivider, { WaveStyle } from '../components/WaveDivider/WaveDivider'

import HowImage1 from '../public/images/how-1.png'
import HowImage2 from '../public/images/how-2.png'
import HowImage3 from '../public/images/how-3.png'
import BubbleImage from '../public/icons/bubble-1.png'
import Bubble2Image from '../public/icons/bubble-2.png'
import ProofOfPlayImg from '../public/images/proof-of-play.png'
import Footer from '../components/Footer/Footer'

export default function About() {
	return (
		<>
			<Head>
				<title>HighStreet Market | About</title>
				<meta name='description' content='Always Authentic, Liquid Whenever'/>
				<link rel='icon' href='/favicon.ico'/>
			</Head>

			<Nav/>

			<div className='flex flex-row p-8 pt-32 lg:p-32 lg:pt-56'>
				<div className='flex-1'>
					<h3 className='text-3xl lg:text-4xl mb-12 font-bold' style={{ lineHeight: '3.5rem !important' }}>
						HighStreet believes real life and virtual
						are not distinct concepts. They are equal parts to our lives.
					</h3>
					<p className='text-2xl w-full lg:w-2/3 leading-relaxed'>
						In this hybrid life, HighStreet aims to
						redefine how products should be
						consumed and how markets should sell these products.
					</p>
				</div>
				<div className='w-0 lg:w-1/3'>
					<Image src={BubbleImage} />
				</div>
			</div>

			<WaveDivider color={'purpledark'} waveStyle={WaveStyle.NO_LAYER} waveOffsetClass='right-wave-right2' />

			<div className='bg-gradient-to-b from-purpledark to-purple pb-12'>
				<div className='flex flex-col lg:flex-row p-8 pt-0'>
					<div className='w-0 lg:w-1/3'>
						<Image src={Bubble2Image} />
					</div>
					<div className='flex-1'>
						<h3 className='text-5xl w-full lg:w-1/2 mb-12 leading-relaxed font-bold text-white'>
							Our Story
						</h3>
						<p className='text-2xl mb-12 text-white leading-relaxed'>
							HighStreet began when our unlikely team of
							veterans from VR, defi, fine art, and hype
							markets came together to see how we can
							redefine the future of collectible product
							markets.
						</p>
						<p className='text-2xl text-white leading-relaxed'>
							From reseller trust to liquidity constraints we saw where smart contracts and bonding
							curves could do away with market
							deficiencies and logistic complexities that
							have been around for centuries.
						</p>
					</div>
				</div>
				<div
					className='rounded-xxl border-yellow text-center text-white p-12 mt-12 w-full lg:w-2/3 mx-auto border-8'
				>
					<p className='text-2xl mb-12 leading-relaxed'>
						We saw the chance to not just improve a market, <br/>
						but to reimagine the market completely... and so...
					</p>
					<h4 className='text-5xl font-bold leading-relaxed'>
						HighStreet was born.
					</h4>
				</div>
			</div>

			<div className={'bg-purple'}>
				<div className='text-center md:rounded-xxl px-12' style={{backgroundColor: '#E7DFFF'}}>
					<h3 className='text-5xl py-16 leading-relaxed font-bold'>
						How it works
					</h3>
					<div className='flex flex-col lg:flex-row'>
						<div className='flex-1 px-6'>
							<Image
								src={HowImage1}
							/>
							<p className='text-2xl leading-relaxed'>
								<strong>LOGIN</strong> to HighStreet via Web Portal or VR
								and load your wallet with $HIGH tokens.
							</p>
						</div>
						<div className='flex-1 px-6 lg:pt-0 pt-12'>
							<Image
								src={HowImage2}
							/>
							<p className='text-2xl leading-relaxed'>
								<strong>BUY</strong> product tokens that you can redeem to
								own the product or resell the tokens back to
								market.
							</p>
						</div>
						<div className='flex-1 px-6 lg:pt-0 pt-12'>
							<Image
								src={HowImage3}
							/>
							<p className='text-2xl leading-relaxed'>
								<strong>REDEEM</strong> the token to have the product
								delivered to you and use in real life.
							</p>
						</div>
					</div>
					<button
						type='submit'
						className='my-24 px-10 py-4 rounded-xl text-white bg-gradient-to-b from-purplelight to-purple'
					>
						<a href={'/#join-metaverse-form'}>
							Join Our Alpha
						</a>
					</button>
				</div>
			</div>

			<div className='flex flex-col lg:flex-row bg-gradient-to-b from-purple to-blue'>
				<div className='flex-1 text-white lg:p-36 md:p-12 p-6 pr-0'>
					<h3 className='text-5xl py-12 leading-relaxed font-bold'>
						Don’t just own the product, own the market
					</h3>
					<p className='text-2xl mb-12 leading-relaxed'>
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

			<div className='flex flex-col-reverse lg:flex-row p-12 lg:p24'>
				<div className='w-full lg:w-1/2 lg:block p-12'>
					<Image src={ProofOfPlayImg} />
				</div>
				<div className='flex-1'>
					<h3 className='text-5xl py-12 leading-relaxed font-bold'>
						Proof of Play
					</h3>
					<p className='text-2xl leading-relaxed'>
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
		</>
	)
}
