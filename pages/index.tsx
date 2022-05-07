import React from 'react'
import type { NextPage } from 'next'
import HomePage from '../components/home/index'
import Container from '../components/container'

const Home: NextPage = () => {
  return (
    <main className="dark:bg-gray-800 w-full">
      <Container>
        <HomePage />
      </Container>
    </main>
  )
}

export default Home
