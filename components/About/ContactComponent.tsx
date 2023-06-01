import { useTranslation } from 'next-i18next'
import config from '@/config'

const ContactComponent = () => {
  const { t } = useTranslation('about')

  return (
    <div>
      <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
        {t('contact.title')}
      </h1>
      <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
        {t('contact.description.0')}{' '}
        <a
          href={`mailto:${config.email}`}
          className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
        >
          {t('email')}
        </a>{' '}
        {t('contact.description.1')}
      </p>
    </div>
  )
}

export default ContactComponent
