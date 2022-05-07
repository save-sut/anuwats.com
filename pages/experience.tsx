import React from 'react'
import type { NextPage } from 'next'
import ExperiencePage from '../components/experience'
import Container from '../components/container'

const Experience: NextPage = () => {
  return (
    <main className="dark:bg-gray-800 w-full">
      <Container metaTitle='Experience'>
        <ExperiencePage />
      </Container>
    </main>
  )
}

export default Experience
