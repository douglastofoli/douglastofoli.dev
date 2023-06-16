import Link from 'next/link'
import Avatar from './Avatar'
import CoverImage from './CoverImage'
import DateFormatter from './DateFormatter'

import type AuthorType from '@/interfaces/author'

type Props = {
  title: string
  date: string
  author: AuthorType
  coverImage: string
  excerpt: string
  slug: string
}

const PostHero = ({
  title,
  date,
  author,
  coverImage,
  excerpt,
  slug,
}: Props) => {
  return (
    <section>
      <div className="mb-10 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link
              as={`/blog/${slug}`}
              href="/blog/[slug]"
              className="hover:underline"
            >
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  )
}

export default PostHero
