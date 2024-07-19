import React from 'react'
import './Object.css'
import { Link } from 'react-router-dom'

const Object = (props) => {
  return (
    <div className='object'>
      <Link to={`/items/${props.id}`}><img onClick={window.scrollTo(0,0)}src={props.image} alt=""/></Link>
       
        <p>{props.name}</p> 
        <div className='object-prices'>
            <div className='object-price-new'>
                ${props.new_price}
            </div>
            <div className='object-price-old'>
            ${props.old_price}
            </div>
        </div>

    </div>
  )
}

export default Object