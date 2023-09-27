import { Button } from "./Button";

function Product ({price, name, discount}:{price: string, name: string, discount?: string}) {
    return (
        <div className="product-page-container">
            <div className="product-container">
                <img src="komoda.jpeg"/>
                <h5>{name}</h5>
                {discount ? <p><del>{price}</del>.</p> : <p>{price}</p> }
                <p>{discount}</p>
                <Button color={'black'}/>
            </div>
        </div>
    )
}
export { Product };