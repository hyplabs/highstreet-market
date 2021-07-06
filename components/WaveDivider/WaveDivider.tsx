import { theme } from '../../tailwind.config'
import styles from './WaveDivider.module.css'
import WaveStyleLayerLg from './WaveStyleLayerLg'
import WaveStyleLayerMd from './WaveStyleLayerMd'
import WaveStyleLayerSm from './WaveStyleLayerSm'
import WaveStyleLayerXs from './WaveStyleLayerXs'
import WaveStyleNoLayer from './WaveStyleNoLayer'

export enum WaveStyle {
	LG,
	MD,
	SM,
	XS,
	NO_LAYER,
}

export type WaveDividerProps = {
	color: string
	bgColor?: string
	waveColor?: string
	waveOffsetClass?: string
	waveStyle: WaveStyle
}

const defaultProps = {
	bgColor: 'white',
	waveColor: '',
	waveOffsetClass: 'left-wave-middle',
}

export default function WaveDivider(props: WaveDividerProps) {
	const { color, bgColor, waveColor, waveOffsetClass, waveStyle } = { ...defaultProps, ...props }
	const fillColor = theme.extend.colors[color] || color

	const getWave = () => {
		const props = {
			fillColor,
			waveColor,
			waveOffsetClass,
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
			default:
				return <></>
		}
	}

	return (
		<div className={`${styles.wave} bg-${bgColor} overflow-x-hidden relative`}>
			{getWave()}
		</div>
	)
}
