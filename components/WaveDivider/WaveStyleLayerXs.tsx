import BaseWaveViewPort, { BaseWaveViewPortProps } from "./BaseWaveViewPort"

type Props = BaseWaveViewPortProps & {
  waveColor: string
}

const WaveStyleLayerXs = ({ fillColor, waveOffsetClass, waveColor }: Props) => (
  <BaseWaveViewPort fillColor={fillColor} waveOffsetClass={waveOffsetClass}>
    <svg y='70'>
      <path
        d="M0 55.4076C700 -91.5929 769.965 105.833 1440 58.4076V117.907H0V55.4076Z"
        fill={waveColor}
      />
    </svg>
    <svg y="82">
      <path
        d="M0 48.2566C609.577 -81.0023 769.965 95.6819 1440 48.2566V118H0V48.2566Z"
      />
    </svg>
  </BaseWaveViewPort>
)

export default WaveStyleLayerXs
