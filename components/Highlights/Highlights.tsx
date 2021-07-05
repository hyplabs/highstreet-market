import styles from './Highlights.module.css'
import JoinForm from '../JoinForm/JoinForm'
import WaveDivider from '../WaveDivider/WaveDivider'
import Button, { ButtonType } from '../Button/Button'

export type HighlightData = {
	iconUrl: string,
	title: string,
	text: string,
}

const _renderHighlight = (highlight: HighlightData, index: number) => {
	return (
		<div className='flex-1' key={`highlights-${index}`}>
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img src={highlight.iconUrl} className='mx-auto' />
			<h4 className='text-4xl font-bold text-white leading-relaxed'>
				{ highlight.title }
			</h4>
			<p className='p-8 text-2xl text-white leading-loose'>
				{ highlight.text }
			</p>
		</div>
	)
}

export default function Highlights ({ data }: { data: HighlightData[] }) {
	return (
		<>
			<WaveDivider color='aqua' flipped={true} waveColor='darkishblue'/>
			<div className='bg-yellow'>
				<section className='w-full bg-gradient-to-b from-aqua to-purple rounded-b-xxl' id={'metaverse'}>
					<div className='container mx-auto text-center pt-24 lg:py-24'>
						<div className='flex flex-col lg:flex-row'>
							{ data.map((elm, index) => _renderHighlight(elm, index)) }
						</div>
						{/*<div className={`pb-12 mx-auto ${styles.discoverBtnContainer}`}>*/}
						{/*	<Button*/}
						{/*		type={ButtonType.WHITE}*/}
						{/*		text={'Discover'}*/}
						{/*		url={'#'}*/}
						{/*	/>*/}
						{/*</div>*/}
						<JoinForm />
					</div>
				</section>
			</div>
		</>
	)
}
