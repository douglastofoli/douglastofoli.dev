import config from '@/config'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { RoughNotationGroup } from 'react-rough-notation'
import Icon from './Icon'
import RainbowHighlight from './RainbowHighlight'

const Hero = () => {
  const { t } = useTranslation('home')

  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      {/* Text container */}
      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
        <RoughNotationGroup show={true}>
          {config.hero.words.map((item, index) => (
            <RainbowHighlight key={index} color={item.color}>
              <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
                {item.word}
              </h1>
            </RainbowHighlight>
          ))}
        </RoughNotationGroup>
      </div>
      {/* Image container */}
      <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20">
        <div className="w-3/4">
          <Image
            src={config.avatar}
            alt="Avatar"
            className="shadow w-full"
            width={1080}
            height={1080}
          />
          <div className="flex flex-row justify-between mt-4">
            <div className="flex flex-row space-x-4">
              <Icon name="Arrow90DegUp" size={16} />
              <p className="font-mono">{t('thats_me')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
