import { Footer } from "./Footer";
import { Header } from "./Header";
import { SocialInfo } from "./SocialInfo";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import { useState } from "react";

function Contact() {
    const [inputEmail, setInputEmail] = useState('');
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event: any) => {
        setInputValue(event.target.value);
    }
    const handleInputEmail = (event: any) => {
        setInputEmail(event.target.value);
    }

    return(
        <>
        <Header/>
        <div>
            <div className="contact-container">
                <h2>
                    <p>Daj znać, czy coś Ciebie zainrteresowało.</p>
                    <p>Chętnie odpowiem na Twoje pytania.</p>
                </h2>
                <div className="email-input-container">
                    <div className="email-input">
                        <p>E-mail</p>
                        <input placeholder="Wpisz swoj adres email." type='email' value={inputEmail} onChange={handleInputEmail}></input>
                    </div>
                </div>
                <div className="email-text-container">
                    <div className="email-text">
                        <p>Treść maila</p>
                        <input placeholder="Wpisz o co chcesz apytać." value={inputValue} onChange={handleInputChange}></input>
                    </div>
                    <button className="button-email" onClick={async()=>{
                        const response = await fetch("http://localhost:3001/hello", {
                            body:JSON.stringify({email: inputEmail, message: inputValue }),
                            method:'post',
                            headers: {
                                "Content-Type": "application/json"
                            },
                        });
                        const movies = await response;
                        console.log(movies);
                    }}>WYŚLIJ</button>
                </div>
            </div>
        </div>
        <SocialInfo></SocialInfo>
        <Footer/>
        </>
    )
}
export { Contact };