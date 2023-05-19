type Props = {
  childrenn: React.ReactNode
  text: string
}

const Tooltip = ({ children, text }: Props) => {
  return (
    <div className="group relative flex">
      {children}
      <span className="absolute top-[-40px] -translate-x-1/2 left-1/2 scale-0 transition-all transform-gpu origin-bottom bg-gray-800 dark:bg-gray-700 text-white dark:text-gray-200 text-base px-4 py-2 rounded pointer-events-none group-hover:scale-100">
        {text}
      </span>
    </div>
  )
}

export default Tooltip
