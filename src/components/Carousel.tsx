import { useState } from "react";

function Carousel() {

    const images = [
        "/komoda1.jpg",
        "/komoda2.jpg",
        "/komoda3.jpg",
        "/komoda4.jpg",
    ];
    const [currentImage, setCurrentImage] = useState(0);
    const nextImage = () => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      };
    
      const prevImage = () => {
        setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
      };
    return(
        <div className="carousel">
      <button onClick={prevImage}>Poprzednie</button>
      <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} />
      <button onClick={nextImage}>Następne</button>
    </div>
    )
}
export { Carousel };