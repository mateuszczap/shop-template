import { Button } from "./Button";
import { useNavigate } from "react-router-dom"

function Product ({price, name, discount, setProducts, img}:{price: number, name: string, discount?: number, setProducts: any, img: string}) {
    const navigate = useNavigate()
    return (
        <div className="product-page-container" >
            <div className="product-container">
                <img src={img}/>
                <h5>{name}</h5>
                {discount ? <p><del>{price} zł</del>.</p> : <p>{price} zł</p> }
                <p>{discount}</p>
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