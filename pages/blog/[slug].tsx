import { GetStaticProps, GetStaticPaths } from 'next'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Container from '@/components/Container'
import PostBody from '@/components/Blog/PostBody'
import PostHeader from '@/components/Blog/PostHeader'
import PostTitle from '@/components/Blog/PostTitle'
import { getPostBySlug, getAllPosts } from '@/lib/blog'
import markdownToHtml from '@/lib/markdownToHtml'

import type PostType from '@/interfaces/post'

type Props = {
  post: PostType
  morePosts: PostType[]
}

export default function Post({ post }: Props) {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Container title={post.title}>
      {router.isFallback ? (
        <PostTitle>Loading...</PostTitle>
      ) : (
        <article className="bg-white dark:bg-gray-800">
          <div className="bg-white dark:bg-gray-800">
            <PostHeader
              title={post.title}
              date={post.date}
              author={post.author}
              coverImage={post.coverImage}
            />
          </div>
          <div className="bg-[#f1f1f1] dark:bg-gray-900 py-20 pb-40">
            <PostBody content={post.content} />
          </div>
        </article>
      )}
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const post = getPostBySlug(params!.slug, locale, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
        ...(await serverSideTranslations(locale, ['common'])),
      },
    },
  }
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  type PathsType = {
    params: {
      slug: string
    }
    locale: string
  }

  const paths: PathsType[] = []

  locales?.map((locale: string) => {
    const posts = getAllPosts(locale, ['slug'])

    posts.map((post) => {
      paths.push({
        params: {
          slug: post.slug,
        },
        locale,
      })
    })
  })

  return {
    paths,
    fallback: false,
  }
}
