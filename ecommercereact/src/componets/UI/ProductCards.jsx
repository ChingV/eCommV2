import React, {useRef, useState,useEffect} from "react";
import ProductsArray from './ProductsArray'
import classes from '../Pages/Product.module.css'


const ProductCards=()=>{
    const [searchTerm, setSearchTerm] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState(100000000);
    const [product,setProduct] = useState([]);

    useEffect(() => {
        setProduct(ProductsArray);
    }, []);


    const handleNameChange = (e) => {
        setSearchTerm(e.target.value);
      };
    
      const handleMinPriceChange = (e) => {
        setMinPrice(e.target.value);
      };
    
      const handleMaxPriceChange = (e) => {
        setMaxPrice(e.target.value);
      };
    
      const filteredData = product.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
          item.price >= minPrice &&
          item.price <= maxPrice
      );
    return(
        <div>
        <div className={classes['search']}>
            <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={handleNameChange}
          />
          <input
            type="number"
            placeholder="Min price"
            value={minPrice}
            onChange={handleMinPriceChange}
          />
          <input
            type="number"
            placeholder="Max price"
            value={maxPrice}
            onChange={handleMaxPriceChange}
          />
          </div>
        <div className={classes['grid']}>
            {filteredData.map((item)=>(
                <div key={item.id}>
                    <section className={classes['info-short']}>
                    <ul>
                    <li className={classes["option"]}><img src={item.image} alt="image"/>
                        <h2>{item.title}</h2>
                        <p>{item.descrp}</p>
                        <br></br>
                        <p>Price: ${item.price}</p>
                    </li>
                    </ul>
                    </section>
                </div>
            ))}
        </div>
        </div>
    )
    };

export default ProductCards;