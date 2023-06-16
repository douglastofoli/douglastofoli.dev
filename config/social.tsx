import { IconType } from 'react-icons'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

type Social = {
  name: string
  icon: IconType
  url: string
  external: boolean
}

const social: Social[] = [
  {
    name: 'Instagram',
    icon: FaInstagram,
    url: 'https://www.instagram.com/douglastofoli',
    external: true,
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/douglastofoli',
    external: true,
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://linkedin.com/in/douglastofoli',
    external: true,
  },
]

export default social
