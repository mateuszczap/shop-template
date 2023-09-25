import { Button } from "./Button";

function Product () {
    return (
        <div className="product-page-container">
            <div className="product-container">
                <img src="komoda.jpeg"/>
                <h5>Komoda</h5>
                <p> 5 000 zł</p>
                <Button color={'black'}/>
            </div>
        </div>
    )
}
export { Product };