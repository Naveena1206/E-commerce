import React from 'react'
import './RelatedProducts.css'
import data_product from '../Assets/data'
import Object from '../Object/Object'


const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr/>
      <div className='relatedproducts-item'>
        {data_product.map((object,i)=>{
                return <Object key={i} id={object.id} name={object.name} image={object.image} new_price={object.new_price} old_price={object.old_price}/>
           })}

      </div>

    </div>
  )
}

export default RelatedProducts