import { useRouter } from 'next/router'
import Image from 'next/image'
import Icon from './Icon'
import Tooltip from './Tooltip'
import config from '@/config'

const About = () => {
  const { locale } = useRouter()

  const email = config[locale].email
  const about = config[locale].about

  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          {about.title}
        </h1>
      </div>
      <div className="bg-[#f1f1f1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold mx-4"
            style={{ lineHeight: '3rem' }}
          >
            {about.subtitle}{' '}
            <a
              className="bg-purple-500 rounded-md px-2 py-1 text-white transition duration-500 hover:bg-purple-600"
              href={about.currentProjectUrl}
            >
              {about.currentProjectName} 🚀
            </a>
          </p>
        </div>
      </div>
      <div className="bg-[#f1f1f1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                {about.contact.title}
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                {about.contact.description[0]}{' '}
                <a
                  href={`mailto:${config.email}`}
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  {email.text}
                </a>{' '}
                {about.contact.description[1]}
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                {about.jobOpportunities.title}
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                {about.jobOpportunities.description[0]}{' '}
                <a
                  href={about.resumeUrl}
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  LinkedIn
                </a>{' '}
                {about.jobOpportunities.description[1]}{' '}
              </p>
            </div>
            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              {about.socialLinks}
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
            {about.description?.map((description, index) => (
              <p
                key={index}
                className="text-xl text-gray-700 mb-4 dark:text-gray-300"
              >
                {description}
              </p>
            ))}

            <h1 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
              Tech Stack
            </h1>
            <div className="flex flex-row flex-wrap mt-8">
              {config.technologies.map((item, index) => (
                <Tooltip key={index} text={item.name}>
                  <Image
                    src={item.imageSrc}
                    width={20}
                    height={20}
                    alt={item.name}
                    className="h-20 w-20 mx-4 my-4"
                  />
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
