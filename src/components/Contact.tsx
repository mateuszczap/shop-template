import { Footer } from "./Footer";
import { Header } from "./Header";
import { SocialInfo } from "./SocialInfo";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

// const mailerSend = new MailerSend({
//     apiKey: "",
//   });

//   const sentFrom = new Sender("you@yourdomain.com", "Your name");

//   const recipients = [
//     new Recipient("your@client.com", "Your Client")
//   ];
//   const emailParams = new EmailParams()
//   .setFrom(sentFrom)
//   .setTo(recipients)
//   .setReplyTo(sentFrom)
//   .setSubject("This is a Subject")
//   .setHtml("<strong>This is the HTML content</strong>")
//   .setText("This is the text content");

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
                <button onClick={async()=>{
                    const response = await fetch("http://localhost:3001/hello");
                    const movies = await response;
                    console.log(movies);
                }}>WYŚLIJ</button>
            </div>
        </div>
        <SocialInfo></SocialInfo>
        <Footer/>
        </>
    )
}
export { Contact };