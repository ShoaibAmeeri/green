import React from 'react'
import images from '../../components/data/chapters'
import ChCard from '../../components/ChCard'

function Chapters() {
  return (
    <div className=" mx-auto text-center">
    <h1 className="my-5 font-bold text-5xl text-orange-500">
      {" "}
      <span className="text-green-500">GREEN</span> BOOK CHAPTERS
    </h1>
    <div className="grid md:grid-cols-3 sm:grid-cols-2">
      {images.map((img,i) => (
        <ChCard src={img.src} key={i}/>
      ))}
    </div>
  </div>
  )
}

export default Chapters