import React from 'react'
import Hero from './Hero'
import Chapters from './Chapters'
import NewsPaper from './NewsPaper'
import Author from './Author'
import OrderBtn from './OrderBtn'

function Home() {
  return (
    <div className='w-[80%] text-center mx-auto'>
    <Hero/>
    <OrderBtn/>
    <Chapters/>
    <NewsPaper/>
    <Author  />
 
    </div>
  )
}

export default Home