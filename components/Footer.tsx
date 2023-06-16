import config from '@/config'
import social from '@/config/social'
import { useTranslation } from 'next-i18next'
import Icon from './Icon'

const Footer = () => {
  const { t } = useTranslation('common')

  return (
    <div className="bg-[#F1F1F1] dark:bg-gray-900">
      <div className="max-w-6xl  mx-auto px-4 py-10 md:py-20">
        <div className="h-0.5 w-full bg-white dark:bg-gray-700"></div>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center mt-8">
          <div>
            <p>&copy; {config.fullName}. All Rights Reserved.</p>
          </div>
          <div>
            {/* Support me by keeping this in the footer, please. :) */}
            <div>
              Developed by
              <div className="inline-block transform hover:scale-110 hover:-rotate-3 transition duration-300">
                <a
                  className="hover:bg-red-500 rounded-md px-2 py-1  hover:text-gray-50"
                  href={config.githubUrl}
                >
                  {t('site_name')}
                </a>
              </div>
            </div>
          </div>
          <div className="space-x-4 flex flex-row items-center">
            {social.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target={item.external ? '_blank' : ''}
                className="text-base font-normal text-gray-600 dark:text-gray-300"
              >
                <Icon icon={item.icon} size={16} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
