import React, { useEffect, useState } from 'react'
import images from '../../components/data/chapters'
import ChCard from '../../components/ChCard'
import axios from 'axios';



// import {axios} from axios

function Chapters() {

  
  
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/books')
    .then(res => setData(res.data))
    .catch(err => console.log(err))
    }, [])
  


  return (
    <div className=" mx-auto text-center">
    <h1 className="my-5 font-bold text-5xl text-orange-500">
      {" "}
      <span className="text-green-500">GREEN</span> BOOK CHAPTERS
    </h1>
    <div className="grid md:grid-cols-3 sm:grid-cols-2">
      
      {data.map((img) => (
        <>
        {/* {console.log(img._id)} */}
        <ChCard src={img.image} key={img._id} id={img._id} />
        
        </>
      ))}
    </div>
  </div>
  )
}

export default Chapters