import { Button } from "./Button";

function Product ({price, name}:{price: string, name: string}) {
    return (
        <div className="product-page-container">
            <div className="product-container">
                <img src="komoda.jpeg"/>
                <h5>{name}</h5>
                <p>{price}</p>
                <Button color={'black'}/>
            </div>
        </div>
    )
}
export { Product };