import React from 'react'
import type { NextPage } from 'next'
import BlogPage from '../../components/blog';
import Container from '../../components/container'

const Blogs: NextPage = () => {
  return (
    <main className="dark:bg-gray-800 w-full">
      <Container metaTitle='Blog'>
        <BlogPage />
      </Container>
    </main>
  )
}

export default Blogs
