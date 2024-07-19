import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Object from '../Object/Object'

const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr/>
        <div className="popular-item">
           {data_product.map((object,i)=>{
                return <Object key={i} id={object.id} name={object.name} image={object.image} new_price={object.new_price} old_price={object.old_price}/>
           })}
        </div>        
    </div>
  )
}

export default Popular