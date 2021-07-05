import WaveDivider from '../WaveDivider/WaveDivider'

export default function Partners ({ data }: { data: Record<string, any>[] }) {
	return (
		<>
			<section className='p-10 py-24 bg-darkblue rounded-t-xxl'>
				<h3 className='font-medium text-5xl text-center text-white'>
					Investors
				</h3>
				<p className='font-light text-2xl pt-8 text-white text-center'>
					{/* eslint-disable-next-line react/no-unescaped-entities */}
					It's only right we have assembled a bridge of transitional and crypto investors
				</p>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-12 container mx-auto mt-24">
					{
						data.map(partner => (
							<div key={partner.src}>
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img className={'mx-auto'} alt={partner.src} src={partner.src} />
							</div>
						))
					}
				</div>
			</section>
			<WaveDivider
				color={'darkblue'}
				bgColor={'purpleultalight'}
				waveColor='softpurple'
			/>
		</>
	)
}
