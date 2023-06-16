import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import Tooltip from './Tooltip'
import '/node_modules/flag-icons/css/flag-icons.min.css'

const LocaleSwitcher = () => {
  const { t } = useTranslation('common')
  const { asPath, locale, push, route } = useRouter()

  const handleChangeLocale = (locale) => {
    push(route, asPath, {
      locale,
    })
  }

  return (
    <Tooltip
      tooltip={
        locale === 'en'
          ? t('tooltip_locale_en_switcher')
          : t('tooltip_locale_br_switcher')
      }
      position="right"
    >
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
