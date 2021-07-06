export type BaseWaveViewPortProps = {
  waveOffsetClass?: string
  fillColor: string
}

const BaseWaveViewPort: React.FC<BaseWaveViewPortProps> = ({ waveOffsetClass, fillColor, children }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 1440 200'
    preserveAspectRatio='none'
    className={
      `absolute w-1440px h-wave ${waveOffsetClass}
       lg:inset-x-0 lg:w-full`
    }
    style={{ fill: fillColor }}
    overflow='hidden'
  >
    {children}
  </svg>
)

export default BaseWaveViewPort
