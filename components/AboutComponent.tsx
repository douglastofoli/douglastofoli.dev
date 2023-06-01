import { useTranslation } from 'next-i18next'
import ContactComponent from './About/ContactComponent'
import TechStackComponent from './About/TechStackComponent'
import config from '@/config'

const AboutComponent = () => {
  const { t } = useTranslation('about')

  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          {t('title')}
        </h1>
      </div>
      <div className="bg-[#f1f1f1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold mx-4"
            style={{ lineHeight: '3rem' }}
          >
            {t('sub_title')}{' '}
            <a
              className="bg-purple-500 rounded-md px-2 py-1 text-white transition duration-500 hover:bg-purple-600"
              href={t('current_project_url')}
            >
              {t('current_project_name')} 🚀
            </a>
          </p>
        </div>
      </div>
      <div className="bg-[#f1f1f1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <ContactComponent />
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                {t('jobOpportunities.title')}
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                {config.lookingForAJob ? (
                  <>
                    {t('jobOpportunities.description.0')}{' '}
                    <a
                      href={t('resume_url')}
                      target="__blank"
                      className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                    >
                      LinkedIn
                    </a>{' '}
                    {t('jobOpportunities.description.1')}
                  </>
                ) : (
                  <>{t('jobOpportunities.description2.0')}</>
                )}
              </p>
            </div>
            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              {t('social_links')}
            </h1>
            <div className="mt-4 ml-4">
              {config.social.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row justify-start items-center"
                >
                  <a
                    href={item.url}
                    className="flex flex-row items-center space-x-4 group"
                  >
                    <div className="my-4">&rarr;</div>
                    <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                      <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                      {item.name}
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            {t('description', { returnObjects: true }).map(
              (description, index) => (
                <p
                  key={index}
                  className="text-xl text-gray-700 mb-4 dark:text-gray-300"
                >
                  {description}
                </p>
              )
            )}

            <TechStackComponent />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutComponent
