import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Icon from './Icon'
import Tooltip from './Tooltip'

const ThemeSwitcher = () => {
  const { t } = useTranslation('common')
  const { theme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {mounted && (
        <Tooltip
          tooltip={t(`tooltip_theme_${theme}_switcher`)}
          position="right"
        >
          <button
            type="button"
            className="w-10 h-10 p-3 rounded focus:outline-none"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? (
              <Icon
                name="FillSunFill"
                size={24}
                className="w-4 h-4 text-yellow-500 dark:text-yellow-500"
              />
            ) : (
              <Icon
                name="FillMoonFill"
                size={24}
                className="w-4 h-4 text-yellow-500 dark:text-yellow-500"
              />
            )}
          </button>
        </Tooltip>
      )}
    </>
  )
}

export default ThemeSwitcher
