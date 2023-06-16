type Props = {
  children?: React.ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
      <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
        {children}
      </h1>
    </div>
  )
}

export default PostTitle
