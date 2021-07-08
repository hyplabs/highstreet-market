import WaveDivider, { WaveStyle } from '../WaveDivider/WaveDivider'
import Button, { ButtonType } from '../Button/Button'

export default function HeroBanner({ smallText, largeText }: { smallText: string, largeText: string }) {
	return (
		<>
			<section className='bg-gradient-to-b from-pink to-purple pt-32' style={{ minHeight: 500 }}>
				<div className='flex lg:flex-row flex-col'>
					<div className='md:flex-1 p-8 pt-12 lg:pt-36 lg:p-28'>
						<p className='text-hs-lg md:text-hs-xl mb-5 font-normal'>
							{ smallText }
						</p>
						<h3 className='text-hs-3xl md:text-hs-6xl font-bold py-1'>
							{ largeText }
						</h3>
						<div className='flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-8 pt-8'>
							<Button newTab={true} type={ButtonType.DARK} text={'White Paper'} url={'https://github.com/TravisBuilds/HighStreet'} whiteGlow className='lg:w-184px h-56px' />
							<Button newTab={true} type={ButtonType.BORDERED} text={'Merchant Portal'} url={'https://docsend.com/view/sq99b7cgv7q4mw3j'} whiteGlow className='lg:w-184px h-56px' />
						</div>
					</div>
					<div className='lg:w-1/2 my-12 lg:my-2 lg:block hidden pr-10'>
						<iframe
							id="island-iframe"
							src={'https://highstreet-island-prod.netlify.app/'}
							width={'100%'}
							height={'686'}
							frameBorder="0"
							allowTransparency={true}
							style={{ overflow: 'hidden' }}
						/>
					</div>
				</div>
			</section>
			<WaveDivider waveColor='#8861FB' color='purple' waveOffsetClass='left-wave-left' waveStyle={WaveStyle.LG} />
		</>
	)
}
