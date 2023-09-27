import { MainTemplate } from "../components/MainTemplate";
import { Baner } from "../components/Baner";
import { Button } from "../components/Button";
import { Product } from "../components/Product";


const tablica = [
    {
        name: 'Komoda',
        price: '6000zł',
    },
    {
        name: 'Krzesło',
        price: '1000zł',
    },
    {
        name: 'Stół',
        price: '8000zł',
    },
    {
        name: 'Taboret',
        price: '1500zł',
    },
    {
        name: 'Stolik',
        price: '2500zł',
    },
    {
        name: 'RTV',
        price: '4900zł',
        discount: '2000zł'
    },
    {
        name: 'Sofa',
        price: '6500zł',
    },
    {
        name: 'Drzwi',
        price: '2000zł',
        discount: '1499zł'
    }
]

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