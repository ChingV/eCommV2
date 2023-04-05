import React, { useState , useEffect} from "react";
import classes from './SlideShow.module.css'

function SlideShow (){
  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    "/images/big island.jpg",
    "/images/angel island.jpg",
    "/images/rabbit island.jpg"
  ];

   useEffect(() => {
    const timeout = setTimeout(() => {
      setImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearTimeout(timeout);
  }, [imageIndex]);

  return (
    <div className={classes['slideshow']}>
      <img src={images[imageIndex]} alt={`SlideShow ${imageIndex}`} />
    </div>
  );
};

export default SlideShow;


