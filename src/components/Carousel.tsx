import { useState } from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function Carousel({image, secondImg, thirdImg}:{image: string, secondImg: string, thirdImg: string}) {

    const images = [
        <img src={image} role="presentation" className="carousel-img"/>,
        <img src={secondImg} role="presentation" className="carousel-img"/>,
        <img src={thirdImg} role="presentation" className="carousel-img"/>,
        // <img src="/komoda4.jpg" role="presentation" className="carousel-img"/>,
    ];
    const [currentImage, setCurrentImage] = useState(0);
    
    return(
        <div className="carousel">
      <AliceCarousel 
      mouseTracking items={images} infinite 
      autoWidth
      />
      
    </div>
    )
}
export { Carousel };