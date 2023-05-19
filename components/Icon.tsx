import { IconContext } from 'react-icons'
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { BsArrow90DegUp, BsArrowUpRightSquare } from 'react-icons/bs'
import { FiArrowDown } from 'react-icons/fi'
import { SiElixir, SiJavascript } from 'react-icons/si'

enum IconName {
  'ArrowDown' = FiArrowDown,
  'Arrow90DegUp' = BsArrow90DegUp,
  'ArrowUpRightSquare' = BsArrowUpRightSquare,
  'Facebook' = FaFacebook,
  'GitHub' = FaGithub,
  'LinkedIn' = FaLinkedin,
  'Instagram' = FaInstagram,
  'Elixir' = SiElixir,
  'JavaScript' = SiJavascript,
}

type Props = {
  name: IconName
  size: number
  color?: string
  className?: string
}

const Icon = ({ name, size, color, className }: Props) => {
  const IconComponent = IconName[name]

  return (
    <IconContext.Provider value={{ size: size, color: color }}>
      <IconComponent className={className} />
    </IconContext.Provider>
  )
}

export default Icon
