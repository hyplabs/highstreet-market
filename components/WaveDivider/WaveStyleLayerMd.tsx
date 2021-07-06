import BaseWaveViewPort, { BaseWaveViewPortProps } from "./BaseWaveViewPort"

type Props = BaseWaveViewPortProps & {
  waveColor: string
}

const WaveStyleLayerMd = ({ waveOffsetClass, fillColor, waveColor }: Props) => (
  <BaseWaveViewPort waveOffsetClass={waveOffsetClass} fillColor={fillColor}>
    <path
      d="M0 109.01C0 109.01 201.746 -1.18321 352 0.00961467C498.326 1.17125 625.683 146.493 772 148.5C925.243 150.602 969.824 22.9868 1123 27.9945C1260.69 32.4959 1440 109.01 1440 109.01V829.01H0V109.01Z"
      fill={waveColor}
    />
    <svg y='50'>
      <path
        d="M0 125.724C0 125.724 218.746 -1.19249 369 0.181369C515.326 1.51931 581.183 123.413 727.5 125.724C880.743 128.145 951.324 -5.58639 1104.5 0.181369C1242.19 5.36596 1440 125.724 1440 125.724V955H0V125.724Z"
      />
    </svg>
  </BaseWaveViewPort>
)

export default WaveStyleLayerMd
