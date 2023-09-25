import { MainTemplate } from "../components/MainTemplate";
import { Baner } from "../components/Baner";
import { Button } from "../components/Button";
import { Product } from "../components/Product";

function ProductPage () {
    return (
        <MainTemplate>
            <Baner tekstHeader="Interesujemy się najwyższą jakością wykonania z najlepszych gatunków drzew." tekstParagraf="Drewno to niezwykły materiał, którego używa się od wieków do tworzenia pięknych i funkcjonalnych przedmiotów. Jego naturalna ciepło i tekstura dodają uroku każdemu otoczeniu. To materiał, który nie tylko inspiruje rzemieślników, ale także łączy nas z naturą, przypominając o naszych korzeniach."/>
            <div className="product-tiles-container">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </MainTemplate>
    )
}
export { ProductPage };