import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import Navbar from './components/navbar/Navbar'
import Loader from './components/loader/Loader'
import Footer from './components/footer/Footer'
const Home = lazy(() => import('./components/pages/Home'))
const Cart = lazy(() => import('./components/pages/Cart'))
const Product = lazy(() => import('./components/pages/Product'))
const Shop = lazy(() => import('./components/pages/Shop'))
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
      <Suspense fallback={<Loader />}>
    <Router>
    <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/Shop' element={<Shop />} />
      </Routes>
      <Footer />
    </Router>
    </Suspense>
  )
}

export default App
