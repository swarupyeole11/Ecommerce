import React from 'react'
import Link from 'next/link'
import { urlFor } from '@/lib/client'


const Product = ({product : {image,name,slug,price}}) => {
  return (
    
    <>
       <Link href={`/product/${slug.current}`}>
          <div className='product-card'>
              <img 
              src={urlFor(image && image[0])}
              className='product-image'
              height={250}
              width={250}
              alt="headphone image" 
              />
              <p className='product-name'>{name}</p>
              <p className='product-price'> &#8377; {price}</p>

          </div>
          {console.log(name)}
       </Link>
  
      
    </>
    
   
  )
}

export default Product