import PackageCard from './PackageCard'
import React from 'react'

const PackageControl = ({title, bg, productItems}) => {

  return (
    <div className='container-fluid text-center my-3 p-0' style={{background: bg, width: '100%'}}>
        <h1>{title}</h1>
        <div className="row justify-content-center">
            {
                productItems.map((val) => (
                  <div key={val.id} className=" col-sm-4 col-md-3 col-lg-3 bg-light my-1 mx-1 my-sm-1 mx-sm-1 my-md-1 mx-md-1 my-lg-2 mx-lg-1 overflow-hidden">
                    <PackageCard 
                        cover={val.cover}
                        name={val.name}
                        price={val.price}
                        id={val.id}
                        discount={val?.discount}
                    />
                    </div>
                  
                ))
            }
      </div>
      </div>
  )
}

export default PackageControl
