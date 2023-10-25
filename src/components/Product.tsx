import { Button } from "./Button";
import { useNavigate } from "react-router-dom"

function Product ({price, name, discount, setProducts}:{price: string, name: string, discount?: string, setProducts: any}) {
    const navigate = useNavigate()
    return (
        <div className="product-page-container" >
            <div className="product-container">
                <img src="/komoda.jpeg"/>
                <h5>{name}</h5>
                {discount ? <p><del>{price}</del>.</p> : <p>{price}</p> }
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
                    
                }}>Dodaj do koszyka</button>
            </div>
        </div>
    )
}
export { Product };