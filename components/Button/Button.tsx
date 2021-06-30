export enum ButtonType {
	DARK = 'dark',
	LIGHT = 'light',
	WHITE = 'white',
	BORDERED = 'bordered'
}

export default function Button({type, text, url, className, newTab}: { type: ButtonType, text: string, url: string, className?: string, newTab?: boolean }) {
	const typesMap = {
		[ButtonType.DARK]: 'bg-black text-white',
		[ButtonType.LIGHT]: '',
		[ButtonType.WHITE]: 'bg-white text-blue font-light',
		[ButtonType.BORDERED]: 'border-black'
	}

	return (
		<div className='rounded-md shadow'>
			<a
				href={url}
				className={
					`w-full flex items-center justify-center px-8 py-3 border border-transparent
					text-base font-medium rounded-md md:py-4 md:text-lg md:px-10
					${typesMap[type] || ''} ${className || ''}`
				}
				target={newTab ? '_blank' : '_self'}
				rel={'noreferrer'}
			>
				{text}
			</a>
		</div>
	)
}
