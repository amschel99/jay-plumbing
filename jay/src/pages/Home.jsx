import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Products from '../components/Products/Products'
import { Outlet } from 'react-router-dom'
const Home = ({productsData,setProductsData}) => {
  return (

    <div style={{maxWidth:'100%'}}>
      {/* <div className="company"><h1 className="coName">Jay Plumbing and Irrigation</h1></div> */}
    <Navbar productsData={productsData} setProductsData={setProductsData}/>
     <Outlet/>
     <Footer/>
    </div>
   


  
  )
}

export default Home