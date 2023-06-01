import { useTranslation } from 'next-i18next'
import PostHero from './PostHero'
import MorePosts from './MorePosts'

const BlogComponent = ({ posts }) => {
  const { t } = useTranslation('blog')

  const heroPost = posts[0]
  const morePosts = posts.slice(1)

  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          {t('title')}
        </h1>
      </div>
      <div className="bg-[#f1f1f1] dark:bg-gray-900 -mt-4">
        <div className="grid grid-cols-1 max-w-xl md:max-w-4xl mx-auto pt-20">
          {heroPost && (
            <PostHero
              title={heroPost.title}
              date={heroPost.date}
              author={heroPost.author}
              coverImage={heroPost.coverImage}
              excerpt={heroPost.excerpt}
              slug={heroPost.slug}
            />
          )}
          {morePosts.length > 0 && <MorePosts posts={morePosts} />}
        </div>
      </div>
    </section>
  )
}

export default BlogComponent
