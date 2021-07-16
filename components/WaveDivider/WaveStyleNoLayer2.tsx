import BaseWaveViewPort, { BaseWaveViewPortProps } from "./BaseWaveViewPort";

type Props = BaseWaveViewPortProps

const WaveStyleNoLayer2 = (props: Props) => (
  <BaseWaveViewPort {...props}>
    <path d="M1440 631.965H0V631.964H1440V631.965ZM1440 583.43C1121.5 536.432 986.227 549.195 802.427 566.536C634.448 582.385 425.94 602.057 0 583.43V0.000610352H1440V583.43Z" />
  </BaseWaveViewPort>
)

export default WaveStyleNoLayer2
