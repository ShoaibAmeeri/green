import React from 'react'
import Chapters from '../home/Chapters'

function Books() {
  return (
    <div className='w-[80%] mx-auto'>
        <div className="about_hero relative pt-24" >
            <h1 className="font-bold text-4xl md:absolute ms-36">Books</h1>
        </div>
        <br /><br />
        <Chapters/>
    </div>
  )
}

export default Books