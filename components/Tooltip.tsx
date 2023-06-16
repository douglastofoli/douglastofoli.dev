type Position = 'right' | 'left' | 'top' | 'bottom'

type Props = {
  children: React.ReactNode
  tooltip: string
  position?: Position
}

const Tooltip = ({ children, tooltip, position = 'top' }: Props) => {
  let tooltipClasses =
    'absolute bg-gray-800 dark:bg-gray-700 text-white dark:text-gray-200 text-base px-4 py-2 rounded pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300'

  if (position === 'right') {
    tooltipClasses += ' right-full top-1/2 transform -translate-y-1/2'
  } else if (position === 'left') {
    tooltipClasses += ' left-full top-1/2 transform -translate-y-1/2'
  } else if (position === 'top') {
    tooltipClasses += ' bottom-full left-1/2 transform -translate-x-1/2'
  } else if (position === 'bottom') {
    tooltipClasses += ' top-full left-1/2 transform -translate-x-1/2'
  }

  return (
    <div className="group relative">
      {children}
      <span className={tooltipClasses}>
        <span className="whitespace-nowrap">{tooltip}</span>
      </span>
    </div>
  )
}

export default Tooltip
