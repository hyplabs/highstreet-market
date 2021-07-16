import Image from 'next/image'
import Logo from 'public/icons/logo.svg'
import MetaMask from 'public/icons/metamask.svg'
import Countdown from 'components/Countdown/Countdown'
import Dropdown from 'components/Dropdown/Dropdown'
import NavItems from './Nav.items.json'

type NavProps = {
	excludeMiddle?: boolean
}

export default function Nav({ excludeMiddle }: NavProps) {
	const { data: navItems } = NavItems

	return (
		<nav className='absolute w-full flex items-center justify-between pt-4 z-10 lg:flex-wrap'>
			<div className='flex items-center flex-shrink-0 text-white mr-6 pl-8 lg:pl-28 p-6'>
				<a href={'/'}>
					<div className='lg:w-logo-lg lg:h-logo-lg w-logo-sm h-logo-sm'>
						<Image alt={'logo'} src={Logo}/>
					</div>
				</a>
			</div>
			{!excludeMiddle &&
				<Dropdown
					className='lg:hidden'
					itemsClassName='w-1/2screen font-semibold mt-2'
					button={
						<div
							className='flex items-center px-3 py-2 mr-4 ml-auto'
						>
							<div className='space-y-2'>
								<div className='w-32px h-4px bg-ultrablue' />
								<div className='w-32px h-4px bg-ultrablue' />
							</div>
						</div>
					}
					items={navItems.map((item, index) => ({
						element: <a href={item.link} className='block py-2 text-indigo-600 hover:underline pl-4'>{item.title}</a>,
						key: `nav-item-mobile--${index}`,
					}))}
				/>
			}
			<div className='w-full flex-grow hidden lg:flex lg:items-center lg:w-auto'>
				{!excludeMiddle &&
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
						<Countdown dateTo={'August 5, 2021 00:00:00'} className='px-8 pt-8' />
					</div>
				}
				<div className='ml-auto'>
					<a
						href='#'
						className='text-sm px-4 py-2 leading-none rounded-l-full text-white mt-4 lg:mt-0 bg-purpledark flex flex-row hover:bg-purple'
						style={{ width: '188px', height: '56px' }}
					>
						<Image src={MetaMask} alt='metamask' width={31} />
						<p className='text-hs-button m-auto'>
							Connect
						</p>
					</a>
				</div>
			</div>
		</nav>
	)
}
