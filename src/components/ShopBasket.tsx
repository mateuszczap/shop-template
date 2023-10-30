import { Footer } from "./Footer";
import { Header } from "./Header";


function ShopBasket({products, setProducts}:{products:{name:string}[], setProducts: any}) {
    //products
    return (
        <>
        <Header/>
        <div>KOSZYK</div>
        <div>{products.map((prod)=>{
            //prod, products
            return(
                <div className="basket-container">
                    <div>{prod.name}</div>
                    <div onClick={() => setProducts(products.filter(product => prod !== product ))}>-</div>
                </div>
            )
        })}</div>
        <Footer/>
        </>
    )
}
export { ShopBasket };