import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faAdd } from '@fortawesome/free-solid-svg-icons'
  import { faStar } from '@fortawesome/free-solid-svg-icons'
  import { useRecoilState } from "recoil"; 
import { cartAtom } from '../recoil/atom/cartAtom'
import { useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'

const PackageCard = ({cover, name, price, id, discount}) => {
  const [cart, setCart] = useRecoilState(cartAtom)


  const handleAdd = () => {
    const existingCartIndex = cart.findIndex(item => item.id === id)

    if(existingCartIndex !== -1) {
      const updatedCart = [...cart]

      updatedCart[existingCartIndex] = {
        ...updatedCart[existingCartIndex], 
        quantity: updatedCart[existingCartIndex].quantity + 1
      }
      setCart(updatedCart)
    } else {
    setCart(list => [
      ...list, 
      {
        id: id,
        img: cover,
        name: name,
        price: price,
        quantity: 1
      }
    ])
  }
toast.success('Product added to cart successfull!')
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  

  return (
    <div className='container' style={{}}>
      <div className="row">
        <div className="col">
        {discount ?  <div className='border rounded-pill bg-dark text-light mt-3' style={{width: 80}}>{`${discount}% off`}</div>
        : ''  }
            <img src={cover} style={{ width: 150, height: 200 }} alt="" />
            <p>{name}</p>
            <div>
            <FontAwesomeIcon style={{color: 'yellow'}} icon={faStar} />
            <FontAwesomeIcon style={{color: 'yellow'}} icon={faStar} />
            <FontAwesomeIcon style={{color: 'yellow'}} icon={faStar} />
            <FontAwesomeIcon style={{color: 'yellow'}} icon={faStar} />
            <FontAwesomeIcon style={{color: 'yellow'}} icon={faStar} />
            </div>
            <p>{`₦${(price).toLocaleString()}`}</p>
            {/* <p>{add}</p> */}
            <button className='rounded-circle p-1 border-0 mb-3' onClick={handleAdd} aria-label={`Add ${id} to cart`}>
              <FontAwesomeIcon icon={faAdd} />
            </button>
            <Link className='border rounded bg-primary p-2 text-light ms-3 mb-3' style={{textDecoration: 'none'}} to={`/product/${id}`}>See More</Link>
            <div className="d-none">
            </div>
        </div>
      </div>
    </div>
  )
}

export default PackageCard
