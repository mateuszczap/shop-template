import { Footer } from "./Footer";
import { Header } from "./Header";

function AboutMe() {
    return(
        <>
        <Header/>
        <div className="about-me-main-container">
            <img src="/me.jpg" className="me-photo"/>
            <p>
                Jestem pasjonatem drewna i tworzenia wyjątkowych mebli dębowych, które emanują pięknem i trwałością. Moja przygoda z meblarstwem rozpoczęła się wiele lat temu, kiedy to odkryłem w sobie miłość do rzemiosła i artystycznego wyrażania się poprzez drewno.
            </p>
            <p>
                Mój atelier jest miejscem, gdzie marzenia stają się rzeczywistością. Każdy projekt to wyzwanie i okazja do wyrażenia swojej kreatywności. Ręczna praca z drewnem pozwala mi tworzyć meble, które nie tylko spełniają swoją funkcję, ale także stanowią dzieła sztuki.
            </p>
            <p>
                Jako kreator mebli dębowych, łączę tradycję z nowoczesnym designem. Staram się wydobyć piękno naturalnego drewna dębowego, podkreślając jego wyjątkowe cechy. Każdy detal jest istotny, a jakość mojej pracy jest moim najwyższym priorytetem.
            </p>
            <p>
                Tworzenie mebli to dla mnie nie tylko zawód, to moja pasja i sposób na wyrażenie siebie. Moje meble są pełne serca i duszy, i mam nadzieję, że przynoszą radość i piękno do domów moich klientów.
            </p>
            <p>
                Zapraszam do poznania mnie i mojej pracy. Jestem gotowy do realizacji nowych projektów i spełnienia Państwa marzeń o wyjątkowych meblach dębowych.
            </p>
</div>
        <Footer/>
        </>
    )
}
export { AboutMe }