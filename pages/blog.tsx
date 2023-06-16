import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import BlogComponent from '@/components/Blog/BlogComponent'
import Container from '@/components/Container'
import { getAllPosts } from '@/lib/blog'

import type PostType from '@/interfaces/post'

type Props = {
  posts: PostType[]
}

export default function Blog({ posts }: Props) {
  return (
    <Container title="Blog">
      <BlogComponent posts={posts} />
    </Container>
  )
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  const posts = getAllPosts(locale, [
    'title',
    'date',
    'author',
    'coverImage',
    'excerpt',
    'slug',
  ])

  return {
    props: {
      posts,
      ...(await serverSideTranslations(locale, ['blog', 'common'])),
    },
  }
}
