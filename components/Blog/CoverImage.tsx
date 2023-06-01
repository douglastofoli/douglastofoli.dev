import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  src: string
  title: string
  slug?: string
}

const CoverImage = ({ src, title, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover for ${title}`}
      className={cn('shadow-sm w-full', {
        'hover:shadow-lg transition-shadow duration-200': slug,
      })}
      width={1920}
      height={1080}
    />
  )

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/blog/${slug}`} href="/blog/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
