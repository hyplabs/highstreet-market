import WaveDivider from '../WaveDivider/WaveDivider'
import Button, { ButtonType } from '../Button/Button'

export default function HeroBanner({ smallText, largeText }: { smallText: string, largeText: string }) {
	return (
		<>
			<section className='bg-gradient-to-b from-pink to-purple pt-32' style={{ minHeight: 500 }}>
				<div className='flex lg:flex-row flex-col'>
					<div className='md:flex-1 p-16 pt-12 lg:pt-36 lg:p-28'>
						<p className='text-2xl md:text-3xl mb-5 font-light'>
							{ smallText }
						</p>
						<h3 className='text-3xl md:text-5xl md:leading-relaxed font-bold py-1'>
							{ largeText }
						</h3>
						<div className='flex flex-col lg:flex-row pt-4'>
							<Button newTab={true} type={ButtonType.DARK} text={'White Paper'} url={'https://github.com/TravisBuilds/HighStreet'} />
							<span className='my-4 lg:mx-4 lg:my-0' />
							<Button newTab={true} type={ButtonType.BORDERED} text={'Merchant Portal'} url={'https://docsend.com/view/sq99b7cgv7q4mw3j'} />
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
			<WaveDivider />
		</>
	)
}
