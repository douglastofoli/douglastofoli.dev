import { useRouter } from 'next/router'
import Tooltip from './Tooltip'
import config from '@/config'

import '/node_modules/flag-icons/css/flag-icons.min.css'

const LocaleSwitcher = () => {
  const { asPath, locale, push, route } = useRouter()

  const tooltipLabel = config[locale].navbar.language[locale].label

  const handleChangeLocale = (locale) => {
    push(route, asPath, {
      locale,
    })
  }

  return (
    <Tooltip text={tooltipLabel} position="right">
      <button
        type="button"
        className="w-10 h-10 rounded focus:outline-none"
        onClick={() => handleChangeLocale(locale === 'br' ? 'en' : 'br')}
      >
        {locale === 'br' ? (
          <span className="fi fi-us rounded"></span>
        ) : (
          locale === 'en' && <span className="fi fi-br rounded"></span>
        )}
      </button>
    </Tooltip>
  )
}

export default LocaleSwitcher
