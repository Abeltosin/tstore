import React from 'react'


const CartTotalPrice = ({price}) => {
   
  return (
    <div className='pt-3'>
      <p>{`Total Price: ₦${(price).toLocaleString()}`}</p>
    </div>
  )
}

export default CartTotalPrice
