import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Icon from './Icon'
import config from '@/config'

export default function Navbar() {
  const { asPath, locale, push, route } = useRouter()
  const { theme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false)

  const navbar = config[locale].navbar

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleChangeLocale = (event) => {
    const value = event.target.value

    push(route, asPath, {
      locale: value,
    })
  }

  return (
    <div className="max-w-6xl  mx-auto px-4 py-10 md:py-20">
      <div className="flex md:flex-row justify-between items-center">
        <div className="flex flex-col">
          <Link href="/">
            <h1 className="font-semibold text-xl dark:text-gray-100">
              {config.title}
            </h1>
            <p className="text-base font-light text-gray-500 dark:text-gray-300">
              {config.titleRole}
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
              <Icon name={item.name} size={16} className="h-5 w-5" />
            </a>
          ))}
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-10 h-10 p-3 rounded focus:outline-none"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="w-4 h-4 text-yellow-500 dark:text-yellow-500"
              >
                {theme === 'dark' ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
          <select onChange={handleChangeLocale} value={locale}>
            <option value="en">🇺🇸 {navbar.language.en}</option>
            <option value="br">🇧🇷 {navbar.language.br}</option>
          </select>
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
