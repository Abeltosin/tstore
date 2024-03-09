import React, { useEffect } from 'react'
import { cartAtom } from '../recoil/atom/cartAtom'
import { useRecoilState } from 'recoil'

const DeleteCartItems = ({item}) => {
  const [cart, setCart] = useRecoilState(cartAtom)
//   const index = cartItems.findIndex(indexItem => indexItem === item)

  const handleDelete = () => {
    // const newItems = [...cartItems.slice(0, index), ...cartItems.slice(index + 1)];
    console.log('Deleteing item', item)
    const newItems = cart.filter(itemms => itemms.id !== item.id)
    console.log('new item:', newItems)
    setCart(newItems)
    if(cart.length === 0) {
      setCart([])
    }
  }

  useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cart))
}, [cart])
  return (
    <div style={{fontSize: 25,}}>
      <button onClick={handleDelete} className='border-0 pe-3 text-danger fs-5' style={{background: 'transparent'}}>Remove</button>
    </div>
  )
}

export default DeleteCartItems


  
