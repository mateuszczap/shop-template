import { useState } from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function Carousel() {

    const images = [
        <img src="/komoda1.jpg" role="presentation" className="carousel-img"/>,
        <img src="/komoda2.jpg" role="presentation" className="carousel-img"/>,
        <img src="/komoda3.jpg" role="presentation" className="carousel-img"/>,
        <img src="/komoda4.jpg" role="presentation" className="carousel-img"/>,
    ];
    const [currentImage, setCurrentImage] = useState(0);
    
    
   
    return(
        <div className="carousel">
      
      {/* <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} /> */}
      <AliceCarousel 
      mouseTracking items={images} infinite 
      autoWidth
      />
      
    </div>
    )
}
export { Carousel };