import { Footer } from "./Footer";
import { Header } from "./Header";


function ShopBasket({products}:{products:{name:string}[]}) {
    return (
        <>
        <Header/>
        <div>KOSZYK</div>
        <div>{products.map((prod)=>{
            return(
                <div>{prod.name}</div>
            )
        })}</div>
        <Footer/>
        </>
    )
}
export { ShopBasket };