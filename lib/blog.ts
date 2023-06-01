import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import config from '@/config'

const postsDirectory = join(process.cwd(), config.blog.postsDirectory)

const getPostSlugs = (locale: string) => {
  return fs.readdirSync(join(postsDirectory, locale))
}

const getPostBySlug = (slug: string, locale: string, fields: string[] = []) => {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, locale, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

const getAllPosts = (locale: string, fields: string[] = []) => {
  const slugs = getPostSlugs(locale)
  const posts = slugs
    .map((slug) => getPostBySlug(slug, locale, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

  return posts
}

export { getPostSlugs, getPostBySlug, getAllPosts }
