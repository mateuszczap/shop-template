import { Button } from "./Button";
import { useNavigate } from "react-router-dom"
import { Carousel } from "./Carousel";

function Product ({price, name, discount, setProducts, mainImage, secondImage, thirdImage}:{price: number, name: string, discount?: number, setProducts: any, img: string, mainImage: string, secondImage:string, thirdImage:string}) {
    const navigate = useNavigate()
    return (
        <div className="product-page-container" >
            <div className="product-container">
                    <div className="product-carousel-img">
                        <Carousel image={mainImage} secondImg={secondImage} thirdImg={thirdImage}/>
                    </div>
                
                <h5>{name}</h5>
                {discount ? (<div>
                <p><del>{price}</del> zł.</p>
                <p>{discount} zł.</p>
                </div>) : <p>{price} zł.</p> }
                <Button  
                    onClick={() => {
                        navigate("/product-page" + "/" + name)
                    }} 
                    color={'black'} 
                    text={'Pokaż produkt'}
                    />
                <button onClick={() => {
                    setProducts((arr:any)  => {
                        const newProducts = [...arr, {price, discount, name, mainImage, secondImage, thirdImage, quantity:1}]
                        localStorage.setItem('products', JSON.stringify(newProducts))
                        return newProducts })
                    
                }} className="basket-button">Dodaj do koszyka</button>
            </div>
        </div>
    )
}
export { Product };

// localStorage.setItem('products', JSON.stringify(newProducts))