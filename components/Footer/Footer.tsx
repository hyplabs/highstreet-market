import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram, faFacebook, faTwitter, faDiscord, faGithub, faYoutube, faMedium } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'
import Logo from '../../public/images/logo.png'
import WaveDivider from "../WaveDivider/WaveDivider";

export default function Footer ({ showDivider }: { showDivider?: boolean }) {
	return (
		<>
			{
				showDivider && <WaveDivider
					color={'purpleultalight'}
					flipped={true}
					bgColor={'yellow'}
				/>
			}
			<footer className='bg-purpleultalight py-12 px-8 flex flex-col lg:flex-row' style={{ minHeight: 100 }}>
				<div className='flex items-center flex-shrink-0 text-white mr-6 pl-10 w-72'>
					<Image alt={'logo'} src={Logo} width={72} height={72} />
				</div>
				<div>
					<div className='flex-1 py-12 lg:py-0 grid lg:grid-cols-8 grid-cols-3 gap-y-8'>
						<div>
							<a href={'https://www.facebook.com/highstreetmkt'} target={'_blank'} rel={'noreferrer'}>
								<FontAwesomeIcon icon={faFacebook} width={48} height={48} className='mx-8 bg-logo text-white p-2 rounded-full' />
							</a>
						</div>
						<div>
							<a href={'https://t.me/highstreetmarket'} target={'_blank'} rel={'noreferrer'}>
								<FontAwesomeIcon icon={faTelegram} width={48} height={48} className='mx-8 bg-logo text-white p-2 rounded-full' />
							</a>
						</div>
						<div>
							<a href={'https://twitter.com/highstreetworld'} target={'_blank'} rel={'noreferrer'}>
								<FontAwesomeIcon icon={faTwitter} width={48} height={48} className='mx-8 bg-logo text-white p-2 rounded-full' />
							</a>
						</div>
						<div>
							<a href={'https://medium.com/highstreet-market'} target={'_blank'} rel={'noreferrer'}>
								<FontAwesomeIcon icon={faMedium} width={48} height={48} className='mx-8 bg-logo text-white p-2 rounded-full' />
							</a>
						</div>
						<div>
							<a href={'https://discord.gg/wxm6JNEbD9'} target={'_blank'} rel={'noreferrer'}>
								<FontAwesomeIcon icon={faDiscord} width={48} height={48} className='mx-8 bg-logo text-white p-2 rounded-full' />
							</a>
						</div>
						<div>
							<a href={'https://www.youtube.com/channel/UCzXzF5_1RQupiUG0pVGJZmA'} target={'_blank'} rel={'noreferrer'}>
								<FontAwesomeIcon icon={faYoutube} width={48} height={48} className='mx-8 bg-logo text-white p-2 rounded-full' />
							</a>
						</div>
						<div>
							<a href={'https://github.com/TravisBuilds/HighStreet'} target={'_blank'} rel={'noreferrer'}>
								<FontAwesomeIcon icon={faGithub} width={48} height={48} className='mx-8 bg-logo text-white p-2 rounded-full' />
							</a>
						</div>
						<div>
							<a href={'https://highstreet-market.gitbook.io/highstreet/'} target={'_blank'} rel={'noreferrer'}>
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img src={'/icons/gitbook.svg'} width={48} height={48} className='mx-8 bg-logo text-white p-1 rounded-full' alt={'gitbook'} />
							</a>
						</div>
					</div>

					<div className='mt-8 ml-12'>
						&copy; HighStreet { new Date().getFullYear() }
					</div>
				</div>
			</footer>
		</>
	)
}