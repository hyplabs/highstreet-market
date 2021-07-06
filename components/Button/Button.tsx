export enum ButtonType {
	DARK = 'dark',
	LIGHT = 'light',
	WHITE = 'white',
	BORDERED = 'bordered'
}

type ButtonProps = {
	type: ButtonType
	text: string
	url: string
	className?: string
	newTab?: boolean
	whiteGlow?: boolean
}

export default function Button({ type, text, url, className, newTab, whiteGlow }: ButtonProps) {
	const typesMap = {
		[ButtonType.DARK]: 'bg-black text-white',
		[ButtonType.LIGHT]: '',
		[ButtonType.WHITE]: 'bg-white text-blue font-light',
		[ButtonType.BORDERED]: 'border-2 border-black'
	}

	return (
		<div className={`rounded-large ${whiteGlow ? 'shadow-white-glow lg:shadow-none' : ''}`}>
			<a
				href={url}
				className={
					`w-full flex items-center justify-center py-3
					text-button font-medium rounded-large md:py-4
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
