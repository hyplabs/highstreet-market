import Image from 'next/image'
import {useEffect, useState} from 'react'
import BlogGridPaging from './BlogGridPaging'
import ShareIcon from '../../public/icons/share.svg'

export type BlogGridItem = {
	title: string,
	date: string,
	link: string,
	text?: string,
	thumbnail?: string
}

export type BlogGridProps = {
	itemsPerPage: number,
	feedUrl: string
}

const defaultProps: Partial<BlogGridProps> = {
	itemsPerPage: 3,
	feedUrl: 'https://medium.com/feed/lumierevr'
}

export default function BlogGrid(props: BlogGridProps) {
	const [currentPage, setCurrentPage] = useState(1)
	const [currentData, setCurrentData] = useState([] as BlogGridItem[])
	const filledProps: BlogGridProps = {...defaultProps, ...props}

	const rssUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURI(filledProps.feedUrl)}`

	useEffect(() => {
		fetch(rssUrl)
			.then((res) => res.json())
			.then((data) => setCurrentData(data.items.map(({ title, pubDate, link, thumbnail }: Record<string, any>) => ({
				title: decodeURI(title),
				date: pubDate.replace(/-/g, '/'), // YYYY-MM-DD HH:MM:SS format is not supported on Safari, changed it to YYYY/MM/DD HH:MM:SS
				link,
				thumbnail,
			}))))
	}, [rssUrl])

	return (
		<section className='p-12 px-8'>
			<h3 className='font-medium text-hs-3xl lg:text-hs-6xl lg:pl-16 text-center py-10 pb-16'>
				Word on The Street
			</h3>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-12 container mx-auto'>
				{
					currentData.slice((currentPage - 1) * props.itemsPerPage, currentPage * props.itemsPerPage).map((item, index) => (
						<div key={`blog-item-${index}`} className='bg-pink rounded-xl pl-4 border border-softviolet shadow-lg relative' style={{ minHeight: 298 }}>
							<p className='p-4 pl-0 text-hs-sm'>
								{ new Date(item.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) }
							</p>
							<hr className='border-b-1 border-softviolet' />
							<h4 className='p-4 pl-0 text-hs-large lg:text-hs-xl'>
								<a href={item.link || '#'} target={'_blank'} rel={'noreferrer'}>
									{ item.title }
								</a>
							</h4>
							<a>
								<p className='absolute bottom-4 right-4 uppercase flex flex-row space-x-2 text-hs-md text-purple1'>
									<Image src={ShareIcon} width={14} height={14} alt='Share Icon' />
									<span>Share</span>
								</p>
							</a>
						</div>
					))
				}
			</div>
			<BlogGridPaging
				totalItems={currentData.length}
				itemsPerPage={filledProps.itemsPerPage}
				currentPage={currentPage}
				onPageClick={setCurrentPage}
			/>
		</section>
	)
}
