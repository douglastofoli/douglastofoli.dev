import Image from 'next/image'

type Props = {
  name: string
  picture: string
}

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <Image
        src={picture}
        alt={name}
        width={12}
        height={12}
        className="w-12 h-12 rounded-full mr-4"
      />
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}

export default Avatar