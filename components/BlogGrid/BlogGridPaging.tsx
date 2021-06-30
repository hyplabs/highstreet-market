type BlogGridPagingProps = {
	totalItems: number,
	itemsPerPage: number,
	currentPage: number,
	onPageClick: Function
}

export default function BlogGridPaging({ totalItems, itemsPerPage, currentPage, onPageClick }: BlogGridPagingProps) {
	const totalPages = Math.ceil(totalItems / itemsPerPage)

	if (totalItems <= itemsPerPage) {
		return <></>
	}

	return (
		<div className='flex flex-col items-center my-12'>
			<div className='flex text-gray-700'>
				<div
					className='h-4 w-4 mr-1 flex justify-center items-center rounded-full cursor-pointer'
					onClick={() => onPageClick(currentPage > 1 ? currentPage - 1 : totalPages)}
				>
					<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' fill='none' viewBox='0 0 24 24'
							 stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'
							 className='feather feather-chevron-left w-4 h-4'>
						<polyline points='15 18 9 12 15 6'/>
					</svg>
				</div>
				<div className='flex h-4 font-medium rounded-full'>
					{
						new Array(totalPages).fill(null).map((_, index) => (
							<div
								key={`blog-grid-paging-${index}`}
								className={
									`w-4 h-4 md:flex justify-center items-center cursor-pointer 
									 leading-5 transition duration-150 ease-in rounded-full mx-2
									 ${currentPage === index + 1 ? 'bg-purple' : 'bg-pink'}`
								}
								onClick={() => onPageClick(index + 1)}
							/>
						))
					}
				</div>
				<div
					className='h-4 w-4 ml-1 flex justify-center items-center rounded-full cursor-pointer'
					onClick={() => onPageClick(currentPage < totalPages ? currentPage + 1 : 1)}
				>
					<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' fill='none' viewBox='0 0 24 24'
							 stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'
							 className='feather feather-chevron-right w-4 h-4'>
						<polyline points='9 18 15 12 9 6'/>
					</svg>
				</div>
			</div>
		</div>
	)
}