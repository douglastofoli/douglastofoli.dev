import config from '@/config'
import Image from 'next/image'
import Tooltip from '../Tooltip'

const TechStackComponent = () => {
  return (
    <>
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
    </>
  )
}

export default TechStackComponent
