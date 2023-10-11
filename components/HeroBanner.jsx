import Link from 'next/link'
import React from 'react'

const HeroBanner = () => {
  return (
    <div className='hero-banner-container'>
        <div>
            <p className='beats-solo'>
                Small text
            </p>
            <h3> mid text</h3>
            <img src="" alt="headphones"  className='hero-banner-image'/>

            <div>
                <Link href="/product/ID">
                    <button type='button'> button-text</button>
                </Link>
            </div>

            <div className='desc'>
                <h5>description</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sunt eligendi cumque doloremque repellendus aliquam assumenda perspiciatis. Veniam tenetur error quas nulla dicta? Sit nam et perferendis deserunt quae id.</p>
            </div>
            
        </div>

    </div>
  )
}

export default HeroBanner