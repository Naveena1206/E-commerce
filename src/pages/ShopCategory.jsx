import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Object from '../Components/Object/Object'




const ShopCategory=(props)=>{
  const {all_product}= useContext(ShopContext);
  return (
    <div className='shop-category'>
        <img className='shopcategory-banner'src={props.banner} alt=""/>
        <div className="shopcataegory-indexSort">
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
          <div className='shopcataegory-sort'>
            Sort by <img src={dropdown_icon} alt=""/>
          </div>
        </div>
        <div className='shopcataegory-products'>
          {all_product.map((object,i)=>{
            if(props.category===object.category){
              return <Object key={i} id={object.id} name={object.name} image={object.image} new_price={object.new_price} old_price={object.old_price}/>
            }
            else{
              return null;
            }
          })}

           
        </div>
        <div className='shopcategory-loadmore'>
          Explore More
        </div>
    </div>
  )
}
  


export default ShopCategory