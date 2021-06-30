import {useState, useEffect} from 'react'

export default function Countdown({dateTo}: { dateTo: string | Date }) {
	const [countdownValues, setCountdownValues] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	})

	useEffect(() => {
		const interval = setInterval(() => {
			const countdownDateTo = new Date(dateTo).getTime()
			const now = new Date().getTime()

			const diff = countdownDateTo - now

			const days = Math.floor(diff / (1000 * 60 * 60 * 24))
			const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
			const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
			const seconds = Math.floor((diff % (1000 * 60)) / 1000)

			setCountdownValues({
				days,
				hours,
				minutes,
				seconds,
			})
		}, 1000)

		return () => clearInterval(interval)
	}, [])

	return (
		<div className='flex flex-row text-ultrablue font-bold text-3xl text-center px-8'>
			<span className='px-4'>
				<p className='leading-5'>{ countdownValues.days }</p>
				<small className='text-lg leading-tight'>Days</small>
			</span>
			<span style={{ lineHeight: 0.5 }}>
				:
			</span>
			<span className='px-4'>
				<p className='leading-5'>{ countdownValues.hours }</p>
				<small className='text-lg leading-tight'>Hours</small>
			</span>
			<span style={{ lineHeight: 0.5 }}>
				:
			</span>
			<span className='px-4'>
				<p className='leading-5'>{ countdownValues.minutes }</p>
				<small className='text-lg leading-tight'>Minutes</small>
			</span>
			<span style={{ lineHeight: 0.5 }}>
				:
			</span>
			<span className='px-4'>
				<p className='leading-5' style={{ opacity: countdownValues.seconds % 2 ? 1 : 0.99 }}>{ countdownValues.seconds }</p>
				<small className='text-lg leading-tight'>Seconds</small>
			</span>
		</div>
	)
}
