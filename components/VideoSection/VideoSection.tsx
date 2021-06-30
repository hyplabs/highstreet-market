import Image from 'next/image'
import VideoPlaceholderImg from '../../public/images/video-placeholder.png'

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
			<section className='w-full md:px-10 md:py-32 text-center'>
				<div className='md:container mx-auto flex flex-col text-center'>
					<h3 className='font-medium text-5xl md:px-0 px-8'>
						{filledProps.sectionTitle}
					</h3>
					<p className='font-light text-2xl pt-4 max-w-3xl mx-auto my-8 md:px-0 px-8'>
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
