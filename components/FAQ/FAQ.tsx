export type FAQItem = {
	question: string,
	answer: string,
}

export default function FAQ ({ items }: { items: FAQItem[] }) {
	return (
		<div className='p-8 lg:p-16 space-y-4 bg-yellow rounded-t-xxl'>
			<h3 className='text-5xl py-12 leading-relaxed font-bold text-center'>
				Frequently Asked Questions
			</h3>
			<div>
				{
					items.map((item, index) => (
						<details className='pb-5' key={`faq-items-${index}`}>
							<summary
								className='flex justify-between items-center text-summary bg-pink cursor-pointer p-6 text-2xl rounded-2xl border-2 border-opacity-50 border-orange hover:shadow-xl'
							>
								{ item.question }
							</summary>
							<p className='text-dark-grayish-blue text-xs text-2xl p-12'>
								{ item.answer }
							</p>
						</details>
					))
				}
			</div>
		</div>
	)
}