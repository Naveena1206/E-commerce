import React from 'react'
import './NewCollections.css'
import new_collection from '../Assets/new_collections'
import Object from '../Object/Object'

const NewCollections = () => {
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className='collections'>
            {new_collection.map((object,i)=>{
                return <Object key={i} id={object.id} name={object.name} image={object.image} new_price={object.new_price} old_price={object.old_price}/>
            })}
        </div>
    </div>
  )
}

export default NewCollections