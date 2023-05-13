import React from "react";
import Search from '../UI/Search'
import ProductCards from "../UI/ProductCards";
import classes from './Product.module.css'

function Product(){
    return(
        <div className={classes['bckgrd']}>
      <Search/>
      {/* <ProductCards/> */}

      </div>
    )
}

export default Product;