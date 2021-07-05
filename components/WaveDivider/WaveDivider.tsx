import { theme } from '../../tailwind.config'
import styles from './WaveDivider.module.css'

export type WaveDividerProps = {
	flipped?: boolean
	color?: string
	bgColor?: string
	waveColor?: string
}

const defaultProps = {
	flipped: false,
	color: 'purple',
	bgColor: 'white',
	waveColor: 'purple',
}

export default function WaveDivider(props: WaveDividerProps = defaultProps) {
	const { color, flipped, bgColor, waveColor } = { ...defaultProps, ...props }
	const fillColor = theme.extend.colors[color] || color

	return (
		<div className={`${styles.wave} bg-${bgColor}`}>
			<svg
				data-name='Layer 1'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 1440 200'
				preserveAspectRatio='none'
				className={flipped ? styles.flipped : ''}
				style={{ fill: fillColor }}
			>
				<path
					d="M0 0H1440C1440 0 1240.79 111.185 1098.5 121.175C939.455 132.342 861.985 26.4321 702.5 28.634C551.896 30.7134 480.249 130.969 330 121.175C191.83 112.169 0 0 0 0Z"
				/>
				<path
					d="M0 0V102C0 102 213.537 187.629 352 187.629C450.579 187.629 509.204 149.171 562.788 114.021C638.3 64.4849 703.801 21.5166 857 102C1104.65 232.104 1255.17 141.472 1355.03 81.3364C1388.44 61.2188 1416.19 44.5142 1440 40.6287V0C1440 0 1240.79 110.313 1098.5 120.303C1016.6 126.054 956.333 100.76 895.359 75.1689C837.922 51.0632 779.859 26.6943 702.5 27.7625C630.386 28.7581 576.375 52.2634 523.17 75.4185C465.26 100.621 408.305 125.408 330 120.303C191.83 111.297 0 0 0 0Z"
					fill={waveColor}
				/>
			</svg>
		</div>
	)
}
