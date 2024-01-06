import React from 'react'

function Order_inst() {
  return (
    <div className="mx-auto w-full border rounded-lg bg-green-200 max-w-[550px] bg-white p-3 px-5 flex-col">
        <h1 className='text-3xl font-bold text-orange-500 my-3 mx-10'>Important Instructions</h1>

        <div className='flex flex-col gap-5 p-4'>
        <p className='text-lg '> <span className='font-semibold text-xl text-orange-500'> 1)</span> Lorem, ipsum dolo Eum itaque ex eaque, esse minus obcaecati veniam adipisci iste reiciendis accusamus perspiciatis nemo. Inventore.</p>
        <p className='text-lg '><span className='font-semibold text-xl text-orange-500'> 2)</span> Lorem, ipsum dolo Eum itaque ex eaque, esse minus obcaecati veniam adipisci iste reiciendis accusamus perspiciatis nemo. Inventore.</p>
        <p className='text-lg '><span className='font-semibold text-xl text-orange-500'> 3)</span> Lorem, ipsum dolo Eum itaque ex eaque, esse minus obcaecati veniam adipisci iste reiciendis accusamus perspiciatis nemo. Inventore.</p>

        <img src="https://thechildrengreenbook.net/assets/images/_logo.png" className='w-80 mt-44'  alt="" />
        </div>
    </div>
  )
}

export default Order_inst