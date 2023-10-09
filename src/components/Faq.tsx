import { FaqElement } from "./FaqElement";
import { Footer } from "./Footer";
import { Header } from "./Header";
import React, { useState } from 'react';
import { faqData } from "../data/faq";

function Faq() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
        <Header/>
        <div>
            <div className="faq-questions"><h3>Najczęściej zadawane pytania (FAQ)</h3>
            {faqData.map((faq) => {
                return <FaqElement question={faq.zapytanie} answer={faq.odpowiedź}/>
            })}
                
              
                </div>
        </div>
        <Footer/>
        </>
    )
}
export { Faq }