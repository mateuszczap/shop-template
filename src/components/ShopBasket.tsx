import { Footer } from "./Footer";
import { Header } from "./Header";
import { ProductType } from "../data/products";
import { Carousel } from "./Carousel";
import { Button } from "./Button";
import { ButtonIcon } from "./ButtonIcon";


function ShopBasket({products, setProducts}:{products: ProductType[], setProducts: any}) {
    let price = 0
    let shipping = 100 * products.length
    
    products.forEach((product) => {
        if(product.discount) {
            price += product.discount * (product.quantity || 1);
        }
        else {
            price += product.price * (product.quantity || 1);
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
            const newAddedProducts = products.map((addProd) => {
                if (
                    addProd !== prod
                ) return addProd
                
                return {...addProd, quantity:(addProd.quantity||0) + 1}
            })
            const minusAddedProducts = products.map((minusProd) => {
                if (
                    minusProd !== prod
                ) return minusProd
                return {...minusProd, quantity:(minusProd.quantity||0) - 1}
            })
                return(
                    <div className="basket-container">
                        <img src={prod.mainImage} width={100} height={100}/>
                        <div>{prod.name}</div>
                        <div>{prod.price} zł</div>
                        <ButtonIcon onClick={() => setProducts(newAddedProducts)}>+</ButtonIcon>
                        <div>{prod.quantity} szt.</div>
                        <ButtonIcon onClick={() => prod.quantity == 1? setProducts(products.filter(product => prod !== product )):setProducts(minusAddedProducts)}>-</ButtonIcon>
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