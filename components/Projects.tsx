import ProjectCard from './ProjectCard'
import config from '@/config'

const Projects = () => {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Projects
        </h1>
      </div>
      <div className="bg-[#f1f1f1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {config.projects.map((item, index) => (
            <ProjectCard
              key={index}
              title={item.title}
              imageSrc={item.imageSrc}
              url={item.url}
              number={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
