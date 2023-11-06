import { FaqElement } from "./FaqElement";
import { Footer } from "./Footer";
import { Header } from "./Header";
import React, { useState } from 'react';
import { faqData } from "../data/faq";

function Faq() {
    const [currentFaqElement, setCurrentFaqElement] = useState<{zapytanie: string, odpowiedź: string}| undefined>(undefined)
    
    return (
        <>
        <Header/>
        <div>
            <div className="faq-questions"><h3>Najczęściej zadawane pytania (FAQ)</h3>
            {faqData.map((faq) => {
                return <FaqElement question={faq.zapytanie} answer={faq.odpowiedź} isOpen={currentFaqElement?.zapytanie===faq.zapytanie} 
                setIsOpen={() => 
                    {
                        if(currentFaqElement?.zapytanie===faq.zapytanie){setCurrentFaqElement(undefined)
                        return}
                        setCurrentFaqElement(faq)}}/>
            })}
                
              
                </div>
        </div>
        <Footer/>
        </>
    )
}
export { Faq }