import React, {useEffect, useState} from "react";
import Slider from "@mui/material/Slider";
import classes from '../Pages/Product.module.css'

function Search(){
  const [searchTerm, setSearchTerm] = useState('');
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

function handlePrice(event, newValue) {
  setPrice(newValue);
}
const filteredData = product.filter(
  (item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    item.price >= price[0] &&
    item.price <= price[1] ||
    (price[1] == 1500000 && item.price >= 1500000)
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
  <div>
  <Slider value = {price} min={100000} max={1500000}  onChange = {handlePrice} valueLabelDisplay="auto" style = {{ width: "15rem", padding: "20px" }}/>
    </div>
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