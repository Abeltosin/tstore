import { Fragment } from 'react'
import SliderHome from '../slider/Slider'
import Offers from '../offercards/Offers'
import PackageView from '../packages/PackageView'
const Home = () => {
  return (
    <Fragment>
      <SliderHome />
      <Offers />
      <PackageView />
    </Fragment>
  )
}

export default Home
