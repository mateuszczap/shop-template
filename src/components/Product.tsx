import { Button } from "./Button";
import { useNavigate } from "react-router-dom"
import { Carousel } from "./Carousel";

function Product ({price, name, discount, setProducts, img}:{price: number, name: string, discount?: number, setProducts: any, img: string}) {
    const navigate = useNavigate()
    return (
        <div className="product-page-container" >
            <div className="product-container">
                <img src={img}/>
                {/* <Carousel/> */}
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
                    setProducts((arr:any)  => [...arr, {price, discount, name}])
                    
                }} className="basket-button">Dodaj do koszyka</button>
            </div>
        </div>
    )
}
export { Product };