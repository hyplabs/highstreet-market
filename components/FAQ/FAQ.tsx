export type FAQItem = {
	question: string,
	answer: string,
}

export default function FAQ ({ items }: { items: FAQItem[] }) {
	return (
		<div className='p-8 lg:p-16 space-y-4 bg-yellow rounded-t-xxl'>
			<h3 className='text-hs-3/2xl lg:text-hs-4xl py-12 font-bold text-center'>
				Frequently Asked Questions
			</h3>
			<div>
				{
					items.map((item, index) => (
						<details className='pb-5' key={`faq-items-${index}`}>
							<summary
								className='flex justify-between items-center text-summary bg-hs-orangish cursor-pointer p-6 text-hs-lg rounded-2xl border-2 border-opacity-50 border-orange shadow-orange-glow mb-4'
							>
								{ item.question }
							</summary>
							<p className='text-dark-grayish-blue text-hs-lg p-12'>
								{ item.answer }
							</p>
						</details>
					))
				}
			</div>
		</div>
	)
}
