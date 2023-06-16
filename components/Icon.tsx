import { IconContext, IconType } from 'react-icons'
// import {
//   BsArrow90DegUp,
//   BsArrowUpRightSquare,
//   BsFillMoonFill,
//   BsFillSunFill,
// } from 'react-icons/bs'
// import {
//   FaEnvelope,
//   FaFacebook,
//   FaGithub,
//   FaInstagram,
//   FaLinkedin,
//   FaPhone,
//   FaThumbtack,
// } from 'react-icons/fa'
// import { FiArrowDown } from 'react-icons/fi'
// import { SiElixir, SiJavascript } from 'react-icons/si'

type Props = {
  icon: IconType
  size: number
  color?: string
  className?: string
}

const Icon = ({ icon: IconComponent, size, color, className }: Props) => {
  const sizeString = `${size}px`

  return (
    <IconContext.Provider value={{ size: sizeString, color: color }}>
      <IconComponent className={className} />
    </IconContext.Provider>
  )
}

export default Icon
