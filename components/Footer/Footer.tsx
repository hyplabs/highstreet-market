import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram, faFacebook, faTwitter, faDiscord, faGithub, faYoutube, faMedium, IconDefinition } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'
import Logo from 'public/icons/logo.svg'
import WaveDivider, { WaveStyle } from 'components/WaveDivider/WaveDivider'

type IconProps = {
	icon?: IconDefinition
	imgSrc?: string
	href: string
	alt: string
}

const Icon = ({ icon, imgSrc, href, alt }: IconProps) => {
	const iconSize = { width: 48, height: 48 }
	const iconClassName = { className: 'bg-logo text-white p-2 rounded-full' }
	const iconProps = { ...iconSize, ...iconClassName }

	return (
		<div>
			<a href={href} target='_blank' rel='noreferrer'>
				{icon
					? <FontAwesomeIcon icon={icon} {...iconProps} />
					: imgSrc && (
						<div style={iconSize} {...iconClassName} >
							<Image src={imgSrc} alt={alt} {...iconSize} />
						</div>
				)}
			</a>
		</div>
	)
}

type FooterProps = {
	waveBgColor: string
}

export default function Footer ({ waveBgColor }: FooterProps) {
	const icons = [
		{
			href: 'https://www.facebook.com/highstreetmkt',
			icon: faFacebook,
			key: 'facebook',
		},
		{
			href: 'https://t.me/highstreetworld',
			icon: faTelegram,
			key: 'telegram',
		},
		{
			href: 'https://twitter.com/highstreetworld',
			icon: faTwitter,
			key: 'twitter',
		},
		{
			href: 'https://medium.com/highstreet-market',
			icon: faMedium,
			key: 'medium',
		},
		{
			href: 'https://discord.gg/wxm6JNEbD9',
			icon: faDiscord,
			key: 'discord',
		},
		{
			href: 'https://www.youtube.com/channel/UCzXzF5_1RQupiUG0pVGJZmA',
			icon: faYoutube,
			key: 'youtube',
		},
		{
			href: 'https://github.com/TravisBuilds/HighStreet',
			icon: faGithub,
			key: 'github',
		},
		{
			href: 'https://app.spatial.io/rooms/60ba2a486c51d5094898dacf?share=7703961714007425229',
			imgSrc: '/icons/spatial.svg',
			key: 'spatial',
		}
	].map((icon) => ({ ...icon, alt: icon.key }))

	return (
		<>
			<WaveDivider
				color='purpleultalight'
				bgColor={waveBgColor}
				waveColor='#CBB9FF'
				waveStyle={WaveStyle.XS}
				waveOffsetClass='left-wave-left'
			/>
			<footer className='bg-purpleultalight px-4 flex flex-col lg:flex-row lg:items-center' style={{ minHeight: 300 }}>
				<div className='w-72 ml-2 lg:ml-20 lg:mr-10 lg:-mt-28'>
					<div className='flex items-center flex-shrink-0 text-white mr-6 w-footer-logo-sm h-footer-logo-sm lg:w-footer-logo-lg lg:h-footer-logo-lg'>
						<Image alt={'logo'} src={Logo} />
					</div>
				</div>
				<div>
					<div className='flex-1 pt-12 lg:py-0 grid lg:grid-cols-8 lg:gap-x-8 grid-cols-4 gap-y-8'>
						{icons.map((props) => <Icon {...props} key={props.key} />)}
					</div>

					<div className='mt-8 ml-4 text-lightgrey text-hs-2sm lg:text-hs-2lg'>
						&copy; HighStreet { new Date().getFullYear() }
					</div>
				</div>
			</footer>
		</>
	)
}
