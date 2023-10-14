import React from 'react'
import {client,urlFor} from '../../lib/client'
import { useRouter } from 'next/router'

const ProductDetails = ({product,products}) => {

  const {image , name , price , details} = product


  return (

    <div>
        <div
          className='product-detail-container'
        >
          <div>
             <div className='image-container'>
                  <img src={urlFor(image && image[0])} alt="product image" />
             </div>
          </div>
        </div>
    </div>
  )
}

// the get static paths function is used to get all the static paths which are gonna be used 
// export async function getStaticPaths() {
   
//   //  return the current slug property of all the products 
//    const query = `*[_type=="product"]{
//       slug {
//         current 
//       }
//    }`
//    // contains current slug of all the products it is an array of object with curretn slug 
//    const products = await client.fetch(query)

//    console.log(products);

//    const paths = products.map((product)=>({
//         params : {
//           slug : product.slug.current
//         }
//    }))

//    console.log(paths);

//   return {
//     paths,
//     fallback: "blocking", // false or "blocking"
//   }
// }



// export const  getStaticProps = async( {params :{slug}} ) => {

//    const query = `*[_type=="product" && slug.current == '${slug}'][0]`
//    const product = await client.fetch(query)

   
//    const productsQuery = '*[_type=="product"]'
//    const products = await client.fetch(productsQuery)
   
//     return {
//        props : {product,products}
//     }
     
// }
 


// { params is used to access dynamic route parameters from the URL } 
// the getStatic Props are used when data required to render the page is available at build time ahead of user's request 
export const getServerSideProps = async(context) =>{

  const { params : {slug} } = context; // Access dynamic path parameters
   const query = `*[_type=="product" && slug.current == '${slug}'][0]`
   const product = await client.fetch(query)

   const productsQuery = '*[_type=="product"]'
   const products = await client.fetch(productsQuery)

   return{
       props : {product,products}
   }
}





export default ProductDetails