const ExperienceCard = ({
  title,
  description,
  startDate,
  endDate,
  company,
  companyUrl,
}) => {
  return (
    <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4">
      <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-300 font-bold dark:text-gray-700">
        {endDate === ''
          ? `${startDate} - Currently`
          : `${startDate} - ${endDate}`}
      </h1>
      <h1 className="font-semibold text-xl">{title}</h1>
      <a href={companyUrl} className="text-gray-500">
        {company}
      </a>
      <p className="text-gray-600 dark:text-gray-400 my-2">{description}</p>
    </div>
  )
}

export default ExperienceCard
