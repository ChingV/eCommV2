import React, {useEffect, useState} from "react";
import Slider from "@mui/material/Slider";
import classes from '../Pages/Product.module.css'

function Search(){
    const [searchTerm, setSearchTerm] = useState('');
    // const [minPrice, setMinPrice] = useState('');
    // const [maxPrice, setMaxPrice] = useState(100000000);
    const [price, setPrice] = useState([100000,100000000])
    const [product,setProduct] = useState([]);

    useEffect(()=>{
        callSql();
    },[])


const callSql= async()=>{
    try{
     const response = await fetch ('http://localhost:8800/');
     const data = await response.json();
     console.log('Fetch complete')
     setProduct(data);
    }catch(error){
        console.error(error);
    }
}
const handleNameChange = (e) => {
    setSearchTerm(e.target.value);
  };

  function handlePrice(event, newValue) {
    setPrice(newValue);
 }

  // const handleMinPriceChange = (e) => {
  //   setMinPrice(e.target.value);
  // };

  // const handleMaxPriceChange = (e) => {
  //   setMaxPrice(e.target.value);
  // };

  const filteredData = product.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      item.price >= price[0] &&
      item.price <= price[1]
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
      {/* <input
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
      /> */}
      <Slider value = {price} onChange = {handlePrice} valueLabelDisplay="auto"/>
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

export default Search;