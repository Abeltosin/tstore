import FilterSelect from "../shopEquipments/FilterSelect"
import Shopview from "../shopEquipments/Shopview"
import { Fragment, useEffect, useState } from "react"
import { Products } from "../assets/Products"
import SearchBar from "../search/SearchBar"

const Shop = () => {
  const [changed, setChanged] = useState(Products.filter(product => product.category === 'phone'))

  
  return (
    <Fragment>
      <div className=" pt-3 text-light fs-1 d-flex align-item-center justify-content-center" style={{width: '100%', backgroundImage: 'linear-gradient( 35deg, hsl(240deg 100% 20%) 0%, hsl(284deg 40% 28%) 14%, hsl(350deg 21% 43%) 26%, hsl(33deg 35% 51%) 36%, hsl(47deg 65% 55%) 45%, hsl(55deg 100% 50%) 52%, hsl(39deg 80% 67%) 60%, hsl(2deg 47% 71%) 67%, hsl(300deg 36% 57%) 74%, hsl(269deg 69% 55%) 84%, hsl(245deg 100% 50%) 100%)', marginTop: 50, height: 140, minWidth: '100%'
    }}>PRODUCTS</div>
      <div className="container-fluid " style={{marginTop: 1, }}>
        <div className="row">
          <div className="col-lg-8 rounded-pill" style={{marginTop: 50}}>
      <SearchBar setEdit={setChanged} />
          </div>
          <div className="col-lg-4">
      <FilterSelect setChanged={setChanged} />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-12">
      <Shopview changed={changed}/>
          </div>
        </div>
      </div>
      {/* {Products.map(item => {
        
      })} */}
    </Fragment>
  )
}

export default Shop
