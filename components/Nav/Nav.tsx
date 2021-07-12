import Image from 'next/image'
import Logo from '../../public/icons/logo.svg'
import NavItems from './Nav.items.json'
import {useState} from 'react'
import Countdown from '../Countdown/Countdown'

export default function Nav() {
	const [showMobileNav, setShowMobileNav] = useState(false)
	const { data: navItems } = NavItems

	return (
		<nav className='absolute w-full flex items-center justify-between flex-wrap pt-4'>
			<div className='flex items-center flex-shrink-0 text-white mr-6 pl-8 lg:pl-28 p-6'>
				<a href={'/'}>
					<div className='lg:w-logo-lg lg:h-logo-lg w-logo-sm h-logo-sm'>
						<Image alt={'logo'} src={Logo}/>
					</div>
				</a>
			</div>
			<div className='block lg:hidden'>
				<button
					className='flex items-center px-3 py-2 mr-4'
					onClick={() => setShowMobileNav(!showMobileNav)}
				>
					<div className='space-y-2'>
						<div className='w-32px h-4px bg-ultrablue' />
						<div className='w-32px h-4px bg-ultrablue' />
					</div>
				</button>
				{
					showMobileNav && (
						<nav
							className='absolute md:relative top-24 left-0 md:top-0 z-20 md:flex flex-col md:flex-row md:space-x-6 font-semibold w-full md:w-auto bg-white shadow-md rounded-lg md:rounded-none md:shadow-none md:bg-transparent p-6 md:p-0'>
							{
								navItems.map((item, index) => (
									<a
										key={`nav-item-mobile--${index}`}
										href={item.link}
										className='block py-1 text-indigo-600 hover:underline'
									>
										{item.title}
									</a>
								))
							}
						</nav>
					)
				}
			</div>
			<div className='w-full flex-grow hidden lg:flex lg:items-center lg:w-auto'>
				<div className='flex flex-row text-sm lg:flex-grow justify-center'>
					{
						navItems.map((item) => (
							<a
								key={`nav-item--${item.link}`}
								href={item.link}
								className='block pt-8 mt-4 lg:inline-block lg:mt-0 text-teal-200 mx-8 text-hs-lg text-ultrablue hover:text-darkblue'
							>
								{item.title}
							</a>
						))
					}
					<Countdown dateTo={'July 20, 2021 12:00:00'} />
				</div>
				<div>
					<a
						href='#'
						className='text-sm px-4 py-2 leading-none rounded-l-full text-white mt-4 lg:mt-0 bg-purpledark flex flex-row hover:bg-purple'
						style={{ width: '188px', height: '56px' }}
					>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img src={'/icons/metamask.svg'} alt='metamask' />
						<p className='text-hs-button m-auto'>
							Connect
						</p>
					</a>
				</div>
			</div>
		</nav>
	)
}
