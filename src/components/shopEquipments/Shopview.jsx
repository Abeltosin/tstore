import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faStar } from '@fortawesome/free-solid-svg-icons'
  import { cartAtom } from '../recoil/atom/cartAtom'
  import { useRecoilState } from 'recoil'
import { toast } from 'react-toastify'

const Shopview = ({changed}) => {
  const btn =useNavigate()
  const handleClick = (id) => {
  // const ind = changed.findIndex(item => item.id === id)
    btn(`/product/${id}`)
  }

  const [cart, setCart] = useRecoilState(cartAtom)

  const handleAdd = (id) => {
    const sameProduct = cart.findIndex(item => item.id === id)
    if(sameProduct !== -1) {
      const products = [...cart]
      products[sameProduct] = {
        ...products[sameProduct],
        quantity: products[sameProduct].quantity + 1
      }
      setCart(products)
    } else {
      const newProduct = changed.find(item => item.id === id);
      if (newProduct) {
        setCart([...cart, {
          id: newProduct.id,
          img: newProduct.cover,
          name: newProduct.name,
          price: newProduct.price,
          quantity: 1
      }
    ])
    }
}
toast.success('Product added to cart successfull!')

  }



     

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <div className='container-fluid ' style={{Width: '100%'}}>
      <div className="row justify-content-center" style={{paddingLeft: 60, Width: '100%', paddingRight: 60}}>
        {/* <div className="col-4"> */}
        {changed.map(val => {
            return (
                <div key={val.id} className="m-1 col-md-4 col-sm-4 col-lg-4 col-12 mt-2 mb-3 border p-5 d-flex flex-column align-item-center justify-content-center" style={{border: '2px solid white', minWidth: 170}}>
                  <button className='border-0 bg-white col-12 w-100' style={{ outline: 'none'}} onClick={() => handleClick(val?.id)}>
                    <div className="me-5">
                    <img src={val.cover}  style={{ width: 120, height: 150 }} alt="" />
                    </div>
            <p>{val.name}</p>
            <div>
            <FontAwesomeIcon style={{color: 'yellow'}} icon={faStar} />
            <FontAwesomeIcon style={{color: 'yellow'}} icon={faStar} />
            <FontAwesomeIcon style={{color: 'yellow'}} icon={faStar} />
            <FontAwesomeIcon style={{color: 'yellow'}} icon={faStar} />
            <FontAwesomeIcon style={{color: 'yellow'}} icon={faStar} />
            </div>
            <p>{`₦${(val.price).toLocaleString()}`}</p>
        </button>
            <br /><button className='rounded-pill bg-warning p-1 ms-2 border-0' onClick={() => handleAdd(val.id)} aria-label={`Add ${val.id} to cart`}>
              {/* <FontAwesomeIcon icon={faAdd} /> */}Add
            </button>
                </div>
            )
        })}
        {/* </div> */}
      </div>
    </div>
  )
}

export default Shopview
// row-cols-sm-1 row-cols-md-1 row-cols-lg-2 gx-3 my-3 mx-2 d-flex flex-row overflow-hidden
