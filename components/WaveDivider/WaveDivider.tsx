import { theme } from 'tailwind.config'
import styles from './WaveDivider.module.css'
import WaveStyleLayerLg from './WaveStyleLayerLg'
import WaveStyleLayerMd from './WaveStyleLayerMd'
import WaveStyleLayerSm from './WaveStyleLayerSm'
import WaveStyleLayerXs from './WaveStyleLayerXs'
import WaveStyleNoLayer from './WaveStyleNoLayer'
import WaveStyleNoLayer2 from './WaveStyleNoLayer2'

export enum WaveStyle {
	LG,
	MD,
	SM,
	XS,
	NO_LAYER,
	NO_LAYER2,
}

export type WaveDividerProps = {
	color: string
	bgColor?: string
	waveColor?: string
	waveOffsetClass?: string
	viewBox?: string
	height?: string | number
	waveStyle: WaveStyle
}

const defaultProps = {
	bgColor: 'white',
	waveColor: '',
	waveOffsetClass: 'left-wave-middle',
}

export default function WaveDivider(props: WaveDividerProps) {
	const { color, bgColor, waveColor, waveOffsetClass, viewBox, height, waveStyle } = { ...defaultProps, ...props }
	const fillColor = theme.extend.colors[color] || color

	const getWave = () => {
		const props = {
			fillColor,
			waveColor,
			waveOffsetClass,
			viewBox,
			height,
		}

		switch(waveStyle) {
			case WaveStyle.LG:
				return <WaveStyleLayerLg {...props} />
			case WaveStyle.MD:
				return <WaveStyleLayerMd {...props} />
			case WaveStyle.SM:
				return <WaveStyleLayerSm {...props} />
			case WaveStyle.XS:
				return <WaveStyleLayerXs {...props} />
			case WaveStyle.NO_LAYER:
				return <WaveStyleNoLayer {...props} />
			case WaveStyle.NO_LAYER2:
				return <WaveStyleNoLayer2 {...props} />
			default:
				return <></>
		}
	}

	return (
		<div
			className={`${styles.wave} bg-${bgColor} overflow-x-hidden relative -z-20`}
		>
			{getWave()}
		</div>
	)
}
