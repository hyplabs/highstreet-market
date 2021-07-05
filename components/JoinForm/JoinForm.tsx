import {useState} from 'react'
import styles from './JoinForm.module.css'

export default function JoinForm() {
	const [joinAs, setJoinAs] = useState('')

	return (
		<section className={`${styles.joinForm} p-10 lg:p-0 lg:rounded-3xl md:mx-24 md:my-36`} style={{minHeight: 300}}>
			<h3 className='text-white text-5xl font-bold pt-16 pb-8'>
				Book Your Tickets
			</h3>
			<p className='text-white text-2xl pb-6'>
				Join our community and stay tuned for when you can be among the first to journey to the HighStreet Metaverse
			</p>
			<form id={'join-metaverse-form'}>
				<input
					className='mx-auto w-full md:w-3/4 lg:w-2/3 bg-gray-200 appearance-none border-2 border-gray-200 rounded my-12 py-3 px-4 pr-8 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple'
					id='email'
					type='email'
					placeholder='me@example.com'
					style={{minWidth: 300}}
				/>
				<select
					className='mx-auto w-full md:w-3/4 lg:w-2/3 block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
					id='device'
					placeholder='Device'
					style={{minWidth: 300}}
				>
					<option selected={true} disabled={true}>
						Select Device
					</option>
					{
						[
							'HTC Vive/VivePro/VivePro2',
							'Windows Mixed Reality',
							'Oculus Rift/RiftS',
							'Oculus Quest with PC',
							'Valve Index',
							'Other PCVR device'
						].map((device, index) => (
							<option key={`device-select-${index}`} value={device}>
								{device}
							</option>
						))
					}
				</select>
				<div className='container mx-auto w-full md:w-3/4 lg:w-2/3 mt-12'>
					<p className='text-left text-xl text-white pb-8'>
						I consider myself ...
					</p>
					<div className='grid grid-cols-3 gap-4'>
						<div className='border-purple border-2 bg-opacity-20 bg-white cursor-pointer' onClick={() => setJoinAs('creator')}>
							<input className={styles.joinFormRadio} type='radio' id='contactChoice1' name='contact' value='creator' checked={joinAs === 'creator'}/>
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img
								src={'/icons/robot.svg'}
								className={`w-66p lg:w-5/6 ${styles.joinFormRadioImage}`}
								alt={'enthusiast'}
							/>
							<p className='text-white text-xl'>
								Creator
							</p>
						</div>
						<div className='border-purple border-2 bg-opacity-20 bg-white cursor-pointer' onClick={() => setJoinAs('gamer')}>
							<input className={styles.joinFormRadio} type='radio' id='contactChoice2' name='gamer' value='gamer' checked={joinAs === 'gamer'}/>
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img
								src={'/icons/gamer.svg'}
								className={`w-66p lg:w-5/6 ${styles.joinFormRadioImage}`}
								alt={'enthusiast'}
							/>
							<p className='text-white text-xl'>
								Gamer
							</p>
						</div>
						<div className='border-purple border-2 bg-opacity-20 bg-white cursor-pointer' onClick={() => setJoinAs('enthusiast')}>
							<input className={styles.joinFormRadio} type='radio' id='contactChoice3' name='enthusiast' value='enthusiast' checked={joinAs === 'enthusiast'}/>
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img
								src={'/icons/enthusiast.svg'}
								className={`w-66p lg:w-5/6 ${styles.joinFormRadioImage}`}
								alt={'enthusiast'}
							/>
							<p className='text-white text-xl'>
								Crypto Enthusiast
							</p>
						</div>
					</div>
				</div>
				<button
					type='submit'
					className='my-24 px-10 py-4 rounded-xl text-white bg-gradient-to-b from-purplelight to-purple'
				>
					Join Our Alpha
				</button>
			</form>
		</section>
	)
}