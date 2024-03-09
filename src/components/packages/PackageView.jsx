import PackageControl from './PackageControl'
import { useState, useEffect } from 'react'
import {DiscountProduct, Products} from '../assets/Products'

const PackageView = () => {
    const [latestArrival, setLatestArrival] = useState([])
    const [latestSales, setLatestSales] = useState([])
    useEffect(() => {
        let newArrival = []
        let newSales = []
        for (let i = 0; i < Products.length; i++) {
            const product = Products[i]
            if(product.category === 'phone' || product.category === 'chair') {
                newArrival.push(product)
            } 
            if(product.category === 'sofa') {
                newSales = [...newSales, product]
            }
        }

        setLatestArrival([...newArrival])
            setLatestSales(newSales)
    }, [])

  return (
    <div className='container-fluid p-0 m-0 overflow-hidden'>
      <div className="row">
        <div className="col-12">
      <PackageControl title='Amazing Discount' bg='rgba(160, 125, 168, 0.1)' productItems={DiscountProduct} />
        </div>
        <div className="col-12">
        <PackageControl title='Latest Arrivals' bg='rgba(15, 13, 16, 0.11)' productItems={latestArrival} />
        </div>
        <div className="col-12">
      <PackageControl title='Latest Sales' bg='rgba(29, 129, 163, 0.1)' productItems={latestSales} />
        </div>
      </div>
    </div>
  )
}

export default PackageView
