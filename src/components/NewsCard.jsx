import React from 'react'

function NewsCard(props) {
  return (
     <div className="card w-full border-2 py-5 px-3 rounded-md hover:mx-0 hover:shadow-2xl hover:my-0 mx-1 my-2">
    <img className='h-72 mx-auto' src={props.src} alt="" />
    <h1 className='mt-5 text-lg font-semibold'>Climate change: a compilation of stories</h1>
    <h1 className='mt-2 font-semibold'>Dated 2023-01-08</h1>
    <button className="border-2 border-green-500 text-green-600 w-full mt-6 p-2 rounded-md font-semibold hover:bg-green-400 hover:text-white">View Details</button>
    </div>
  )
}

export default NewsCard