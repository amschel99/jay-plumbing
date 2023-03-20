  import React from 'react'
  import { products} from '../../data'
  import ProductCard from '../ProductCard/ProductCard'
  import "./Products.css"
  const Products = ({productsData,setProductsData}) => {
    React.useEffect(()=>{
setProductsData(products)
    },[])

    return (
        <div className='products'>{
      
      
          productsData.map((product)=>            <ProductCard key={product.id} name={product.name} description={product.description} price={product.price} id={product.id} image={product.image}/>)

            
          }</div>
    )
  }

  export default Products