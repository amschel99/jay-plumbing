import React from 'react'
import {Route, Routes,BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Products from './components/Products/Products'
import Mpesa from "./components/MpesaCheckout/Mpesa"

import SingleProductPage from './pages/SingleProductPage'
const App = () => {
  const [products,setProducts]=React.useState([])
  return (
  
   <BrowserRouter>
   <Routes>

    <Route  path='/' element={<Home productsData={products} setProductsData={setProducts}/>}>

<Route index element={<Products productsData={products} setProductsData={setProducts}/>}></Route>
      <Route  path='/contact' element={<Contact/>}></Route>

      <Route  path='/product/:id' element={<SingleProductPage/>}></Route>
    </Route>
    <Route  path='/checkout' element={<Mpesa/>}></Route>
   </Routes>
   </BrowserRouter>
   

  )
}

export default App