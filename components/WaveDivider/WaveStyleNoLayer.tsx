import BaseWaveViewPort, { BaseWaveViewPortProps } from "./BaseWaveViewPort";

type Props = BaseWaveViewPortProps

const WaveStyleNoLayer = (props: Props) => (
  <BaseWaveViewPort {...props}>
    <path d="M802.427 54.0194C986.227 92.3112 1121.5 120.494 1440 16.7156V1305H0V16.7156C425.94 -24.4155 634.448 19.0238 802.427 54.0194Z" />
  </BaseWaveViewPort>
)

export default WaveStyleNoLayer
