import { useRouter } from 'next/router'
import Link from 'next/link'
import Icon from './Icon'
import LocaleSwitcher from './LocaleSwitcher'
import ThemeSwitcher from './ThemeSwitcher'
import config from '@/config'

const Navbar = () => {
  const { asPath, locale, push, route } = useRouter()

  const title = config[locale].title
  const designation = config[locale].designation
  const navbar = config[locale].navbar

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 md:py-200">
      <div className="flex md:flex-row justify-between items-center">
        <div className="flex flex-col">
          <Link href="/">
            <h1 className="font-semibold text-xl dark:text-gray-100">
              {title}
            </h1>
            <p className="text-base font-light text-gray-500 dark:text-gray-300">
              {designation}
            </p>
          </Link>
        </div>

        <div className="space-x-8 hidden md:block">
          {navbar.paths.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className={`text-base  ${
                asPath === `${item.path}`
                  ? 'text-gray-800 font-bold dark:text-gray-400'
                  : 'text-gray-600 dark:text-gray-300 font-normal '
              }`}
            >
              {item.name}{' '}
              {asPath === item.path && (
                <Icon
                  name="ArrowDown"
                  size={16}
                  className="inline-block h-4 w-4"
                />
              )}
            </Link>
          ))}
        </div>

        <div className="space-x-4 flex flex-row items-center">
          {config.social.map((item, index) => (
            <a
              key={index}
              href={item.url}
              title={item.name}
              targert={item.external && '_blank'}
            >
              <Icon
                name={item.name}
                size={16}
                className="text-gray-600 dark:text-gray-300 h-5 w-5"
              />
            </a>
          ))}

          <ThemeSwitcher />
          <LocaleSwitcher />
        </div>
      </div>

      <div className="space-x-8 block md:hidden mt-4">
        {navbar.paths.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className="text-base font-normal text-gray-600 dark:text-gray-300"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar
