import Avatar from './Avatar'
import CoverImage from './CoverImage'
import DateFormatter from './DateFormatter'
import PostTitle from './PostTitle'

import type AuthorType from '@/interfaces/author'

type Props = {
  title: string
  date: string
  author: AuthorType
  coverImage: string
}

const PostHeader = ({ title, date, author, coverImage }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block mx-4 mb-8">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="flex justify-center items-center max-w-8xl mb-4 md:mb-8 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mx-4 mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mx-4 mb-4 md:mb-8 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}

export default PostHeader
