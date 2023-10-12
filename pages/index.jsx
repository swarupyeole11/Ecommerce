import React from 'react';
import { Product, FooterBanner, HeroBanner } from '../components'
import { client } from '../lib/client'


export const Home   = ({products ,bannerData}) => {

  return (
    <>
       {/* The logic is that if the length of the banner data is not 0 return the first instance */}
      <HeroBanner heroBanner = {bannerData.length && bannerData[0]} />

      <div className="products-heading">
        <h2>Best Selling Product </h2>
        <p> Speakers of Many Variation</p>
      </div>

      <div className="products-container">
        {/* sending information of individual product with the help of map to the product compoent */}
        {products?.map((product) => <Product key={product}  product={product} /> )}
      </div>

      <FooterBanner footerBanner = {bannerData.length && bannerData[0]}/>

    </>
  );
};

// this is to show that there can be only 1 default export 
export const Homes   = () => {

  return (
    <>
     
      <h1>hola AMigo</h1>

    </>
  );
};



//  had It been react we would have directly made the api call using use effect but here we are using get server side props speciality of nextjs

// whatever the getServerSide Props returns it gets populated into the function above i,e Home funciton

export const getServerSideProps = async () => {
    // grabs all the products from the sanity dash board 
    const query = '*[_type == "product"]'
    const products = await client.fetch(query);
    
    // grabs all the banner info from sanity
    const bannerQuery = '*[_type == "banner"]'
    const bannerData = await client.fetch(bannerQuery);
    

    return {
      props : { products , bannerData}
    }
}
 
export default Home;
