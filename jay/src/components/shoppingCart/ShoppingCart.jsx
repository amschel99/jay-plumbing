import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Button,
  Grid,
  
} from '@mui/material';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import Whatsapp from '@mui/icons-material/WhatsApp'
import PayIcon from "@mui/icons-material/Payment"

import { itemRemoved,incrementQuantity,decrementQuantity,setQuantity } from '../../feautures/cart/cartSlice';
import {  useDispatch, useSelector} from 'react-redux'
const ShoppingCartItem = () => {
  

  const cart= useSelector((state)=>state.cart)
  const{totalItems, totalPrice,items}=cart


  const dispatch= useDispatch()

  const removeFromCart= (product)=>{
const{name, price,image}=product


dispatch((itemRemoved({name,price,image})))


}

const decrementItem= (product)=>{
const{name, price,image}=product



dispatch((decrementQuantity({name,price,image})))


}
const incrementItem= (product)=>{
const{name, price,image}=product



dispatch((incrementQuantity({name,price,image})))


}
const message = items.map(item => ` \n ${item.name} that costs ${item.price},\n  quantity:${!item.quantity?1:item.quantity} \n`).join('\n');

console.log(items)



  return (
    <div style={{width:"80vw", marginLeft:"10vw", marginRight:'10vw', marginTop:'5vh', maxHeight:'50vh', overflow:'scroll'}}>
   
   {
    items.map((item)=>{
return <Card key={item.name} sx={{ display: 'flex' }}>
<CardMedia
  component="img"
  sx={{ width: 100 ,height:150}}
  image={item.image}
  alt={item.name}
/>
<CardContent sx={{ flex: '1 0 auto' }}>
  <Typography variant="p" component="div">
    {item.name}
  </Typography>
  <Typography variant="p" color="text.secondary">
    {item.price}
  </Typography>
  <Typography variant="p" color="text.secondary">
   {"  "} quantity: { !item.quantity?1:item.quantity}
  </Typography>
  <Grid container spacing={2} alignItems="center">
    <Grid item>
      <IconButton onClick={()=>decrementItem(item)}>
        <RemoveCircleOutline />
      </IconButton>
    </Grid>
    <Grid item>
    <input type="number" min="1" max="200" onChange={(e)=>{

     // return dispatch((setQuantity({name:item.name,price:item.price,image:item.image,quantity:e.target.value})))
    }}></input>
    </Grid>
    <Grid item>
      <IconButton onClick={()=>incrementItem(item)}>
        <AddCircleOutline />
      </IconButton>
    </Grid>
  </Grid>
  
</CardContent>
</Card>
    })
   } 
   <Card>
    <CardContent>
    <Typography variant="subtitle1" color="text.secondary">
  total items: {totalItems}

  </Typography>
  <Button  sx={{backgroundColor:'blue', color:'white'}}  component={'a'} href={`whatsapp://send?phone=+254797168636&text=hello, I'm enquiring about the following items from your website:

  
    ${encodeURIComponent(message)}
  
  `} startIcon={<Whatsapp/>} disabled={!totalItems}>Enquire On Whatsapp</Button>
   <Button sx={{backgroundColor:'blue', color:'white', marginLeft:'10px'}} component={'button'}  startIcon={<PayIcon/>} disabled={!totalItems}>Pay By Mpesa</Button>
    </CardContent>
   </Card>
    
    </div>
  );
};

export default ShoppingCartItem;
