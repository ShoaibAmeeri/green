import React from 'react'
import Order_form from './Order-form'
import Order_inst from './Order_inst'

function OrderCopy() {
  return (
    <div className='w-[80%] mx-auto'>
       <h1 className='text-4xl font-bold text-orange-500 text-center'>Order a Sample Book</h1>
    <div className="md:flex  p-12 gap-3">
    
    <Order_inst/>
    <Order_form/>
</div>
</div>
  )
}

export default OrderCopy