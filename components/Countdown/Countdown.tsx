import {useState, useEffect} from 'react'
import {
	DAY_IN_MS,
	HOUR_IN_MS,
	MIN_IN_MS,
	SEC_IN_MS,
} from 'utils/constants'

type CountdownProps = {
	dateTo: string | Date
	className?: string
}

export default function Countdown({ dateTo, className }: CountdownProps) {
	const [countdownValues, setCountdownValues] = useState({
		days: '00',
		hours: '00',
		minutes: '00',
		seconds: '00',
	})

	useEffect(() => {
		const interval = setInterval(() => {
			const countdownDateTo = new Date(dateTo).getTime()
			const now = new Date().getTime()

			const diff = countdownDateTo - now

			const format = (n: number) => Math.floor(n).toString().padStart(2, '0')

			const days = format(diff / DAY_IN_MS)
			const hours = format((diff % DAY_IN_MS) / HOUR_IN_MS)
			const minutes = format((diff % HOUR_IN_MS) / MIN_IN_MS)
			const seconds = format((diff % MIN_IN_MS) / SEC_IN_MS)

			setCountdownValues({
				days,
				hours,
				minutes,
				seconds,
			})
		}, SEC_IN_MS)

		return () => clearInterval(interval)
	}, [dateTo])

	return (
		<div className={`${className}`}>
			<div
				className='flex flex-row text-ultrablue font-bold text-hs-3xl text-center space-x-3'
			>
				<div className='w-70px'>
					<span className='flex flex-col space-y-4 items-center justify-center'>
						<p className='leading-5'>{ countdownValues.days }</p>
						<small className='text-hs-xs leading-tight uppercase'>Days</small>
					</span>
				</div>
				<span style={{ lineHeight: 0.5 }}>
					:
				</span>
				<div className='w-70px'>
					<span className='flex flex-col space-y-4 items-center justify-center'>
						<p className='leading-5'>{ countdownValues.hours }</p>
						<small className='text-hs-xs leading-tight uppercase'>Hours</small>
					</span>
				</div>
				<span style={{ lineHeight: 0.5 }}>
					:
				</span>
				<div className='w-70px'>
					<span className='flex flex-col space-y-4 items-center justify-center'>
						<p className='leading-5'>{ countdownValues.minutes }</p>
						<small className='text-hs-xs leading-tight uppercase'>Minutes</small>
					</span>
				</div>
				<span style={{ lineHeight: 0.5 }}>
					:
				</span>
				<div className='w-70px'>
					<span className='flex flex-col space-y-4 items-center justify-center'>
						<p className='leading-5'>{ countdownValues.seconds }</p>
						<small className='text-hs-xs leading-tight uppercase'>Seconds</small>
					</span>
				</div>
			</div>
		</div>
	)
}
