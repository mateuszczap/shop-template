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
        price: '6000zł',
    },
    {
        name: 'Stół',
        price: '6000zł',
    },
    {
        name: 'Taboret',
        price: '5000zł',
    }
]

function ProductPage () {
    return (
        <MainTemplate>
            <Baner tekstHeader="Interesujemy się najwyższą jakością wykonania z najlepszych gatunków drzew." tekstParagraf="Drewno to niezwykły materiał, którego używa się od wieków do tworzenia pięknych i funkcjonalnych przedmiotów. Jego naturalna ciepło i tekstura dodają uroku każdemu otoczeniu. To materiał, który nie tylko inspiruje rzemieślników, ale także łączy nas z naturą, przypominając o naszych korzeniach."/>
            <div className="product-tiles-container">
                {tablica.map(() => {
                    return <Product price={'6000zł'} name={'Taboret'}/>
                }
                )}
                {/* <Product price={'6000zł'} name={'Komoda'}/> */}
                <Product price={'8000zł'} name={'Krzesło'}/>
                <Product price={'4000zł'} name={'Stół'}/>
                <Product price={'5000zł'} name={'Taboret'}/>
            </div>
        </MainTemplate>
    )
}
export { ProductPage };