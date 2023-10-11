import React from 'react';
import { Product, Footer, HeroBanner } from '../components'
import { client } from '../lib/client'



const Home   = (/*{products , bannerData}*/) => {

  return (
    <>

      <HeroBanner />

      <div className="products-heading">
        <h2>Best Selling Product </h2>
        <p> Speakers of Many Variation</p>
      </div>

      <div>
        {/* {products?.map((product) => product.name)} */}
      </div>

      <Footer/>

    </>
  );
};

//  had It been react we would have directly made the api call using use effect but here we are using get server side props speciality of nextjs

// whatever the getServerSide Props returns it gets populated into the function above i,e Home funciton

// export const getServerSideProps = async () => {
//     // grabs all the products from the sanity dash board 
//     const query = '*[_type== "product"]'
//     const products = await client.fetch(query);
    
//     // grabs all the banner info from sanity
//     const bannerQuery = '*[_type == "banner]'
//     const bannerData = await client.fetch(bannerQuery);

//     return 
//     {
//       props : { products, bannerData}
  
//     }
// }
 
export default Home;
