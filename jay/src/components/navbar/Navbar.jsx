import React, {useState} from 'react'
import './navbar.css'
import { SearchBar } from '../searchBar/SearchBar'
import { Box,Typography,Button,Modal } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";
import CartIcon from '@mui/icons-material/ShoppingCart'
import { products} from '../../data'
import { useSelector,useDispatch } from 'react-redux'
import ShoppingCartItem from '../shoppingCart/ShoppingCart';
import { MobileSearchBar } from '../searchBar/MobileSearch';
const Navbar = ({productsData,setProductsData}) => {
  const dispatch= useDispatch()
  const cart= useSelector((state)=>state.cart)
  const[open,setOpen]=useState(false)
  const[openModal,setOpenModal]=useState(false)
  
  return (

    <nav className="navigation">
      
      <div className="company"><h2 className="coName"><img className='jaylogoh' src='/images/logo.png'></img>  plumbing and Irrigation
   
      </h2>

      </div>
   
   
      <div className='navlinks'><div className="navigation__panel">
        <div className="navigation__pane">
          <div>

          <ul>
            <li>
              <Typography onClick={()=>{
const filteredProducts= products.filter((product)=>product.type===1)

setProductsData(filteredProducts)

              }} component={Button}> Plumbing Equipments</Typography>
              </li>
            <li>
            
            <Typography onClick={()=>{

const filteredProducts= products.filter((product)=>product.type===2)
setProductsData(filteredProducts)

              }} component={Button}> Irragation Equipments</Typography>
      </li>
            </ul>
          
          <button onClick={()=>setOpenModal(true)} className="crt">

            <CartIcon/>
              <p >{cart.totalItems} </p>
         
              
              </button>
              </div>

        <Box sx={{display:{xs:"none",sm:"block"}}} className='srch'>

     <SearchBar productsData={productsData} setProductsData={setProductsData}/>
 
 
 

        
         
            </Box>
          </div>
        </div>
      </div>
 
      <Modal
  open={openModal}
  onClose={()=>setOpenModal(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
    <ShoppingCartItem/>
  
</Modal>
<Box sx={{display:{xs:"block",sm:'none'},marginTop:'20px'}} className="company">

  
<MobileSearchBar productsData={productsData} setProductsData={setProductsData}/>

 </Box>
    </nav>
  )
}

export default Navbar