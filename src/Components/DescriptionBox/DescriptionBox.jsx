import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews(122)</div>
        </div>
        <div className='descriptionbox-description'>
            <p>An e-commerce website is an online platform that facilites buying and selling of
                products or services over internet serves as a virtual marketplace where business
                abd individual showcase thier products ,interact with customers and transactions
                without the need for a physical presence.E-commerce websites have gained immense
                populatriy due to their conventional accessibilty,and the global reach they
                offer.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox