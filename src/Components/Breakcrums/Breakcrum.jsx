import React from 'react'
import './Breakcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'


const Breakcrum = (props) => {
    const {items}=props;
  return (
    <div className='Breakcrum'>
        HOME <img src={arrow_icon} alt=""/> SHOP <img src={arrow_icon} alt=""/> {items.category} <img src={arrow_icon} alt=""/>{items.name}
    </div>
  )
}

export default Breakcrum