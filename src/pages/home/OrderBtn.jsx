import React from 'react'
import { Link } from 'react-router-dom'

function OrderBtn() {
  return (
    <div className=' gap-4  w-full md: px-0 p-12 flex flex-col text-center  my-12' style={{background:"linear-gradient(90deg, rgba(11,169,83,1) 0%, rgba(163,205,105,1) 57%)"}} >
    <h1 className='text-3xl font-bold '>GET A COPY</h1>  
    <p className='text-gray-600'>If you wish to get a hard copy of The Children's Green Book,<br/> please click the button below:</p>  
    <Link to={'/order'} type="button" class="rounded-md bg-[#8BC052] hover:bg-[#73A938] w-[200px]  mx-auto py-3 md:px-10 text-lg font-semibold"> Get a Copy </Link>
    </div>
  )
}

export default OrderBtn