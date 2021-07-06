import BaseWaveViewPort, { BaseWaveViewPortProps } from "./BaseWaveViewPort"

type Props = BaseWaveViewPortProps & {
  waveColor: string
}

const WaveStyleLayerSm = ({ fillColor, waveOffsetClass, waveColor }: Props) => (
  <BaseWaveViewPort fillColor={fillColor} waveOffsetClass={waveOffsetClass}>
    <svg y="10">
      <path
        d="M1440 73.8808C830.423 210.808 892 14.4999 0 73.8808V6.10352e-05H1440V73.8808Z"
        fill={waveColor}
      />
    </svg>
    <path d="M1440 62.6508C830.423 178.765 670.035 20.0485 0 62.6508V0H1440V62.6508Z" />
  </BaseWaveViewPort>
)

export default WaveStyleLayerSm
