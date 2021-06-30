import Image from 'next/image'
import Logo from '../../public/images/logo.png'
import {data as navItems} from './Nav.items.json'
import {useState} from 'react'
import Countdown from '../Countdown/Countdown'

export default function Nav() {
	const [showMobileNav, setShowMobileNav] = useState(false)

	return (
		<nav className='absolute w-full flex items-center justify-between flex-wrap'>
			<div className='flex items-center flex-shrink-0 text-white mr-6 pl-8 lg:pl-16 p-6'>
				<a href={'/'}>
					<Image alt={'logo'} src={Logo} width={72} height={72}/>
				</a>
			</div>
			<div className='block lg:hidden'>
				<button
					className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white mr-4'
					onClick={() => setShowMobileNav(!showMobileNav)}
				>
					<svg className='fill-current h-3 w-3' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
						<title>Menu</title>
						<path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'/>
					</svg>
				</button>
				{
					showMobileNav && (
						<nav
							className='absolute md:relative top-32 left-0 md:top-0 z-20 md:flex flex-col md:flex-row md:space-x-6 font-semibold w-full md:w-auto bg-white shadow-md rounded-lg md:rounded-none md:shadow-none md:bg-transparent p-6 md:p-0'>
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
			<div className='w-full block flex-grow hidden lg:flex lg:items-center lg:w-auto'>
				<div className='flex flex-row text-sm lg:flex-grow justify-center'>
					{
						navItems.map((item) => (
							<a
								key={`nav-item--${item.link}`}
								href={item.link}
								className='block pt-4 mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mx-8 text-xl text-ultrablue hover:text-darkblue'
							>
								{item.title}
							</a>
						))
					}
					<Countdown dateTo={'Jan 20, 2022 15:37:25'} />
				</div>
				<div>
					<a
						href='#'
						className='inline-block text-sm px-4 py-2 leading-none rounded-l-3xl text-white mt-4 lg:mt-0 bg-purpledark flex flex-row hover:bg-purple'
					>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img src={'/icons/metamask.svg'} />
						<p className='mt-3 ml-3 font-bold'>
							Connect
						</p>
					</a>
				</div>
			</div>
		</nav>
	)
}