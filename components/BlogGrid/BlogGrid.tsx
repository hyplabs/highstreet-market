import {useEffect, useState} from 'react'
import BlogGridPaging from './BlogGridPaging'

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
		<section className='p-12'>
			<h3 className='font-medium text-5xl text-center py-10 pb-16'>
				Word on The Street
			</h3>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-12 container mx-auto'>
				{
					currentData.slice((currentPage - 1) * props.itemsPerPage, currentPage * props.itemsPerPage).map((item, index) => (
						<div key={`blog-item-${index}`} className='bg-pink rounded-xl pl-4 border-2 border-purple' style={{ minHeight: 228 }}>
							<p className='p-4'>
								{ new Date(item.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) }
							</p>
							<hr className='border-b-2 border-purple' />
							<h4 className='p-4 text-3xl pr-8'>
								<a href={item.link || '#'} target={'_blank'} rel={'noreferrer'}>
									{ item.title }
								</a>
							</h4>
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
