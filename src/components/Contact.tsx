import { Footer } from "./Footer";
import { Header } from "./Header";
import { SocialInfo } from "./SocialInfo";

function Contact() {
    return(
        <>
        <Header/>
        <div>
            <div className="contact-container">
                <h2>
                    <p>Daj znać, czy coś Ciebie zainrteresowało.</p>
                    <p>Chętnie odpowiem na Twoje pytania.</p>
                </h2>
                <div className="email-input">
                    <p>E-mail</p>
                    <input placeholder="Wpisz swoj adres email."></input>
                </div>
                <div className="email-text">
                    <p>Treść maila</p>
                    <input placeholder="Wpisz o co chcesz apytać."></input>
                </div>
                <button>WYŚLIJ</button>
            </div>
        </div>
        <SocialInfo></SocialInfo>
        <Footer/>
        </>
    )
}
export { Contact };