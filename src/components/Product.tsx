import { Button } from "./Button";
import { useNavigate } from "react-router-dom"

function Product ({price, name, discount}:{price: string, name: string, discount?: string}) {
    const navigate = useNavigate()
    return (
        <div className="product-page-container" onClick={() => {
            navigate("/product-page" + "/" + name)
        }}>
            <div className="product-container">
                <img src="/komoda.jpeg"/>
                <h5>{name}</h5>
                {discount ? <p><del>{price}</del>.</p> : <p>{price}</p> }
                <p>{discount}</p>
                <Button color={'black'} text={'Pokaż produkt'}/>
            </div>
        </div>
    )
}
export { Product };