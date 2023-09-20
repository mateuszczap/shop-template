function Baner ({tekstHeader, tekstParagraf}: {tekstHeader: string, tekstParagraf: string}) {
    return (
        <div className="background-img">
           <h2>{tekstHeader}</h2>
           <p>{tekstParagraf}</p>
            <button className="button">Pokaż produkty</button>
        </div>

    )
}
export { Baner };




 {/* <h2>Interesujemy się najwyższą jakością wykonania z najlepszych gatunków drzew.</h2>
            <p>Drewno to niezwykły materiał, którego używa się od wieków do tworzenia pięknych i funkcjonalnych przedmiotów. Jego naturalna ciepło i tekstura dodają uroku każdemu otoczeniu. To materiał, który nie tylko inspiruje rzemieślników, ale także łączy nas z naturą, przypominając o naszych korzeniach.</p> */}