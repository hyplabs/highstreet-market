import {useState} from 'react'
import styles from './JoinForm.module.css'

type JoinFormCardProps = {
	inputId: string
	inputName: string
	inputValue: string
	imageSrc: string
	imageAlt: string
	text: string
	onClick: () => void
	checked: boolean
}

const JoinFormCard = ({ inputId, inputName, inputValue, imageSrc, imageAlt, onClick, checked, text }: JoinFormCardProps) => (
	<div className={`flex flex-col rounded-lg  cursor-pointer bg-white ${checked ? 'bg-opacity-70 font-bold' : 'bg-opacity-25'} w-100px lg:w-full h-160px items-center`} onClick={onClick}>
		<input className={styles.joinFormRadio} type='radio' id={inputId} name={inputName} value={inputValue} checked={checked} readOnly />
		<div className='h-100px'>
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img
				src={imageSrc}
				alt={imageAlt}
			/>
		</div>
		<p className='text-black justify-center text-hs-button'>
			{text}
		</p>
	</div>
)

export default function JoinForm() {
	const [joinAs, setJoinAs] = useState('creator')
	const [email, setEmail] = useState('')
	const [device, setDevice] = useState('')
	const [showThankYou, setShowThankYou] = useState(false);

	const joinAsTypes: JoinFormCardProps[] = [
		{
			inputId: 'contractChoice1',
			inputName: 'creator',
			inputValue: 'creator',
			imageSrc: '/icons/robot.svg',
			imageAlt: 'creator',
			text: 'Creator',
			onClick: () => setJoinAs('creator'),
			checked: joinAs === 'creator',
		},
		{
			inputId: 'contractChoice2',
			inputName: 'gamer',
			inputValue: 'gamer',
			imageSrc: '/icons/gamer.svg',
			imageAlt: 'gamer',
			text: 'Gamer',
			onClick: () => setJoinAs('gamer'),
			checked: joinAs === 'gamer',
		},
		{
			inputId: 'contractChoice3',
			inputName: 'enthusiast',
			inputValue: 'enthusiast',
			imageSrc: '/icons/enthusiast.svg',
			imageAlt: 'enthusiast',
			text: 'Crypto Enthusiast',
			onClick: () => setJoinAs('enthusiast'),
			checked: joinAs === 'enthusiast',
		},
	]

	const joinSubmit = (data: any) => {
		fetch('/api/community', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'content-type': 'application/json'
			}
		})
			.then((res) => res.json())
			.then(() => {
				setShowThankYou(true);
			});
	}

	const form = (
		<section className={`${styles.joinForm} p-4 lg:p-0 mt-32 rounded-xxl`} style={{minHeight: 300}}>
			<h3 className='text-white text-hs-2xl lg:text-hs-5xl font-bold pt-16 pb-8 text-center lg:text-left lg:pl-16'>
				Start Your Journey
			</h3>
			<p className='text-white pb-6 pl-2 text-left text-hs-lg lg:pl-16 lg:text-hs-2large' style={{ maxWidth: '807px' }}>
				Join our community and stay tuned for when you can be among the first to journey to the HighStreet Metaverse
			</p>
			<form id={'join-metaverse-form'}>
				<div className='px-2 lg:px-0'>
					<input
						className='text-hs-button mx-auto w-full md:w-3/4 lg:w-2/3 bg-gray-200 appearance-none border-2 border-gray-200 rounded mt-12 mb-6 py-3 px-4 pr-8 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple'
						id='email'
						type='email'
						placeholder='me@example.com'
						style={{minWidth: 300}}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<select
						className='text-hs-button mx-auto w-full md:w-3/4 lg:w-2/3 block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
						id='device'
						placeholder='Device'
						style={{minWidth: 300}}
						onChange={(e) => setDevice(e.target.value)}
					>
						<option selected disabled>
							Choose your VR Device
						</option>
						{
							[
								'HTC Vive/VivePro/VivePro2',
								'Windows Mixed Reality',
								'Oculus Rift/RiftS',
								'Oculus Quest with PC',
								'Valve Index',
								'Other PCVR device',
								'I do not have a VR device yet',
								'I only want to buy products on web'
							].map((device, index) => (
								<option key={`device-select-${index}`} value={device}>
									{device}
								</option>
							))
						}
					</select>
				</div>
				<div className='container mx-auto w-full md:w-3/4 lg:w-2/3 mt-12 px-2 lg:px-0'>
					<p className='text-left text-hs-md lg:text-hs-lg text-white pb-8'>
						I consider myself a...
					</p>
					<div className='flex space-x-4 items-center justify-center'>
						{joinAsTypes.map((props) => <JoinFormCard {...props} key={props.inputValue} />)}
					</div>
				</div>
				<button
					type='submit'
					className='text-hs-button my-24 px-10 py-4 rounded-xl text-white bg-gradient-to-b from-purple to-darkishpurple'
					onClick={(e) => {
						e.preventDefault()
						joinSubmit({ email, device, joinAs })
					}}
					style={{ width: '277px' }}
				>
					Join Our Alpha
				</button>
			</form>
		</section>
	)

	const thankYou = (
		<section className={`${styles.joinForm} p-4 lg:p-0 lg:rounded-3xl md:mx-24 md:my-36`}>
			<h3 className='text-white text-5xl font-bold' style={{ paddingTop: 250, paddingBottom: 250 }}>
				Thank you for joining!
			</h3>
		</section>
	);

	return showThankYou ? thankYou : form;
}
