import React from 'react'
import type { NextPage } from 'next'
import BlogPage from '../../components/blog';
import Container from '../../components/container'
import { getAllPosts } from '../../lib/mdx'

const Blogs: NextPage = ({ posts }: any) => {
  return (
    <main className="dark:bg-gray-800 w-full">
      <Container metaTitle='Blog'>
        <BlogPage posts={posts} />
      </Container>
    </main>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts([
    'slug',
    'title',
    'publishedAt',
    'summary'
  ])
  return { props: { posts } }
}

export default Blogs
