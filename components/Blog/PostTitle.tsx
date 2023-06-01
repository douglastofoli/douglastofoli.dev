type Props = {
  children?: React.ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight
                   md:leading-none mx-4 mb-8 text-center md:text-left">
      {children}
    </h1>
  )
}

export default PostTitle
