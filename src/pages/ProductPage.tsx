import { MainTemplate } from "../components/MainTemplate";
import { Baner } from "../components/Baner";
import { Button } from "../components/Button";
import { Product } from "../components/Product";
import { tablica } from "../data/products";



function ProductPage () {
    return (
        <MainTemplate>
            <Baner tekstHeader="Interesujemy się najwyższą jakością wykonania z najlepszych gatunków drzew." tekstParagraf="Drewno to niezwykły materiał, którego używa się od wieków do tworzenia pięknych i funkcjonalnych przedmiotów. Jego naturalna ciepło i tekstura dodają uroku każdemu otoczeniu. To materiał, który nie tylko inspiruje rzemieślników, ale także łączy nas z naturą, przypominając o naszych korzeniach."/>
            <div className="product-tiles-container">
                {tablica.map((prod) => {
                    return <Product price={prod.price} name={prod.name} discount={prod.discount}/>
                }
                )}
            </div>
        </MainTemplate>
    )
}
export { ProductPage };