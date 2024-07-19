import React, { useContext } from 'react'
import {ShopContext} from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import Breakcrum from '../Components/Breakcrums/Breakcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';




const Items = () => {
    const {all_product}=useContext(ShopContext);
    const {ItemsId }=useParams();
    const items = all_product.find((e)=>e.id=== Number(ItemsId));
    return (
    <div>
        <Breakcrum items={items}/>
        <ProductDisplay items={items}/>
        <DescriptionBox/>
        <RelatedProducts/>
    </div>
  )
}

export default Items