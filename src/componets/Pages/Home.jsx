import React from "react";
import Slideshow from "../UI/SlideShow";
import classess from "./Home.module.css"

function Home(){
  // const images = [
  //   "/images/big island.jpg",
  //   "/images/angel island.jpg",
  //   "/images/rabbit island.jpg"
  // ];
  
    return(
        <div className={classess['backgColor']}>
        <Slideshow/>
        </div>
    )
}

export default Home;