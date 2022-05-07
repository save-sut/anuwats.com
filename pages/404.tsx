import React from 'react'
import type { NextPage } from 'next'
import PageNotFound from '../components/page-not-found';
import Container from '../components/container'

const Page404: NextPage = () => {
  return (
    <main className="dark:bg-gray-800 w-full">
      <Container metaTitle='Page not found'>
        <PageNotFound />
      </Container>
    </main>
  )
}

export default Page404
