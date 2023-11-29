import { Footer } from "./Footer";
import { Header } from "./Header";
import { ProductType } from "../data/products";


function ShopBasket({products, setProducts}:{products: ProductType[], setProducts: any}) {
    let price = 0 
    let shipping = 100 * products.length
    console.log(price)
    
    products.forEach((product) => {
        if(product.discount) {
            price += product.discount
        }
        else {
            price += product.price
        }
    })
    
    // let tax = (price + shipping) * 0.23
    let sum = price + shipping

    return (
        <>
        <Header/>
        <main className="main-basket-container">
            <div>
            <h3>TWÓJ KOSZYK</h3>
            <div>{products.map((prod)=>{
                //prod, products
                return(
                    <div className="basket-container">
                        <div>{prod.name}</div>
                        <div>{prod.price}zł</div>
                        <div onClick={() => setProducts(products.filter(product => prod !== product ))}>-</div>
                    </div>
                )
            })}</div>
            </div>
            <div className="summary-container">
                <h3>PODSUMOWANIE</h3>
                <p>Suma produktów: {price} zł</p>
                <p>Wysyłka: {shipping} zł</p>
                {/* <p>Podatek: {tax} zł</p> */}
                <p>Kod promocyjny</p>
                <input placeholder="wpisz kod"/>
                <p>Suma końcowa: {price > 0 ? sum.toFixed(2) : 0} zł</p>
            </div>
        </main>
        <Footer/>
        </>
    )
}
export { ShopBasket };

// obliczyć sumę: 