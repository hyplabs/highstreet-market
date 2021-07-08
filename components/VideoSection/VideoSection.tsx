import Image from 'next/image'
import VideoPlaceholderImg from '../../public/images/video-placeholder.png'
import Bubble3Image from '../../public/icons/bubble-3.svg'
import Bubble4Image from '../../public/icons/bubble-4.svg'
import Bubble5Image from '../../public/icons/bubble-5.svg'
import Bubble6Image from '../../public/icons/bubble-6.svg'
import styles from './VideoSection.module.css'

export type VideoSectionProps = {
	sectionTitle: string
	sectionSubtitle: string
	videoTitle?: string
	videoSrc?: string
}

const defaultProps: Partial<VideoSectionProps> = {
	sectionTitle: 'Highstreet Drops',
	sectionSubtitle: 'Getting street smart with the Bonding Curve',
	videoTitle: 'Highstreet Drops',
	videoSrc: 'https://www.youtube.com/embed/zpROwouRo_M?controls=0',
}

export default function VideoSection(props: VideoSectionProps) {
	const filledProps: VideoSectionProps = {...defaultProps, ...props}

	return (
		<>
			<section className='w-full py-8 md:px-10 md:py-32 text-center'>
				<div className='md:container mx-auto flex flex-col text-center relative'>
					<div className={`absolute flex -z-10 ${styles.bubble3}`}>
						<div className='ml-auto w-1/2 lg:w-full'>
							<Image src={Bubble3Image} />
						</div>
					</div>
					<div className={`absolute -z-10 ${styles.bubble4}`}>
						<div className='mr-auto w-1/2 lg:w-full'>
							<Image src={Bubble4Image} />
						</div>
					</div>
					<div className={`absolute -z-10 ${styles.bubble5}`}>
						<div className='ml-auto w-1/2 lg:w-full'>
							<Image src={Bubble5Image} />
						</div>
					</div>
					<div className={`absolute -z-10 -bottom-28 left-1/3 ${styles.bubble6}`}>
						<div className='ml-auto w-1/2 lg:w-full'>
							<Image src={Bubble6Image} />
						</div>
					</div>
					<h3 className='font-medium text-hs-3xl lg:text-hs-4xl md:px-0 px-4'>
						{filledProps.sectionTitle}
					</h3>
					<p className='font-light text-hs-md lg:text-hs-lg pt-4 max-w-3xl mx-auto mt-4 mb-8 md:px-0 px-4'>
						{filledProps.sectionSubtitle}
					</p>
					<div className='w-full'>
						{/* TODO: uncomment below to put the video back, using placeholder image for now */}
						{/*<iframe*/}
						{/*	className='mx-auto pt-8 lg:w-2/3 w-full'*/}
						{/*	height={600}*/}
						{/*	src={filledProps.videoSrc}*/}
						{/*	title={filledProps.videoTitle} frameBorder='0'*/}
						{/*	allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'*/}
						{/*	allowFullScreen*/}
						{/*/>*/}
						<Image
							src={VideoPlaceholderImg}
							alt={'curve'}
						/>
					</div>
				</div>
			</section>
		</>
	)
}
