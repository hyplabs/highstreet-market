import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram, faFacebook, faTwitter, faDiscord, faGithub, faYoutube, faMedium, IconDefinition } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'
import Logo from '../../public/icons/logo.svg'
import WaveDivider from "../WaveDivider/WaveDivider";

type IconProps = {
	icon?: IconDefinition
	imgSrc?: string
	href: string
}

const Icon = ({ icon, imgSrc, href }: IconProps) => {
	const iconProps = { width: 48, height: 48, className: 'mx-2 lg:mx-4 bg-logo text-white p-2 rounded-full' }
	return (
		<div>
			<a href={href} target='_blank' rel='noreferrer'>
				{icon
					? <FontAwesomeIcon icon={icon} {...iconProps} />
					  // eslint-disable-next-line @next/next/no-img-element
					: imgSrc && <img src={imgSrc} {...iconProps} />}
			</a>
		</div>
	)
}


export default function Footer ({ showDivider }: { showDivider?: boolean }) {
	const icons = [
		{
			href: 'https://www.facebook.com/highstreetmkt',
			icon: faFacebook,
		},
		{
			href: 'https://t.me/highstreetmarket',
			icon: faTelegram,
		},
		{
			href: 'https://twitter.com/highstreetworld',
			icon: faTwitter,
		},
		{
			href: 'https://medium.com/highstreet-market',
			icon: faMedium,
		},
		{
			href: 'https://discord.gg/wxm6JNEbD9',
			icon: faDiscord,
		},
		{
			href: 'https://www.youtube.com/channel/UCzXzF5_1RQupiUG0pVGJZmA',
			icon: faYoutube,
		},
		{
			href: 'https://github.com/TravisBuilds/HighStreet',
			icon: faGithub,
		},
		{
			href: 'https://app.spatial.io/rooms/60ba2a486c51d5094898dacf?share=7703961714007425229',
			imgSrc: '/icons/spatial.png',
		}
	]

	return (
		<>
			{
				showDivider && <WaveDivider
					color={'purpleultalight'}
					flipped={true}
					bgColor={'yellow'}
					waveColor='#CBB9FF'
				/>
			}
			<footer className='bg-purpleultalight py-12 px-4 flex flex-col lg:flex-row lg:items-center' style={{ minHeight: 300 }}>
				<div className='w-72 ml-2 lg:ml-20 lg:mr-10 lg:-mt-28'>
					<div className='flex items-center flex-shrink-0 text-white mr-6 w-footer-logo-sm h-footer-logo-sm lg:w-footer-logo-lg lg:h-footer-logo-lg'>
						<Image alt={'logo'} src={Logo} />
					</div>
				</div>
				<div>
					<div className='flex-1 py-12 lg:py-0 grid lg:grid-cols-8 grid-cols-4 gap-y-8'>
						{icons.map((props) => <Icon {...props} />)}
					</div>

					<div className='mt-8 ml-4 text-lightgrey'>
						&copy; HighStreet { new Date().getFullYear() }
					</div>
				</div>
			</footer>
		</>
	)
}
